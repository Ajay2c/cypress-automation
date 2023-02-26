describe('ExplicitAssertion', () => {
  
  // 1) Perform validations after visiting the webpage

it('Visit OrangeHRM website and validate username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    cy.get("input[name= 'username']").type("Admin")

    cy.get("[name = 'password']").type('admin123')

    cy.get("button[type='submit']").click()

    // Using BDD assertion by creating a JavaScript function with the Chai framework

    // Set an expected name to compare against the actual name
    let expName="ajay"

    // Get the actual name from the page
    cy.get('.oxd-userdropdown-name').then((x) => {

        let actName = x.text()

        // Assert that the expected name does not match the actual name using BDD style
        expect(expName).to.not.equal(actName)

        // Assert that the expected name does not match the actual name using TDD style
        assert.notEqual(expName,actName)

    })
  
  })

})
