export class singupElements {

  //ENTER ACCOUNT INFORMATION
  static get radios() {
    return {
      get genderRadioMale() {
        return cy.get('#uniform-id_gender1')
      },
      get genderRadioFamele() {
        return cy.get('#uniform-id_gender2')
      }
    }
  }

  static get inputs() {
    return {
      get inputName() {
        return cy.get('#name')
      },
      get inputEmail() {
        return cy.get('#email')
      },
      get inputPassword() {
        return cy.get('#password')
      },

      //ADDRESS INFORMATION

      get inputFistName() {
        return cy.get('#first_name')
      },

      get inputLastName() {
        return cy.get('input[data-qa="last_name"]')
      },


      get inputCompany() {
        return cy.get('input[data-qa="company"]')
      },

      get inputAddress() {
        return cy.get('input[data-qa="address"]')
      },

      get state() {
        return cy.get('input[data-qa="state"]')
      },
      get city() {
        return cy.get('input[data-qa="city"]')
      },
      get zipCode() {
        return cy.get('input[data-qa="zipcode"]')
      },

      get inputMobileNunber() {
        return cy.get('input[data-qa="mobile_number"]')
      }


    }
  }

  static get checkboxes() {
    return {
      get checkNewsletter() {
        return cy.get('#newsletter')
      },
      get checkReceivEspecial() {
        return cy.get('#optin')
      }
    }
  }


  static get selects() {
    return {
      get selectDays() {
        return cy.get('#days')
      },
      get selectMonths() {
        return cy.get('#months')
      },
      get selectYears() {
        return cy.get('#years')
      },
      get selectCountry() {
        return cy.get('#country')
      }
    }
  }


  static get buttons() {
    return {
      get createAccount() {
        return cy.get('button[data-qa="create-account"]')
      },
      get btnSubcription() {
        return cy.get('i.fa-arrow-circle-o-right')
      },
      get scrollUp() {
        return cy.get('i.fa-arrow-circle-o-right')
      }
    }
  }

  static get headers(){
    return {
      get getH2(){
        return cy.contains('b', 'Account Created!')
      }
    }
  }









}