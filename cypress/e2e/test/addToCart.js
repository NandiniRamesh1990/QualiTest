import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given("I add four random items to my cart", () => {

    cy.visit("https://cms.demo.katalon.com/"); 
    cy.wait(30000);

    cy.get('.ellie-thumb-wrapper > .button').should(items =>{
        items[0].click();
        items[1].click();
        items[2].click();
        items[3].click();
    })

}); 

When("I view my cart", () => {

});  
Then("I find total four items listed in my cart", () => {

});  
When("I search for lowest price item", () => {

});  
When("I am able to remove the lowest price item from my cart", () => {

});  
Then("I am able to verify three items in my cart", () => {

});  
