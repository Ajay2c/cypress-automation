describe('CSSLocator', () =>{

 
    it('step1: searchbox',()=>{

        cy.visit('https://www.amazon.in/?&ext_vrnc=hi&tag=googhydrabk1-21&ref=pd_sl_g50zekzm1_e&adgrpid=74238127911&hvpone=&hvptwo=&hvadid=610644609009&hvpos=&hvnetw=g&hvrand=12986756065570979525&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=20469&hvtargid=kwd-29089120&hydadcr=5496_2359482&gclid=EAIaIQobChMIoeXA1pam_QIVQ5NmAh3FVwp8EAAYASAAEgLLx_D_BwE')
        
        cy.get("#twotabsearchtextbox").type("mens shoes")

        cy.get("#nav-search-submit-button").click()

        cy.get(".a-color-state a-text-bold").contains("mens shoes")
    })





})