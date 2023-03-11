
class amazon {

    amazonVisit(){
        cy.visit("https://www.amazon.in/")
    }
    amazonLogo()
    {
        cy.get("#nav-logo").should('be.visible')
    }

    creatingNewUser(newUSer){
        cy.get("#nav-link-accountList").click()

        cy.get("#createAccountSubmit").click()

    }

}

export default amazon;