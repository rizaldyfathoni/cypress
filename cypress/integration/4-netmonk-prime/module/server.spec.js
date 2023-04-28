/// <reference types="cypress" />

describe('Netmonk Module Server Monitoring Testing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081/login')
    })

    it('redirect to /home and clicked module Server Monitoring', () => {
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

        cy.get('[data-testid^=buttonFeature_2]')
            .click()

    })
})
    