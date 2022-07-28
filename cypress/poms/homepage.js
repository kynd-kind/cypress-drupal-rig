class HomePage {
    
    elements = {
        cartCounter: () => cy.get('cart-block--summary__count'),
        manage: () => cy.get('a[href="/admin"]'),
        cms: () => cy.get('[data-drupal-link-system-path="admin/content"]'),
        shoppingListItem: (i) => cy.get('.teaser-product__container').eq(i)        
    }

    chooseItem(i) {
        this.elements.shoppingListItem(i).click()        
    }
    goToCms() {
        this.elements.manage().click({force: true})
        this.elements.cms().click({force: true})
    }
    



}

export default HomePage