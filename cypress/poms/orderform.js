class OrderForm {
    
    elements = {
        firstName: () => cy.get('[data-drupal-selector="edit-shipping-information-shipping-profile-address-0-address-given-name"]'),
        lastName: () => cy.get('[data-drupal-selector="edit-shipping-information-shipping-profile-address-0-address-family-name"]'),
        streetAddress: () => cy.get('[data-drupal-selector="edit-shipping-information-shipping-profile-address-0-address-address-line1"]'),
        postalCode: () => cy.get('[data-drupal-selector="edit-shipping-information-shipping-profile-address-0-address-postal-code"]'),
        city: () => cy.get('[data-drupal-selector="edit-shipping-information-shipping-profile-address-0-address-locality"]'),
        phoneNr: () => cy.get('[data-drupal-selector="edit-shipping-information-shipping-profile-field-telefon-0-value"]'),
        cod: () => cy.get('[class="form-item__label option"]').eq(3),
        toc: () => cy.get ('[class="form-item__label option js-form-required form-item__label--required"]'),
        submit: () => cy.get('[data-drupal-selector="edit-actions-next"]'),
        homePage: () => cy.get ('[class="button"]')
    }

    formFill() {
        this.elements.firstName().type('Lorem', {force: true})
        this.elements.lastName().type('Ipsum', {force: true})
        this.elements.streetAddress().type('Lorem Ipsum 1', {force: true})
        this.elements.postalCode().type('11111', {force: true})
        this.elements.city().type('Ipsum Lorem', {force: true})
        this.elements.phoneNr().type('111111111', {force: true})
        this.elements.cod().click({force: true})
        this.elements.toc().click({force: true})
        this.elements.submit().click({force: true})
        this.elements.homePage().click({force:true})
    }
    finishForm() {
        this.elements.toc().click({force: true})
        this.elements.submit().click({force:true})
        this.elements.homePage().click({force:true})
    }
    
    


}

export default OrderForm