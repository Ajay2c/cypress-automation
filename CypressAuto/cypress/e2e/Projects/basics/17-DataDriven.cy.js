describe('Multiple data passing', ()=>{


    it('with the help of forEach loop we passing multiple data ',()=>{

        cy.fixture("multipledatapassing.json").then((logins) =>{

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            logins.forEach((userdatas)=>{


                cy.get("input[placeholder='Username']").type(userdatas.username)
                cy.get("input[placeholder='Password']").type(userdatas.password)
                cy.get("button[type='submit']").click()

                if(userdatas.username == "Admin" && userdatas.password == "admin123"){

                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                    .should('have.text', userdatas.expected)

                    cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click()
                    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)").click()
    
                }
                else{
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
                    .should('have.text', userdatas.expected)
                }
                
            } )
            
        })


    })
})