describe('Handling Table',()=>{


    beforeEach('login as admin',()=>{

        cy.visit("https://demo.opencart.com/admin/index.php?route=common/login")
        cy.get("#input-username").type('demo')
        cy.get("#input-password").type("demo")
        cy.get("button[type='submit']").click()
        cy.get(".btn-close").click()

        cy.get("#menu-customer>a").click()
        cy.get("#menu-customer>ul>li:first-child").click()

    })
    it.skip('verifying customers Rows and Columns',()=>{

        cy.get(".table.table-bordered.table-hover>thead>tr>td")
        .should('have.length','7')

        cy.get(".table.table-bordered.table-hover>tbody>tr")
        .should('have.length','10')


    })

    it.skip('getting data from rows and columns',()=>{

        cy.get(".table.table-bordered.table-hover>tbody>tr")// Using .each to iterate over each row in the table
        .each(($row, index, $rows) =>{  
                     
            // Wrapping the data in each row with within, and storing in a variable called collectedData
            cy.wrap($row).within((collectedData) =>{  
        
                
                // Collecting the table data from the rows and storing it in a column
                cy.get("td").each(($col, index, $cols) =>{ 
                    // Converting from a string to text and logging to the console
                    cy.log($col.text())  
                } )
            })
        })
        


    })


    it('Pagination we get the pages', () => {

        // declare a variable to hold the total number of pages
        let totalpages;
    
        // find an element on the page that contains information about the pagination control,
        // then access its text content using the "then" function
        cy.get(".col-sm-6.text-end").then((textofpages) => {
    
            // extract the text content from the element and store it in a variable
            let storeing_variable_Astext = textofpages.text();
    
            // extract the total number of pages from the text content using the "substring" method
            totalpages = storeing_variable_Astext.substring(storeing_variable_Astext.indexOf("(") + 1, storeing_variable_Astext.indexOf("Pages") - 1);
    
            // print the total number of pages to the console for debugging or analysis purposes
            cy.log("The Total number of pages in a table =======>" + totalpages);
        });

        // ----------------------------------------------------------------------------------------------------------------------------------------

        let minpages = 5;

        for(let p=1; p<=minpages;p++){

            if (minpages>1){

                cy.log("Active page is ==> " + p);

                cy.get(".pagination>li:nth-child("+p+")").click()
                cy.wait(3000)

                // now we going to get the datas and also pint in log 

                cy.get(".table-responsive>table>tbody>tr")
                .each(($row, index, $rows)=>{

                    cy.wrap($row).within( ()=>{
                        cy.get("td:nth-child(3)").then( (e) =>{

                            cy.log(e.text());
                        })
                    })

                })


            }
        }



    });
    
})