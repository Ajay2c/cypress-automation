import amazon from "..\PageObjectModel\AmazonPages.js";

describe('Amazon Page creations',()=>{

    const ln=new amazon();

    it.only('visit amazon page by using POM',()=>{
        ln.amazonVisit();
    })

    it('check Amazon logo',()=>{
        ln.amazonLogo();
    })

    it('Creating amazon users',()=>{
        ln.creatingNewUser({
            name: 'John Doe',
            email: 'johndoe@gmail.com',
            password: 'testpassword'
        });
    })

    it('Search for a product',()=>{
        // Perform search for a product and check the search results
    })

    it('Add product to cart',()=>{
        // Add a product to the cart and verify it
    })

    it('Check out the cart',()=>{
        // Perform checkout and verify the details
    })

    // Add more test cases for other scenarios

})
