describe('4 types of DropDown',()=>{


    it.skip('Select tag Dropdown',()=>{

        cy.visit("https://www.zoho.com/people/free-demo.html")

        cy.get('#zcf_address_country')
        .select('Iran')
        .should('have.value','Iran')
    })


    it.skip('No-Select tag Dropdown',()=>{

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        
        cy.get('#select2-billing_country-container').click()

        cy.get('.select2-search__field').type('Iran').type('{enter}')

        cy.get('#select2-billing_country-container').should('have.text','Iran')


    })

    it.skip('Auto select drop-down',()=>{

        cy.visit('https://www.wikipedia.org/')

        cy.get('#searchInput').type('Delhi')

        cy.get('.suggestions-dropdown').contains('Delhi Capitals').click()

    })

    it('Dynamic Auto select Drop-down',()=>{

        cy.visit('https://www.google.com/')
        cy.get("input[name = 'q' ]").type('cypress automation')

        cy.wait(3000)

       // cy.get('div.wM6W7d > span').should('have.length', 10)


        //now we going to use JQuery

        cy.get('div.wM6W7d > span').each( ($el, index, $list)=>{

            if($el.text()=='cypress automation tool') 
            {
                
                cy.wrap($el).click()
            }
        })

        cy.get('div.wM6W7d > span').should('have.value','cypress automation tool')

    })






})