describe('XpathLocation', () => {

    // Test case to find the number of products on Amazon website
    it('find no of products',()=>{
        cy.visit('https://www.amazon.in/?&ext_vrnc=hi&tag=googhydrabk1-21&ref=pd_sl_g50zekzm1_e&adgrpid=74238127911&hvpone=&hvptwo=&hvadid=610644609009&hvpos=&hvnetw=g&hvrand=12986756065570979525&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=20469&hvtargid=kwd-29089120&hydadcr=5496_2359482&gclid=EAIaIQobChMIoeXA1pam_QIVQ5NmAh3FVwp8EAAYASAAEgLLx_D_BwE')
        
        // Type "mens shoes" in the search box and click the search button
        cy.get("#twotabsearchtextbox").type("mens shoes")
        cy.get("#nav-search-submit-button").click()

        // Check if the number of products is not equal to 4
        cy.xpath("/html/body/div[1]/div[2]/div[1]/div[2]/div/div[3]/span/div[1]/div/div/div[3]/ul").should('not.have.length',4)
    })

    // Test case to use chained xpath to find the number of products on Amazon website
    it('chained xpath', () =>{
        cy.visit('https://www.amazon.in/s?k=mens+shoes')

        // Use chained xpath to find the number of products
        cy.xpath("/html/body/div[1]/div[2]/div[1]/div[2]/div/div[3]/span/div[1]/div/div/div[3]").xpath("./ul").should('not.have.length',4)
    })
})
