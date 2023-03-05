describe('4 types of DropDown',()=>{

    it('Select tag Dropdown',()=>{
        // Visiting a website
        cy.visit("https://www.zoho.com/people/free-demo.html")

        // Selecting a dropdown option by value and verifying the selected value
        cy.get('#zcf_address_country')
        .select('Iran')
        .should('have.value','Iran')
    })


    it('No-Select tag Dropdown',()=>{
        // Visiting a website
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        
        // Clicking on the dropdown to open it
        cy.get('#select2-billing_country-container').click()

        // Typing the search query and selecting the option that appears in the dropdown list
        cy.get('.select2-search__field').type('Iran').type('{enter}')

        // Verifying the selected value
        cy.get('#select2-billing_country-container').should('have.text','Iran')
    })

    it('Auto select drop-down',()=>{
        // Visiting a website
        cy.visit('https://www.wikipedia.org/')

        // Typing a search query and selecting the option that appears automatically in the dropdown list
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestions-dropdown').contains('Delhi Capitals').click()
    })

    it('Dynamic Auto select Drop-down',()=>{
        // Visiting a website
        cy.visit('https://www.google.com/')

        // Typing a search query
        cy.get("input[name = 'q' ]").type('cypress automation')

        // Waiting for the dropdown options to appear
        cy.wait(3000)

        // Using JQuery to iterate through the dropdown options and clicking the desired option
        cy.get('div.wM6W7d > span').each( ($el, index, $list)=>{
            if($el.text()=='cypress automation tool') 
            {
                cy.wrap($el).click()
            }
        })

        // This is a normal check, but it may not work all the time because the dropdown options are dynamic
        // cy.get('div.wM6W7d > span').should('have.value','cypress automation tool')
    })
})
