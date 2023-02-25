describe('My first test case',() =>{
    it('verify title-positive',()=>{

       cy.visit("https://opensource-demo.orangehrmlive.com/")
       cy.title().should('eq','OrangeHRM')
        
        //steps
        
    })

    it('verify title-negative',()=>{

        //steps
        cy.visit("https://opensource-demo.orangehrmlive.com/")
       cy.title().should('eq','OrangeHRM123456')
    })

})