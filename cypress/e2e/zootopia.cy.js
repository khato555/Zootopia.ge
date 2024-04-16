
import credentials from "../fixtures/example.json"




describe("1 Test Suite", () => {
    //პირველადი რეგისტრაცია ვალიდური ელ.ფოსტით
  it("my 1.1 case", () => {
    cy.visit('https://zootopia.ge/ka');
    cy.get('.rprof > p').click()
    cy.get('.input-shablon > p > a').click()
    cy.get(':nth-child(1) > .ismile').type('Khatuna Dzidzaria')
    cy.get(':nth-child(2) > .imail').type('x.dzidzaria81@gmail.com')
    cy.get('.ipir').type(51001106397)
    cy.get(':nth-child(4) > .itel').type(595792273)
    cy.get(':nth-child(5) > .ipass').type('zarikuna555')
    cy.get('.reg-form-left > :nth-child(6) > .ipass').type('zarikuna555')
    //cy.get('.etx').click()
    cy.get('#Group_15422').click()
    cy.get('.regsub').click()
    cy.get(".bg-transparent").click()
    cy.get('.menu-pop > .iprof').contains('პროფილი').should("be.visible").click()
    
  });
    //რეგისტრაცია ოთხციფრიანი  პირადი ნომრით და 
//არაფუნქციური ელ.ფოსტით
it("my 1.7 case", () => {
  cy.visit('https://zootopia.ge/ka');
  cy.get('.rprof > p').click()
  cy.get('.input-shablon > p > a').click()
  cy.get(':nth-child(1) > .ismile').type('xato')
  cy.get(':nth-child(2) > .imail').type('xd@xd4.ru')
  cy.get('.ipir').type(5118)
  cy.get(':nth-child(4) > .itel').type(595203273)
  cy.get(':nth-child(5) > .ipass').type('za1234')
  cy.get('.reg-form-left > :nth-child(6) > .ipass').type('za1234')
  cy.get('#Group_15422').click()
  cy.get('.regsub').click()
  cy.get(".bg-transparent").click()
  cy.get('.menu-pop > .iprof').contains('პროფილი').should("be.visible").click()
  
});
});

describe("2 Test Suite", () => {
  //ავტორიზაცია ვალიდური მონაცემებით
  it("my 2.5 case", () => {
    cy.login(credentials.email,credentials.password)
    cy.get('.menu-pop > .iprof').contains('პროფილი').should("be.visible")
  });
});

describe("3 Test Suite", () => {
  // კალათაში დამატებული პროდუქტის რაოდენობის ცვლილებისას,(ჯამში,მიტანის საფასური ,სულ ჯამში) 
  //ცვლილების შემოწმება.
  it("my 3.2 case", () => {
    cy.login(credentials.email,credentials.password)
    cy.product()
    cy.vis()
    cy.get('.swiper-slide-active > .spinner > .plus').click(2)
    cy.get('.swiper-slide-active > .spinner > .plus').click(2)
    cy.get('.swiper-slide-next > .spinner > .plus').click(2)
    cy.get('.swiper-slide-next > .spinner > .plus').click(2)
    cy.get(':nth-child(3) > .spinner > .plus').click(2)
    cy.get(':nth-child(3) > .spinner > .plus').click(2)
    cy.get(':nth-child(4) > .spinner > .plus').click(2)
    cy.get(':nth-child(4) > .spinner > .plus').click(2)
    cy.result()
  })

  // კალატაში დამატებული პროდუქტის წაშლა
  it("my 3.5 case", () => {
    cy.login(credentials.email,credentials.password)
    cy.product()
    cy.get(':nth-child(4) > .spinner > .minus').click()
    cy.get(':nth-child(3) > .clear').click() 
    cy.get('.menu-pop > [href="https://zootopia.ge/ka/cart"] > #cart-items-count').contains('2').should("be.visible") 
  })

  //  სწრაფი შეკვეთის ფუნქციონალის შემოწმება
  it("my 3.8 case", () => {
    cy.visit("https://zootopia.ge/ka");
    cy.get('.pug > .seepro').click()
    cy.get(':nth-child(2) > .price-cart > .product-cart > p').click()
    cy.get('.menu-pop > [href="https://zootopia.ge/ka/cart"] > p').click()
    cy.get('.cart-submit').click()
    cy.get('#kurdRelauri').click()
    cy.get('.ismile').type("xato")
    cy.get('.itel').type("595302279")
    cy.get("button").contains("სწრაფი შეკვეთა").click()
    cy.get('.fastorder-modal > .common').contains("გადახდა წარმატებით შესრულდა.").should("be.visible")
  });

})
//