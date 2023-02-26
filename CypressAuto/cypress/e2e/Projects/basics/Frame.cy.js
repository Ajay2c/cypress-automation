// This is a Cypress test suite for testing the handling of frames in a web application.
// It includes three test cases which use different approaches to interact with an iframe element on the page.

import'cypress-iframe'

describe('Handling frames',()=>{

// Approach 1: Get iframe element by ID, access its content, and wrap it in a Cypress object.
    it('approch 1',()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')

        const iframe = cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        // Then clear its content, type new text, and click Bold button.
        iframe.clear().type("Welcome ajay {ctrl+a}");
        cy.get("button[title='Bold']").click()

    })

    // Approach 2: Use the 'getIframe' method from the 'cypress-iframe' plugin to get the iframe element.
    // the plug-in command is inside the support commands.js file
    it('approch 2',()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')


        // Then clear its content, type new text, and click Bold button.
        cy.getIframe('#mce_0_ifr').clear().type("Welcome ajay {ctrl+a}")

        cy.get("button[title='Bold']").click()
    })

// Approach 3: Use the 'frameLoaded' method from the 'cypress-iframe' plugin to ensure that the iframe is loaded before interacting with it.
// for this need to install the iframe, the command is "npm install -D cypress-iframe"
    it('approch 3',()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.frameLoaded('#mce_0_ifr')

        // Then get a Cypress object representing the iframe element, clear its content, type new text, and click Bold button.
        cy.iframe('#mce_0_ifr').clear().type("Welcome ajay {ctrl+a}")

        cy.get("button[title='Bold']").click()
    })




})