import LogInPage from "../poms/loginpage.js"
import HomePage from "../poms/homepage.js"
import Cms from "../poms/cms.js"
import ArticlePage from "../poms/articlepage.js"
import OrderForm from "../poms/orderform.js"

describe('Logged in users', () => {

    const username = '/'
    const password = '/'
    const text = "/"
    const text2 = "/"
   
    it('Content Management Test = Green Deal', () => {

        const logInPage = new LogInPage();
        const homePage = new HomePage();
        const cms = new Cms();    

        cy.visit('/')
        logInPage.logIn(username, password)
        cy.url() 
            .should('include', '?check_logged_in=1')
        homePage.goToCms()
        cms.addContentChoice(1)
        cms.setTitle(text)
        cms.submit()
        cms.cdeChoice(1)
        cms.resetTitle(text2)
        cms.submit()
        cms.cdeChoice(2)
        cms.submit()
        logInPage.logOut()
        

    })
    it('Content Management Test = Commerce', () => {

        const logInPage = new LogInPage();
        const homePage = new HomePage();
        const cms = new Cms();    

        cy.visit('/')
        logInPage.logIn(username, password)
        cy.url() 
            .should('include', '?check_logged_in=1')
        homePage.goToCms()
        cms.addContentChoice(1)
        cms.setTitle(text)
        cms.submit()
        cms.cdeChoice(1)
        cms.resetTitle(text2)
        cms.submit()
        cms.cdeChoice(2)
        cms.submit()
        cy.url()
            .should('include', 'commerce.studiopresent.dev')
        logInPage.logOut()
    })

    it('Shopping experience @ Green Deal', () => {
        const logInPage = new LogInPage();
        const homePage = new HomePage();
        const articlePage = new ArticlePage();
        const orderForm = new OrderForm();

        cy.visit('/')
        logInPage.logIn(username, password)
        cy.url() 
            .should('include', '?check_logged_in=1')
        homePage.chooseItem(3)
        articlePage.addToCart()
        articlePage.goToCheckOut()
        cy.get('body').then(($body) => {
            if ($body.find('[data-drupal-selector="edit-shipping-information-shipping-profile-edit-button"]').length > 0) {
                orderForm.finishForm()
            }
            else {
                orderForm.formFill()
            }
        logInPage.logOut()
        })

    })
    it('Shopping experience @ Commerce', () => {
        const logInPage = new LogInPage();
        const homePage = new HomePage();
        const articlePage = new ArticlePage();
        const orderForm = new OrderForm();

        cy.visit('/')
        logInPage.logIn(username, password)
        cy.url() 
            .should('include', '?check_logged_in=1')
        homePage.chooseItem(2)
        articlePage.addToCart()
        articlePage.goToCheckOut()
        orderForm.formFill()
        logInPage.logOut()
              

    })
})
describe('Anonymous Users', () => {
    it('Shopping Experience @ Green Deal', () => {
        
        const homePage = new HomePage();
        const articlePage = new ArticlePage();
        const orderForm = new OrderForm();

        cy.visit('/')
        homePage.chooseItem(3)
        articlePage.addToCart()
        articlePage.goToCheckOut()
        cy.get('[data-drupal-selector="edit-contact-information-email"]').type('lorem@ipsum.com', {force: true})
        orderForm.formFill()       
               
    })
    it('Shopping experience @ Commerce', () => {
        
        const homePage = new HomePage();
        const articlePage = new ArticlePage();
        const orderForm = new OrderForm();

        cy.visit('/')
        homePage.chooseItem(2)
        articlePage.addToCart()
        articlePage.goToCheckOut()
        cy.get('[data-drupal-selector="edit-contact-information-email"]').type('lorem@ipsum.com', {force: true})
        orderForm.formFill()       
               
    })

})