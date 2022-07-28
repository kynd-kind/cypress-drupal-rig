class Cms {
    
    elements = {
        addContent: () => cy.get('[data-drupal-link-system-path="node/add"]'),
        addContentType: (i) => cy.get(".admin-item__link").eq(i),
        languageSelect: () => cy.get('edit-langcode-0-value'),
        submit: () => cy.get('[data-drupal-selector="edit-submit"]'),
        edit: () => cy.get('node/26/edit'),
        delete: () => cy.get('node/26/delete'),
        title: () => cy.get('[data-drupal-selector="edit-title-0-value"'),
        language: () => cy.get('[data-drupal-selector="edit-langcode-0-value"]'),
        cdebar: () => cy.get('.tabs__item'),
        cdebar2: () => cy.get('[class="tabs tabs--primary"]')
    }
    addContentClick() {
        this.elements.addContent().eq(0).click({force:true})
    }
    chooseContent(i) {
        this.elements.addContentType(i).click()
    }
    addContentChoice(i) {
        this.addContentClick()
        this.chooseContent(i)
    }
    setTitle(text) {
        this.elements.title().type(text)
    }
    submit(){
        this.elements.submit().eq(0).click({force:true})
    }
    cdeChoice(i){
        this.elements.cdebar().children().eq(i).click({force: true})
    }
    resetTitle(text2){
        this.elements.title().clear().type(text2)
    }

}

export default Cms