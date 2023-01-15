describe('Desafio - Automacao Web', () => {
    

beforeEach(()=> {

    cy.visit('https://www.amazon.com.br/')
})



    /* 
       Primeiramente o teste vai conferir se realmente está no site da Amazon, depois digita o nome do produto e simula o usuário apertar Enter.
       Após isso sera feito uma validação para ver se foi pesquisado o produto informado.
    */
    it('Faz a busca por um produto e valida (Utilizando Enter)', () => {

      cy.title().should('be.equal','Amazon.com.br | Tudo pra você, de A a Z.')

        cy.get('#twotabsearchtextbox').type('Sofá{enter}', {delay: 0})
          .get('#nav-search-submit-button').click()
          .get('.a-color-state').should('contain','Sofá')
      
    });



    /* 
       Primeiro foi criado uma variável para ficar mais fácil futuras atualizações. É feito a conferencia para saber se realmente está no site da Amazon.
       Após isso será digitado o produto que foi inserido na variável 'produto' e depois simula o usuário apertar a lupa de pesquisa.
       E será feita a validação para ver se realmente foi pesquisado o produto informado.
    */
    it('Faz a busca por um produto e valida', () => {
    
        let produto = 'Sofá'
        
        cy.title().should('be.equal','Amazon.com.br | Tudo pra você, de A a Z.')

        cy.get('#twotabsearchtextbox').type(produto, {delay: 0})
          .get('#nav-search-submit-button').click()
          .get('.a-color-state').should('contain',produto)
        
    });



    /*
       Primeiro foi criado uma variável para ficar mais fácil futuras atualizações. É feito a conferencia para saber se realmente está no site da Amazon.
       Após isso será digitado o produto que foi inserido na variável 'produto' e depois simula o usuário apertar a lupa de pesquisa.
       E será feita a validação para ver se realmente foi pesquisado o produto informado.
       Antes de inserir o produto no carrinho, primeiro é feito uma validação para saber se realmente o carrinho está vazio.
       Após isso o teste irá entrar em um produto e adicionar o mesmo no carrinho.
       É feito outra validação no carrinho, mas dessa vez para saber se tem algum produto no carrinho.
    */
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



    /*
       Primeiro foi criado uma variável para ficar mais fácil futuras atualizações. É feito a conferencia para saber se realmente está no site da Amazon.
       Após isso será digitado o produto que foi inserido na variável 'produto' e depois simula o usuário apertar a lupa de pesquisa.
       E será feita a validação para ver se realmente foi pesquisado o produto informado.
       Antes de inserir o produto no carrinho, primeiro é feito uma validação para saber se realmente o carrinho está vazio.
       Após isso o teste irá entrar em um produto e adicionar o mesmo no carrinho.
       A validação desse teste é feito entrando no carrinho e validando se há algum produto lá dentro.
    */
    it('Escolhe um produto, insere no carrinho e valida de outra forma', () => {

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

