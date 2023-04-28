/// <reference types="cypress" />

describe('Netmonk Login Authentication', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081/login')
  })

  it('display error message when user type wrong username or password', () => {
    cy.viewport(1440, 750)

    const username = 'wrong';
    const password = 'notpass';

    cy.get('label[for=username]')
      .parent()
      .find('input')
      .type(username);

    cy.get('label[for=password]')
      .parent()
      .find('input')
      .type(password);

    cy.get('[type=submit]')
      .click()

    cy.location('pathname').should('not.include', '/home')
  })

  it('display error message when user does not fill in username or password', () => {
    cy.viewport(1440, 750)

    cy.get('[type=submit]')
      .click()

    cy.location('pathname').should('not.include', '/home')
  })

  it('redirect to /home when success login', () => {
    cy.viewport(1440, 750)

    const username = 'root';
    const password = 'pass';

    cy.get('label[for=username]')
      .parent()
      .find('input')
      .type(username);

    cy.get('label[for=password]')
      .parent()
      .find('input')
      .type(password);

    cy.get('[type=submit]')
      .click()

    cy.location('pathname')
      .should('include', '/home')
  })


})
  