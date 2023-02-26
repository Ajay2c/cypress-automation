
describe(" Alert Box's ",()=>{

    it.skip('the normal alert',()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()

        cy.get('#result').should('have.contain','You successfully clicked an alert')

    })


    it.skip('confirm alert box',()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        cy.get(':nth-child(2) > button').click()

        // we verifying the alert box does contain our exp message
        cy.on('window:alert',(t)=>{

            expect(t).to.contain('I am a JS Alert')

        })

        cy.get('#result').should('have.contain','Ok')

    })


    // what if we try to select cancel

    it.skip('confirm alert box - Cancel',()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        cy.get("button[onclick='jsConfirm()']").click()

        // we verifying the alert box does contain our exp message
        cy.on('window:confirm',(t)=>{

            expect(t).to.contain('I am a JS Confirm')

        })

        // to cancel the alert 
        cy.on('window:confirm',()=> false)

        cy.get('#result').should('have.text','You clicked: Cancel')

    })

    // 3) Javascript Prompt Alert: it will have some text with a text box for user input along with 'OK'

    it.skip('Js prompt alert',()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        // we have to ready with our data, before click the prompt box 
        cy.window().then((win)=>{

            cy.stub(win,'prompt').returns('window')
        })


        //click the prompt box with the above mention data

        cy.get("button[onclick='jsPrompt()']").click()

        //by default cypress close the alerts with 'OK'

    })

    // 4)Autentication Alert box: 

    it.skip('Authentication Alert',()=>{

        cy.visit("https://the-internet.herokuapp.com/basic_auth",
                {auth:{
                    username: "admin",
                    password: "admin"
        }})

        cy.get("div[class='example'] p").should('have.contain','Congratulations!')
       

    })

    // (or) we use this URL for direct login ("https://admin:admin@the-internet.herokuapp.com/basic_auth")





})