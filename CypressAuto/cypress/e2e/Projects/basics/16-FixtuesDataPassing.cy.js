// This test case verifies that a single set of login credentials can be passed to the application
// as a JSON object loaded from a fixture file

describe('Single data passing as Json format by connecting fixture', () => {

    it('simple data passing', () => {
          
      // Load the login credentials from the 'singledatapassing' fixture file
      cy.fixture('singledatapassing').then((logins) => {
  
        // Navigate to the login page
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
          
        // Enter the username and password from the fixture
        cy.get("input[placeholder='Username']").type(logins.username)
        cy.get("input[placeholder='Password']").type(logins.password)
        cy.get("button[type='submit']").click()
  
        // Verify that the expected welcome message is displayed
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
          .should('have.text', logins.expected)
      })
    })
  
    // Access the test data through a beforeEach hook, which loads the JSON fixture data before each test case

describe('Access the test data through a beforeEach hook', () => {

    let userdata;
  
    beforeEach('running the page and collecting the data', () => {
      // Load the fixture data and store it in the 'userdata' variable
      cy.fixture("singledatapassing.json").then((data) => {
        userdata = data;
      })
    })
  
    // This test case verifies that a single set of login credentials can be passed to the application
    it('simple data passing', () => {
        
      // Navigate to the login page
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
                
      // Enter the username and password from the fixture
      cy.get("input[placeholder='Username']").type(userdata.username)
      cy.get("input[placeholder='Password']").type(userdata.password)
      cy.get("button[type='submit']").click()
  
      // Verify that the expected welcome message is displayed
      cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
        .should('have.text', userdata.expected)
    })
  })
  

})
  