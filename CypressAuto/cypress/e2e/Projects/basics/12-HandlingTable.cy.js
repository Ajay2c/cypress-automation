describe('Handling Table', () => {

    // login as admin before each test
    beforeEach('login as admin', () => {

        // visit the login page
        cy.visit("https://demo.opencart.com/admin/index.php?route=common/login")

        // enter username
        cy.get("#input-username").type('demo')

        // enter password
        cy.get("#input-password").type("demo")

        // click the login button
        cy.get("button[type='submit']").click()

        // close the popup if it appears
        cy.get(".btn-close").click()

        // click the customers link from the menu
        cy.get("#menu-customer>a").click()

        // click the customers sub-menu item
        cy.get("#menu-customer>ul>li:first-child").click()

    })

    // test to verify the number of rows and columns in the customers table
    it('verifying customers Rows and Columns', () => {

        // Verify that the table has 7 columns and 10 rows
        // check the number of columns in the table head
        cy.get(".table.table-bordered.table-hover>thead>tr>td")
            .should('have.length', 7)

        // check the number of rows in the table body 
        cy.get(".table.table-bordered.table-hover>tbody>tr")
            .should('have.length', 10)

    })

    // test to get the data from each row and column in the table
    it('getting data from rows and columns', () => {

        // loop through each row in the table
        cy.get(".table.table-bordered.table-hover>tbody>tr")
            .each(($row, index, $rows) => {


                // Wrap the data in each row with "within" and store in a variable called "collectedRows"
                // within each row, loop through each column
                cy.wrap($row).within((collectedRows) => {

                    cy.get("td").each(($col, index, $cols) => {

                        // log the text content of each column
                        cy.log($col.text())
                    })
                })
            })

    })

    // test to get the number of pages in the pagination and log them
    it('Pagination we get the pages', () => {

        // Declare a variable to hold the total number of pages
        let totalpages;

        // get the text of the pagination section which includes the number of pages
        // Find an element on the page that contains information about the pagination control,
        // then access its text content using the "then" function
        cy.get(".col-sm-6.text-end").then((textofpages) => {

            // Extract the text content from the element and store it in a variable
            let NoPage = textofpages.text();

            // extract the total number of pages from the text
            // Extract the total number of pages from the text content using the "substring" method
            // Showing 1 to 10 of 10864 (1087 Pages)
            totalpages = NoPage.substring(NoPage.indexOf("(") + 1, NoPage.indexOf("Pages") - 1);

            // log the total number of pages
            // Print the total number of pages to the console for debugging or analysis purposes
            cy.log("The Total number of pages in a table =======>" + totalpages);
        });


        // Declare a variable to hold the minimum number of pages to be checked
        let minpages = 5;

        // loop through the first 5 pages of the pagination
        // Loop through the minimum number of pages to be checked

        for (let p = 1; p <= minpages; p++) {

            // Check if there are more than p pages
            if (p <= minpages) {

                // Print the active page number to the console
                cy.log("Active page is ==> " + p);

                // Click on the pagination control for the current page
                cy.get(".pagination>li:nth-child(" + p + ")").click()

                // wait for 3 seconds for the table to load
                cy.wait(3000)

                // loop through each row in the table
                cy.get(".table-responsive>table>tbody>tr")
                    .each(($row, index, $rows) => {

                        // within each row, get the text content of the third column
                        cy.wrap($row).within(() => {

                            cy.get("td:nth-child(3)").then((e) => {

                            // log the text content of the third column
                            cy.log(e.text());
                        });
                    });
                });
            }
        }
        
    });
    
})