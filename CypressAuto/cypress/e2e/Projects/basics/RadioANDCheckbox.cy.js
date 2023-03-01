describe('Selecting Radio button & Check box',()=>{

    it.skip('Radio Button',()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        // checking the radio buttons are unselected 
        cy.get(".form-check-input[name='optionsRadios']").should('not.be.checked')

        // selecting the male radio button
         cy.get("#male").check().should('be.checked')
        // assertion for radio button 
        cy.get("#male").should('be.visible')

    })

    it('Check Box',()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        // selecting the first and last, and unselecting 
        cy.get(".form-check-input[type='checkbox']").first().check()
        cy.get(".form-check-input[type='checkbox']").last().check()

        cy.get(".form-check-input[type='checkbox']").first().uncheck()
        cy.get(".form-check-input[type='checkbox']").last().uncheck()

        
        // selecting all the check box and unselect 
        cy.get(".form-check-input[type='checkbox']").check()
        cy.get(".form-check-input[type='checkbox']").uncheck()


    })



})