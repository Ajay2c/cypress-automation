describe('Handling Tabs',()=>{
// There are 2 approaches for handling child tabs that Cypress cannot handle directly.
// Approach 1 is to remove the target="_blank" attribute and open the link in the same tab.
it('Approach 1',()=>{
    // Visit the parent tab.
    cy.visit('https://the-internet.herokuapp.com/windows')
    // Remove the target="_blank" attribute to open link in the same tab.
    cy.get(".example>a").invoke('removeAttr','target').click();
    // Wait for 5 seconds.
    cy.wait(5000);
    // Go back to the parent tab.
    cy.go('back');
})

// Approach 2 is to get the URL of the child tab and open it in the same parent tab.
it('Approach 2',()=>{
    // Visit the parent tab.
    cy.visit('https://the-internet.herokuapp.com/windows')
    // Get the URL of the child tab.
    cy.get(".example>a").then((newtab)=>{
        let url = newtab.prop('href');
        // Visit the URL in the same parent tab.
        cy.visit(url)
     })
    // Check that the URL includes "https://the-internet.herokuapp.com/windows/new".
    cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
    // Go back to the parent tab.
    cy.go('back')
})

})