class LogInPage {
   
   elements = {
      userNameInput: () => cy.get('[data-drupal-selector="edit-name"]'),
      passwordInput: () => cy.get('[data-drupal-selector="edit-pass"]'),      
      submit: () => cy.get('[data-drupal-selector="edit-submit"]'),
      logout: () => cy.get('a[href="/user/logout"]')
   }

   typeUsername(username) {
      this.elements.userNameInput().type(username, {force: true});
   }
   typePassword(password) {
      this.elements.passwordInput().type(password, {force: true});
   }
   submit(){
      this.elements.submit().click({force: true});
   }
   logIn(username, password){
      this.typeUsername(username);
      this.typePassword(password);
      this.submit();
   }   
   logOut(){
      this.elements.logout().eq(0).click({force: true})
   }
}

export default LogInPage