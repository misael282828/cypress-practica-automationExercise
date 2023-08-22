import { should } from "chai";
import { MetodosComunes } from "../util/metodosComunes";

const user = MetodosComunes.generarString(9)
const email = MetodosComunes.generateRandomEmail()
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
    cy.get('[data-qa="signup-email"]').type(email)
    // 7. Click 'Signup' button
    cy.get('[data-qa="signup-button"]').click()
    

    // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    // 9. Fill details: Title, Name, Email, Password, Date of birth
    // 10. Select checkbox 'Sign up for our newsletter!'
    // 11. Select checkbox 'Receive special offers from our partners!'
    // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    // 13. Click 'Create Account button'
    // 14. Verify that 'ACCOUNT CREATED!' is visible
    // 15. Click 'Continue' button
    // 16. Verify that 'Logged in as username' is visible
    // 17. Click 'Delete Account' button
    // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button



  })
});