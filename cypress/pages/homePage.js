class homePage{
    elements ={
    productPrice : () => cy.get(".product-price"),

    priceColumn : () => cy.get("td:nth-child(4)"),

    removeItem : () =>  cy.get(".remove"),

    getProduct : () => cy.get(".product.type-product"),

    addToCart : () => cy.get(".single_add_to_cart_button"),

    quantityColumn : () => cy.get(".product-quantity .quantity")
    }
    
}
module.exports = new homePage();