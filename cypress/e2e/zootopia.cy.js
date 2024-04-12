import credentials from "../fixtures/example.json"




describe("Zootopia test cases", () => {
    //1) პირველადი რეგისტრაცია
  it("my 1 case", () => {
    cy.visit('https://zootopia.ge/ka');
    cy.get('.rprof > p').click()
    cy.get('.input-shablon > p > a').click()
    cy.get(':nth-child(1) > .ismile').type('Khatuna Dzidzaria')
    cy.get(':nth-child(2) > .imail').type('x.dzidzaria86@gmail.com')
    cy.get('.ipir').type(51001006391)
    cy.get(':nth-child(4) > .itel').type(595302283)
    cy.get(':nth-child(5) > .ipass').type('zarikuna555')
    cy.get('.reg-form-left > :nth-child(6) > .ipass').type('zarikuna555')
    //cy.get('.etx').click()
    cy.get('#Group_15422').click()
    cy.get('.regsub').click()
    cy.get(".bg-transparent").click()
  });


  //2) ავტორიზაცია ვალიდური მონაცემებით
  it("my 11 case", () => {
    cy.login(credentials.email,credentials.password)
  });


  //3)  კალათაში დამატებული პროდუქტის რაოდენობის ცვლილებისას (ჯამში,მიტანის საფასური ,სულ ჯამში) 
  //ცვლილების შემოწმება.
  it("my 15 case", () => {
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

  //4)  კალატაში დამატებული პროდუქტის წაშლა
  it("my 17 case", () => {
    cy.login(credentials.email,credentials.password)
    cy.product()
    cy.get(':nth-child(4) > .spinner > .minus').click()
    cy.get(':nth-child(3) > .clear').click()  
  })

  //5)  სწრაფი შეკვეთა
  it("my 20 case", () => {
    cy.visit("https://zootopia.ge/ka");
    cy.get(".rprof > p").click()
    cy.get('#kurdRelauri').click()
    cy.get('.ismile').type("xato")
    cy.get('.itel').type("595302279")
    cy.get("button").contains("სწრაფი შეკვეთა").click()
  })

  //6)რეგისტრაცია ოთხციფრიანი  პირადი ნომრით და 
//არაფუნქციური ელ.ფოსტით
it("my 6 case", () => {
  cy.visit('https://zootopia.ge/ka');
  cy.get('.rprof > p').click()
  cy.get('.input-shablon > p > a').click()
  cy.get(':nth-child(1) > .ismile').type('xato')
  cy.get(':nth-child(2) > .imail').type('x.xdz@mail.ru')
  cy.get('.ipir').type(5110)
  cy.get(':nth-child(4) > .itel').type(595303279)
  cy.get(':nth-child(5) > .ipass').type('za1234')
  cy.get('.reg-form-left > :nth-child(6) > .ipass').type('za1234')
  cy.get('#Group_15422').click()
  cy.get('.regsub').click()
  cy.get(".bg-transparent").click()
  cy.get('.menu-pop > .iprof').click()
  
});
});
 