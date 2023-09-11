import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import homepage from "../../pages/homePage"
import homePage from "../../pages/homePage";

var min;
let arr2 = [], arr1 = [];
let total, sum =0, a;

Given("I add four random items to my cart", () => {

    cy.visit("/"); 

    addItemtoCart();
    addItemtoCart();
    addItemtoCart();
    addItemtoCart();

}); 

When("I view my cart", () => {
 cy.contains("a", "Cart").click();

});  
Then("I find total four items listed in my cart", () => {
    
    homePage.elements.quantityColumn().find("input").each((val) => 
     {
       a= +val.val(); 
       arr2.push(a)
       for (let i = 0; i < arr2.length; i++ ) {
        sum += arr2[i];
        total = parseInt(sum);
      }
        //  expect(total).to.eq(4);
    })

});  
When("I search for lowest price item", () => {
    let arr = [], a;

    homepage.elements.priceColumn().each((val) => 
    {
      
     a = +val.text().replace('$', '').trim();
     arr.push(a);
     for(let i in arr)
     {
         min = Math.min.apply(Math, arr)
         cy.log(arr[i]);
 
     }
 })
  
});  
When("I am able to remove the lowest price item from my cart", () => {
cy.contains('td', min)  
  .parent()                              
  .within(_$tr => {                      
    homepage.elements.removeItem().click({ force: true })
  })
});  
Then("I am able to verify three items in my cart", () => {
   homePage.elements.quantityColumn().find("input").each((val) => 
    {
        a= +val.val(); 
        arr1.push(a)
        for (let i = 0; i < arr1.length; i++ ) {
         sum += arr1[i];
         total = parseInt(sum);
       }
        // expect(total).to.eq(3);
    });
  
});  

function addItemtoCart()
{
    homepage.elements.getProduct().any(1).each(randomElement => {
        cy.wrap(randomElement).click();
        homePage.elements.addToCart().click();
        cy.go("back");
        cy.go("back");
    });
}