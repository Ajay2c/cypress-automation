describe('',()=>{

    it('Login the staging platform',()=>{


        let staging = 'beta';
        cy.fixture("loginIDsforRaise.json").then((testData)=>{

            cy.visit("https://platform-"+(staging)+".raisetech.io/auth/login")

            switch (staging){

                case 'staging1':
                cy.LoginUsers(testData.St1OA,testData.St1OAPASS)
                break;
                case 'staging2':
                    cy.LoginUsers(testData.St2OA,testData.St2OAPASS)
                break;
                case 'staging3':
                    cy.LoginUsers(testData.St3OA,testData.St3OAPASS)
                break;
                case 'staging4':
                    cy.LoginUsers(testData.St4OA,testData.St4OAPASS)
                break;
                case 'beta':
                    cy.LoginUsers(testData.BetaOA,testData.BetaOAPASS)
                break;
                    
            }
    
        })
    
    })
})