describe('Selecting Radio button & Check box',()=>{

    // Test for radio buttons
    it('Radio Button',()=>{
        
        // Navigate to the web page being tested
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        // Verify that the radio buttons are initially unselected
        cy.get(".form-check-input[name='optionsRadios']").should('not.be.checked')

        // Select the male radio button
        cy.get("#male").check().should('be.checked')

        // Verify that the male radio button is visible and selected
        cy.get("#male").should('be.visible')

    })

    // Test for checkboxes
    it('Check Box',()=>{

        // Navigate to the web page being tested
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        // Select the first and last checkboxes and then unselect them
        cy.get(".form-check-input[type='checkbox']").first().check()
        cy.get(".form-check-input[type='checkbox']").last().check()
        cy.get(".form-check-input[type='checkbox']").first().uncheck()
        cy.get(".form-check-input[type='checkbox']").last().uncheck()

        // Select all checkboxes and then unselect them
        cy.get(".form-check-input[type='checkbox']").check()
        cy.get(".form-check-input[type='checkbox']").uncheck()

    })

})
