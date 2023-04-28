/// <reference types="cypress" />

describe('Netmonk Module Web/API Monitoring Testing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081/login')
    })

    it('Add new Web/API Status and then click Add Data', () => {
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

        cy.get('[id^=sidebarNavRightWebsiteStatusLink]')
            .click()

        cy.contains('Add Web/API')
            .click()

        cy.get('[id^=name]')
            .parent()
            .find('input')
            .type('Web/API');

        cy.contains('Select...')
            .click()

        cy.contains('Testing Web Probe')
            .click()
        
        cy.get('[id^=url]')
            .parent()
            .find('input')
            .type('123.123.123.123');

        cy.get('[type=submit]')
            .click()
    })

    it('Click View Web/API Status', () => {
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

        cy.get('[id^=sidebarNavRightWebsiteStatusLink]')
            .click()

        // cy.get('a[href*="/website/status/63396b661dbcf90001503bad"]')
        //     .click()
    })

    it('Click Edit Web/API Status', () => {
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

        cy.get('[id^=sidebarNavRightWebsiteStatusLink]')
            .click()

        // cy.get('a[href*="/website/status/63396b661dbcf90001503bad"]')
        //     .click()
    })

    it('Click Delete Web/API Status', () => {
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

        cy.get('[id^=sidebarNavRightWebsiteStatusLink]')
            .click()

        // cy.get('a[href*="/website/status/63396b661dbcf90001503bad"]')
        //     .click()
    })
})
    