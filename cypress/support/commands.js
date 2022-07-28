Cypress.Commands.add('loginCom', () => {
    const username = 'content.editor'
    const password = 'SP.Test2022'

    cy.get('#edit-name').type(username)
    cy.get('#edit-pass').type(password)
    cy.get('#edit-submit').click()
    cy.url() 
        .should('include', '?check_logged_in=1')
})

Cypress.Commands.add('badLogin', () => {
    const username = 'potato'
    const password = 'avocadando'

    cy.get('#edit-name').type(username)
    cy.get('#edit-pass').type(password)
    cy.get('#edit-submit').click()
    cy.url() 
        .should('not.contain', '?check_logged_in=1')
})

Cypress.Commands.add('spamClick', (clicks, locator) => {
    for(let n = 0; n < clicks; n ++){
        cy.get(locator)
          .click({force:true})
      }
})

Cypress.Commands.add('fillFormCom', () => {
    cy.xpath('//*[@id="edit-shipping-information-shipping-profile-address-0-address-given-name"]').click({force: true}).type('Lorem')
    cy.xpath('//*[@id="edit-shipping-information-shipping-profile-address-0-address-family-name"]').click({force: true}).type('Ipsum')
    cy.xpath('//*[@id="edit-shipping-information-shipping-profile-address-0-address-address-line1"]').click({force: true}).type('Lorem Ipsum 1')
    cy.xpath('//*[@id="edit-shipping-information-shipping-profile-address-0-address-postal-code"]').click({force:true}).type('11111')
    cy.xpath('//*[@id="edit-shipping-information-shipping-profile-address-0-address-locality"]').click({force: true}).type('Ipsum Lorem')
    cy.xpath('//*[@id="edit-shipping-information-shipping-profile-field-telefon-0-value"]').click({force: true}).type('1111111111')
    cy.xpath('//*[@id="edit-payment-information-payment-method"]/div[2]/label').click({force: true} )
    cy.xpath('//*[@id="edit-terms-agreement"]/div/div/label').click({force: true} )
    cy.xpath('//*[@id="edit-actions-next"]').click({force:true})
    cy.xpath('//*[@id="edit-completion-message"]/div/p[3]/a').should('be.visible').click({force:true})
    cy.url().should('not.contain', '/cart/')
})

Cypress.Commands.add('emptyCartCom', (locator) => {
    cy.xpath(locator).then($locator => {
        const potato = Number($locator[0].innerText)
        if (potato > 0){
            cy.get('#block-cart > div > div.cart-block--summary > a > span.cart-block--summary__icon').click({force: true})
            cy.get('#edit-remove-button-0').click()
            cy.get('#block-dred-content > div').contains('empty')
            cy.get('#block-dred-branding > a > img').click({force: true})
            cy.get('#block-dred-cintercom-local-tasks > ul > li.tabs__item.tabs__item--is-active > a').should('be.visible')
        }})})

// Cypress.Commands.add('logIn', (username, password) => {
    
//     const logInPage = new LogInPage();

//     logInPage.username().type(username)
//     logInPage.password().type(password)
//     logInPage.submit().click()
//     cy.url() 
//         .should('include', '?check_logged_in=1')
//     })