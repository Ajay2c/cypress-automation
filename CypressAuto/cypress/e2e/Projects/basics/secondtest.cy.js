describe('My first test case',() =>{

    // 1) Positive validation for title
    
    it('verify title-positive',()=>{
        
        // Visit the website
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        
        // Verify that the title equals 'OrangeHRM'
        cy.title().should('eq','OrangeHRM')
        
    })

    // 2) Negative validation for title

    it('verify title-negative',()=>{
        
        // Visit the website
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        
        // Verify that the title does not equal 'OrangeHRM123456'
        cy.title().should('eq','OrangeHRM123456')
    })

})
