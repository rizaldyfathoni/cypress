/// <reference types="cypress" />

describe('Netmonk Module Web/API Monitoring Testing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081/login')
    })

    it('Add new Web/API Probe and then click cancel button', () => {
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

        cy.get('[data-testid^=buttonFeature_1]')
            .click()

        cy.get('[id^=sidebarNavRightWebsiteProbeLink]')
            .click()

        cy.contains('Add Web/API Probe')
             .click()

         cy.get('label[for=probe_name]')
             .parent()
             .find('input')
             .type('Testing Web Probe');

        cy.get('label[for=location]')
            .parent()
            .find('input')
            .type('Testing Location');

        cy.contains('Cancel')
            .click()
    })

    it('Add new Web/API Probe and then click Add Data button', () => {
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

        cy.get('[data-testid^=buttonFeature_1]')
            .click()

        cy.get('[id^=sidebarNavRightWebsiteProbeLink]')
            .click()

        cy.contains('Add Web/API Probe')
            .click()

    cy.get('label[for=probe_name]')
        .parent()
        .find('input')
        .type('Testing Web Probe');

    cy.get('label[for=location]')
        .parent()
        .find('input')
        .type('Testing Location');

    cy.contains('Add Data')
        .click()

    cy.get('[type=submit]')
        .click()
    })

    it('Display an error message if you have the same data and pop up is not closed', () => {
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

        cy.get('[data-testid^=buttonFeature_1]')
            .click()

        cy.get('[id^=sidebarNavRightWebsiteProbeLink]')
            .click()

        cy.contains('Add Web/API Probe')
            .click()

    cy.get('label[for=probe_name]')
        .parent()
        .find('input')
        .type('Testing Web Probe');

    cy.get('label[for=location]')
        .parent()
        .find('input')
        .type('Testing Location');

    cy.contains('Add Data')
        .click()

    cy.get('[type=submit]')
        .click()
    })

    it('Web/API Probe and then click action view for open popup probe (GET ID)', () => {
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

        cy.get('[data-testid^=buttonFeature_1]')
            .click()

        cy.get('[id^=sidebarNavRightWebsiteProbeLink]')
            .click()

        cy.get('a[href*="/inventory/website-probe/show/635e3f5b4c43dc0001443d1c"]')
            .click()
    })

    it('Web/API Probe and then click action edit for open popup probe and update probe (GET ID)', () => {
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

        cy.get('[data-testid^=buttonFeature_1]')
            .click()

        cy.get('[id^=sidebarNavRightWebsiteProbeLink]')
            .click()

        cy.get('a[href*="/inventory/website-probe/edit/635e3f5b4c43dc0001443d1c"]')
            .click()

        cy.get('label[for=probe_name]')
            .parent()
            .find('input')
            .type(' Updated');

        cy.get('label[for=location]')
            .parent()
            .find('input')
            .type(' Updated');

        cy.contains('Update')
            .click()

        cy.get('[type=submit]')
            .click()
    })

    it('Web/API Probe and then click action delete for open popup probe (GET ID)', () => {
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

        cy.get('[data-testid^=buttonFeature_1]')
            .click()

        cy.get('[id^=sidebarNavRightWebsiteProbeLink]')
            .click()

        cy.get('a[href*="/inventory/website-probe/delete/635e3f5b4c43dc0001443d1c"]')
            .click()

        cy.get('[type=submit]')
            .click()
    })
})
    