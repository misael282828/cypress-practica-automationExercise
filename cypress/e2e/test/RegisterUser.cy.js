
import { MetodosComunes } from "../../util/metodosComunes";
import { singupMethods } from "../pages/SingUp/singupMethods";

const user = MetodosComunes.generarString(9)
const email = MetodosComunes.generateRandomEmail()
const address = MetodosComunes.generateRandomAddress()



describe('Register user', () => {

  it('valid register', () => {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    cy.visit('https://www.automationexercise.com/')
    // 3. Verify that home page is visible successfully
    cy.url().should('eq', 'https://www.automationexercise.com/')

    // 4. Click on 'Signup / Login' button
    // cy.get('a').should('have.text', ' Signup / Login').click()
    cy.contains('a', 'Signup / Login').click();

    // 5. Verify 'New User Signup!' is visible
    cy.contains('h2', 'New User Signup!').click();


    // 6. Enter name and email address
    cy.get('[data-qa="signup-name"]').type(user)
    cy.get('[data-qa="signup-email"]').type('@')
    // 7. Click 'Signup' button
    cy.get('[data-qa="signup-button"]').click()
    cy.wait(3000)

    // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.contains('h2', 'ENTER ACCOUNT INFORMATION').should('exist')
    // 9. Fill details: gender, Name, Email, Password, Date of birth
    singupMethods.fillAccountInfom('male', user, address.street,address.poBox, 'pass')
    //day,month,year
    singupMethods.fillBirthday("27", 3, "1993")
    // 10. Select checkbox 'Sign up for our newsletter!'
    singupMethods.clickNewsletter()
    // 11. Select checkbox 'Receive special offers from our partners!'
    singupMethods.clickReceivEspecial()

    // 12. Fill details: First name, Last name, Company, Address, Country, State, City, Zipcode, Mobile Number
    singupMethods.fillFistNameField()
    singupMethods.fillLastNameField()
    
    // company, address, zipCode, phoneNumber
    singupMethods.fillAddressDetails("platano company", 'una direccion ramdon', "89574","8097409987" )
    singupMethods.fillCity('pedernales')
    singupMethods.fillState('azulito')
    



    // 13. Click 'Create Account button'
    // 14. Verify that 'ACCOUNT CREATED!' is visible
    // 15. Click 'Continue' button
    // 16. Verify that 'Logged in as username' is visible
    // 17. Click 'Delete Account' button
    // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button



  })


  describe.only('probando selectores ', () => {
    it('selectores singup page', () => {
      cy.visit('https://www.automationexercise.com/')
      cy.url().should('eq', 'https://www.automationexercise.com/')
      cy.contains('a', 'Signup / Login').click();
      cy.contains('h2', 'New User Signup!').click();
      cy.get('[data-qa="signup-name"]').type(user)
      cy.get('[data-qa="signup-email"]').type(email)
      cy.get('[data-qa="signup-button"]').click()

      //complete account information

      //gender,name,address,pass
      singupMethods.fillAccountInfom('male','juan', 'clave')
     //day,month,year
      singupMethods.fillBirthday('27',3,"1993")
      singupMethods.clickNewsletter()
      singupMethods.clickReceivEspecial()
      //ADDRESS INFORMATION

      singupMethods.fillFistNameField('rosa')

      singupMethods.fillFormWithStaticData()
      singupMethods.clickCountry(3)
      singupMethods.clickCreateAccount()
      // cy.wait(5000)
    });


  });








});