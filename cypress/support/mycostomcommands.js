Cypress.Commands.add("login",(email,password) => {
    cy.wait(1000)
    cy.visit("https://zootopia.ge/ka");
    cy.wait(3000)
    cy.get(".rprof > p").click();
    cy.get(':nth-child(5) > .imail').type(email)
    cy.get('.ipass').type(password)
    cy.get('.avtorization > .input-shablon > .form-button').click()
    cy.contains('პროფილი').should("be.visible")
})
Cypress.Commands.add("result",() => {
    cy.get('.cart-jami > :nth-child(1)').contains("858.9 ₾").should("be.visible")
    cy.get('.cart-jami > :nth-child(2)').contains("0 ₾").should("be.visible")
    cy.get('.sul').contains("858.9 ₾").should("be.visible")
   
})
Cypress.Commands.add("vis",() => {
    cy.get('.cart-jami > :nth-child(1)').contains("286.3 ₾").should("be.visible")
    cy.get('.cart-jami > :nth-child(2)').contains("0 ₾").should("be.visible")
    cy.get('.sul').contains("286.3 ₾").should("be.visible")
    
})
Cypress.Commands.add("product",() =>{
    cy.contains("ტოპ პროდუქცია").should("be.visible")
    cy.get(':nth-child(5) > .swiper-container > .swiper-wrapper > :nth-child(5) > .price-cart > .product-cart').click()
    cy.get(':nth-child(5) > .swiper-container > .swiper-wrapper > .swiper-slide-active > .price-cart > .product-cart').click()
    cy.contains("ბოლოს დამატებული").should("be.visible")
    cy.get(':nth-child(7) > .swiper-container > .swiper-wrapper > .swiper-slide-next > .price-cart > .product-cart > p').click()
    cy.get(':nth-child(7) > .swiper-container > .swiper-wrapper > :nth-child(11) > .price-cart > .product-cart').click()
    cy.get('.menu-pop > [href="https://zootopia.ge/ka/cart"]').click()
})
