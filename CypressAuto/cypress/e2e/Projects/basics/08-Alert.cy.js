
describe(" Alert Box's ",()=>{

// Test for a normal alert box.
it('Normal Alert',()=>{
    // Visit the page with the alert box.
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    // Click the button to trigger the alert box.
    cy.get("button[onclick='jsAlert()']").click()
    // Check that the alert box contains the expected message.
    cy.on('window:alert',(t)=>{
        expect(t).to.contain('I am a JS Alert')
    })
    // Check that the result contains the expected message.
    cy.get('#result').should('have.contain','You successfully clicked an alert')
})

// Test for a confirm alert box.
it('Confirm Alert Box',()=>{
    // Visit the page with the alert box.
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    // Click the button to trigger the alert box.
    cy.get(':nth-child(2) > button').click()
    // Check that the alert box contains the expected message.
    cy.on('window:confirm',(t)=>{
        expect(t).to.contain('I am a JS Confirm')
    })
    // Click cancel on the alert box.
    cy.on('window:confirm',()=> false)
    // Check that the result contains the expected message.
    cy.get('#result').should('have.text','You clicked: Cancel')
})

// Test for a prompt alert box.
it('JS Prompt Alert',()=>{
    // Visit the page with the alert box.
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    // Stub the prompt function with a predefined value.
    cy.window().then((win)=>{
        cy.stub(win,'prompt').returns('window')
    })
    // Click the button to trigger the prompt alert box.
    cy.get("button[onclick='jsPrompt()']").click()
    // Check that the prompt alert box contains the expected message.
    cy.on('window:prompt',(t)=>{
        expect(t).to.contain('I am a JS prompt')
    })
    // By default, Cypress closes prompt alerts with 'OK'.
})

// Test for an authentication alert box.
it('Authentication Alert',()=>{
    // Visit the page with the authentication alert box and authenticate.
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth:{username: "admin", password: "admin"}})
    // Check that the page contains the expected message.
    cy.get("div[class='example'] p").should('have.contain','Congratulations!')
})
// Alternatively, we can use this URL for direct login: "https://admin:admin@the-internet.herokuapp.com/basic_auth"

})