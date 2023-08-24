
import { MetodosComunes } from "../../util/metodosComunes";
import { singupMethods } from "../pages/SingUp/singupLoginMethods";
import { accountCreate_Methods } from "../pages/account_create/accountCreate_Methods";

const user = MetodosComunes.generarString(9)
const email = MetodosComunes.generateRandomEmail()
const address = MetodosComunes.generateRandomAddress()




  describe('Register new User ', () => {
    it('Register new user static information', () => {

      // 1. Launch browser
      // 2. Navigate to url 'http://automationexercise.com'
      cy.visit('https://www.automationexercise.com/')
      // 3. Verify that home page is visible successfully
      MetodosComunes.validateUrlText('https://www.automationexercise.com/')
      // 4. Click on 'Signup / Login' button

      cy.contains('a', 'Signup / Login').click();
      // 5. Verify 'Login to your account' is visible
      cy.contains('h2', 'Login to your account').click();
      // 6. Enter name and email address
      cy.get('[data-qa="signup-name"]').type(user)
      cy.get('[data-qa="signup-email"]').type(email)
      // 7. Click 'Signup' button
      cy.get('[data-qa="signup-button"]').click()

      // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
      MetodosComunes.clickLinkText('Enter Account Information')

      // 9. Fill details: Title, Name, Email, Password, Date of birth
      singupMethods.fillAccountInfom('male', 'juan', 'clave')
      singupMethods.fillBirthday('27', 3, "1993")

      // 10. Select checkbox 'Sign up for our newsletter!'
      singupMethods.clickNewsletter()
      // 11. Select checkbox 'Receive special offers from our partners!'
      singupMethods.clickReceivEspecial()
      // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
      singupMethods.fillFormWithStaticData()
      // 13. Click 'Create Account button'
      singupMethods.clickCreateAccount()
      // 14. Verify that 'ACCOUNT CREATED!' is visible
      MetodosComunes.elementVisible('Account Created!')
      // 15. Click 'Continue' button
      accountCreate_Methods.clickContinue()
      // 16. Verify that 'Logged in as username' is visible
      MetodosComunes.validateLoggedInUserText('Pedro')
      // 17. Click 'Delete Account' button
      //Home,Products,Cart,Logout,Delete Account
      MetodosComunes.clickLinkText('Delete Account')
      // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
      MetodosComunes.elementVisible('Account Deleted!')
      //complete account information
      accountCreate_Methods.clickContinue()
      MetodosComunes.validateUrlText('https://www.automationexercise.com/')
      
      
    });


  });












