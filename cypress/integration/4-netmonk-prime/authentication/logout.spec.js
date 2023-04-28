/// <reference types="cypress" />

describe('Netmonk Logout Authentication', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081/login')
    })
  
    it('redirect to /home when click cancel button logout', () => {
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
    
        cy.contains('root')
            .click()
    
        cy.contains('Logout')
            .click()

            cy.get('[data-testid^=logoutConfirmNo]')
        .click()
    })

    it('redirect to /login when click success button logout', () => {
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
    
        cy.contains('root')
            .click()
    
        cy.contains('Logout')
            .click()

        cy.get('[data-testid^=logoutConfirmYes]')
        .click()
    })


})
    