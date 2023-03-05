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




/*
How its work? 

This code is a Cypress test suite for testing the handling of frames in a web application. The test suite consists of three test cases (or "it" blocks) which use different approaches to interact with an iframe on the webpage 'https://the-internet.herokuapp.com/iframe'.

Approach 1:

The first test case visits the webpage and gets the iframe element by its ID 'mce_0_ifr'.
The '.its' method is used to access the 'contentDocument.body' property of the iframe element.
The 'should' method is then used to verify that the body of the iframe is visible.
The 'then' method is used to wrap the iframe object in a Cypress object which allows Cypress commands to be applied to it.
The 'clear' method is called to clear the content of the iframe, and the 'type' method is called to enter the text "Welcome ajay {ctrl+a}" into the iframe.
Finally, the 'click' method is used to click on the 'Bold' button on the page.
Approach 2:

The second test case also visits the same webpage and uses the 'getIframe' method from the 'cypress-iframe' plugin to get the iframe element.
The 'clear' method is called to clear the content of the iframe, and the 'type' method is called to enter the same text "Welcome ajay {ctrl+a}" into the iframe.
Finally, the 'click' method is used to click on the 'Bold' button on the page.
Approach 3:

The third test case also visits the same webpage and uses the 'frameLoaded' method from the 'cypress-iframe' plugin to ensure that the iframe is loaded before interacting with it.
The 'iframe' method is then used to get a Cypress object which represents the iframe element.
The 'clear' method is called to clear the content of the iframe, and the 'type' method is called to enter the same text "Welcome ajay {ctrl+a}" into the iframe.
Finally, the 'click' method is used to click on the 'Bold' button on the page.

*/