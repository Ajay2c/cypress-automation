
describe('ExplicitAssertion', () => {
  
      // 1) validations for the visit
    
    it('visit ORHM', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        cy.get("input[name= 'username']").type("Admin")

        cy.get("[name = 'password']").type('admin123')


        cy.get("button[type='submit']").click()



        //using BDD assertion. by creating javascript function if Chai framework

        let expName="ajay"

        cy.get('.oxd-userdropdown-name').then( (x) => {

            let actName = x.text()



            // BDD style
            expect(expName).to.not.equal(actName)

            //TDD style
            assert.notEqual(expName,actName)

        } )
      
      
      })
  

    })