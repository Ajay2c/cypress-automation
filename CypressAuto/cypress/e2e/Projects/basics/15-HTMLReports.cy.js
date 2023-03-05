
describe('Test for HTML Report',()=>{

    
    it('selecting search bar',()=>{


        cy.log('*********Selecting search bar*********')


    })
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
})