describe('Desafio - Automacao Web', () => {
    

beforeEach(()=> {

    cy.visit('https://www.amazon.com.br/')
})

    it('Faz a busca por um produto e valida', () => {
    
        let produto = 'Sofá'
        
        cy.title().should('be.equal','Amazon.com.br | Tudo pra você, de A a Z.')

        cy.get('#twotabsearchtextbox').type(produto, {delay: 0})
          .get('#nav-search-submit-button').click()
          .get('.a-color-state').should('contain',produto)
        
    });


    it('Escolhe um produto, insere no carrinho e valida', () => {
        let produto = 'Sofá'

        cy.title().should('be.equal','Amazon.com.br | Tudo pra você, de A a Z.')

        cy.get('#twotabsearchtextbox').type(produto, {delay: 0})
          .get('#nav-search-submit-button').click()
          .get('.a-color-state').should('contain',produto)
          .get('#nav-cart-count').should('contain', 0)

        
        cy.get('[data-asin="B0BMW7KGRN"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image').click()
          .get('#add-to-cart-button').click()
          .get('#nav-cart-count').should('contain', 1)
        
    });


    it.only('Escolhe um produto, insere no carrinho e valida de outra forma', () => {

        let produto = 'Sofá'

        cy.title().should('be.equal','Amazon.com.br | Tudo pra você, de A a Z.')

        cy.get('#twotabsearchtextbox').type(produto, {delay: 0})
          .get('#nav-search-submit-button').click()
          .get('.a-color-state').should('contain',produto)
          .get('#nav-cart-count').should('contain', 0)

        
        cy.get('[data-asin="B0BMW7KGRN"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image').click()
          .get('#add-to-cart-button').click()
          .get('#nav-cart-text-container > .nav-line-2').click()
          .get('.a-dropdown-prompt').should('contain', 1)
        
    });



});

