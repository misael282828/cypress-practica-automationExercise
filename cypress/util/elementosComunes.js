
export class elementosComunes{

  static get links(){
    return {
      get homeLink(){
        return cy.get('ul.nav a').eq(0)
      },
      get productLink(){
        return cy.get('a[href="/products"]')
      },
      get cartLink(){
        return cy.get('a[href="/view_cart"]').eq(0)
      },
      get logoutLink(){
        return cy.get('a[href="/logout"]')
      },
      get loggedInAs(){
        return cy.get('ul.nav a').eq(9)
      },
      get deleteAccountLink(){
        return cy.get('a[href="/delete_account"]')
      },
      
    }
  }
}
