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

        // check the number of columns in the table
        cy.get(".table.table-bordered.table-hover>thead>tr>td")
            .should('have.length', 7)

        // check the number of rows in the table
        cy.get(".table.table-bordered.table-hover>tbody>tr")
            .should('have.length', 10)

    })

    // test to get the data from each row and column in the table
    it('getting data from rows and columns', () => {

        // loop through each row in the table
        cy.get(".table.table-bordered.table-hover>tbody>tr")
            .each(($row, index, $rows) => {

                // within each row, loop through each column
                cy.wrap($row).within(() => {

                    cy.get("td").each(($col, index, $cols) => {

                        // log the text content of each column
                        cy.log($col.text())
                    })
                })
            })

    })

    // test to get the number of pages in the pagination and log them
    it.only('Pagination we get the pages', () => {

        let totalpages;

        // get the text of the pagination section which includes the number of pages
        cy.get(".col-sm-6.text-end").then((textofpages) => {

            let NoPage = textofpages.text();

            // extract the total number of pages from the text
            totalpages = NoPage.substring(NoPage.indexOf("(") + 1, NoPage.indexOf("Pages") - 1);

            // log the total number of pages
            cy.log("The Total number of pages in a table =======>" + totalpages);
        });


        let minpages = 5;

        // loop through the first 5 pages of the pagination
        for (let p = 1; p <= minpages; p++) {

            if (minpages > 1) {

                // log the active page number
                cy.log("Active page is ==> " + p);

                // click the current page number in the pagination
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