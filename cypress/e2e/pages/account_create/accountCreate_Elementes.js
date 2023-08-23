export class accountCreate_Elements{
  
  static get buttons(){
    return {
      get btnContinue(){
        return cy.get('a[data-qa="continue-button"]')
      }
    }
  }
}