
import { MetodosComunes } from "../../util/metodosComunes";
import { singupMethods } from "../pages/SingUp/singupLoginMethods";
import { accountCreate_Methods } from "../pages/account_create/accountCreate_Methods";

const user = MetodosComunes.generarString(9)
const email = MetodosComunes.generateRandomEmail()
const address = MetodosComunes.generateRandomAddress()

describe('User Login', () => {
  it('Login User with correct email and password ', () => {

    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    cy.visit('https://www.automationexercise.com/')
    // 3. Verify that home page is visible successfully
    MetodosComunes.validateUrlText('https://www.automationexercise.com/')
    // 4. Click on 'Signup / Login' button
    //Home,Products,Cart,Logout,Delete Account, login
    MetodosComunes.clickLinkText('login')

    // 5. Verify 'Login to your account' is visible
    MetodosComunes.elementVisible('Login to your account')
    // 6. Enter correct email address and password
    // 7. Click 'login' button
    singupMethods.completedLogin('pepito828@gmail.com','123123')
    // 8. Verify that 'Logged in as username' is visible
    MetodosComunes.validateLoggedInUserText('Misael Guzmán')
    // 9. Click 'Delete Account' button
    //MetodosComunes.clickLinkText('Delete Account')

    // 10. Verify that 'ACCOUNT DELETED!' is visib
    //complete account information
     //accountCreate_Methods.clickContinue()

  });

  it('Login User with incorrect email and password ', () => {

    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    cy.visit('https://www.automationexercise.com/')
    // 3. Verify that home page is visible successfully
    MetodosComunes.validateUrlText('https://www.automationexercise.com/')
    // 4. Click on 'Signup / Login' button
    //Home,Products,Cart,Logout,Delete Account, login
    MetodosComunes.clickLinkText('login')

    // 5. Verify 'Login to your account' is visible
    MetodosComunes.elementVisible('Login to your account')
    // 6. Enter correct email address and password
    // 7. Click 'login' button
    singupMethods.completedLogin('pepitoasd828@gmail.com','123123')
    // 8. Verify that 'Logged in as username' is visible
  
    //Verify error 'Your email or password is incorrect!' is visible
    MetodosComunes.elementVisible('Your email or password is incorrect!')
    




  });



});
