describe('ImplicitAssertion', () => {
  
  //In Cypress, implicit assertions are made automatically by default without the need to use an explicit assertion method like should.
  // An implicit assertion is any verification that Cypress performs as part of the action it's executing


    // 1) validations for the visit
  
  it('visit ORHM', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    
    })


    // 2) validations for the URL

    
    it('verify the url', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive.com')
        .should('contain','orangehrm')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      
      })


    // 3) validations for the title

    it('verify the title', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      
        // going to test title with "and" impliment assertion
        // Keywords are - include, eq, contain, not.contain 
      
        cy.title().should('include','Orange')
        .should('eq','OrangeHRM')
        .and('contain','HRM')
        .and('not.contain','Ajay') // check- Ajay should not comes in title

      })


    // 4) validations for the Values

    it('verify the values', () =>{

      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      
      cy.get("input[name= 'username']").type("Admin")

      cy.get("[name = 'password']").type('admin123')

      cy.get("input[name= 'username']").should('have.value',"Admin") // assertion the given value

      cy.get("[name = 'password']").should('have.value','admin123')

    }) 
    
    // 5) validations for the URL
    
    it('verify the URL', () =>{

      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   
      cy.xpath("//a").should('have.length','5')

      cy.xpath("//a").should('not.have.length','2')


    })


    // 6) validations for the Logo

    it('verify the Logo', () =>{

      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   
      cy.get('.orangehrm-login-branding > img').should('be.visible') // the img should be visible
      .and('exist') // logo exist

    })


  })