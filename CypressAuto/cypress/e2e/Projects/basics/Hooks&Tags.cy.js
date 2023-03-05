/* There are 4 types of Hooks in cypress 
-Before
-After
-beforeEach
-afterEach

There are 2 types of tags in cypress
-only
-skip
*/

describe('Hooks & Tags', ()=>{

    before('',()=>{

            cy.log('*********Launch the application*********')

    })

    after('',()=>{


        cy.log('*********Close the application*********')
        
    })

    beforeEach('',()=>{


        cy.log('*********visit and login*********')
        
    })

    afterEach('',()=>{


        cy.log('*********log out the application*********')
        
    })


    it('selecting profile after login',()=>{


        cy.log('*********Selecting profile*********')


    })

    it('selecting search bar',()=>{


        cy.log('*********Selecting search bar*********')


    })

})