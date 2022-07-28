class ArticlePage {
    
    elements = {
        addToCart: () =>  cy.get('[data-drupal-selector="edit-submit"]'),
        quantity: (i) =>  cy.get('[data-drupal-selector="edit-quantity-0-value"]')[i],
        cartCount: () =>  cy.get('.cart-block--summary__count'),
        checkoutBtn: () => cy.get('a[href="/checkout/58/order_information"]'),
        cartLink: (i) => cy.get('a[href="/sr-Latn/cart"]').eq(i),
        cartLink2: (i) => cy.get('[class="cart-block--summary__count"]').eq(i),
        checkout: () => cy.get('[data-drupal-selector="edit-checkout"]')
    }

    addToCart() {
        this.elements.addToCart().click({force:true});
    }
    checkoutCart() {
        this.elements.cartLink2(0).click({force:true});

    }
    checkoutFromCart() {
        this.elements.checkout().click({force:true})
    }
    goToCheckOut(){
        this.checkoutCart()
        this.checkoutFromCart()
    }
    


}

export default ArticlePage