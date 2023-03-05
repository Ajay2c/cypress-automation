describe('ImplicitAssertion', () => {

  // 1) validations for the visit
  it('visit ORHM', () => {
      // Visit the website URL
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  // 2) validations for the URL
  it('verify the url', () => {
      // Visit the website URL
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      
      // Verify that the URL includes 'orangehrmlive.com' and contains 'orangehrm' and is equal to the given URL
      cy.url().should('include', 'orangehrmlive.com')
          .should('contain', 'orangehrm')
          .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  // 3) validations for the title
  it('verify the title', () => {
      // Visit the website URL
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
      // Verify that the title includes 'Orange', is equal to 'OrangeHRM', contains 'HRM', and does not contain 'Ajay'
      cy.title().should('include', 'Orange')
          .should('eq', 'OrangeHRM')
          .and('contain', 'HRM')
          .and('not.contain', 'Ajay')
  })

  // 4) validations for the Values
  it('verify the values', () => {
      // Visit the website URL
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
      // Enter the username and password values and assert that they are as expected
      cy.get("input[name= 'username']").type("Admin")
      cy.get("[name = 'password']").type('admin123')
      cy.get("input[name= 'username']").should('have.value', "Admin")
      cy.get("[name = 'password']").should('have.value', 'admin123')
  }) 
  
  // 5) validations for the URL
  it('verify the URL', () => {
      // Visit the website URL
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 
      // Assert that there are 5 links on the page and that there are not 2 links on the page
      cy.xpath("//a").should('have.length', '5')
      cy.xpath("//a").should('not.have.length', '2')
  })

  // 6) validations for the Logo
  it('verify the Logo', () => {
      // Visit the website URL
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 
      // Assert that the logo image is visible and exists
      cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist')
  })
})
