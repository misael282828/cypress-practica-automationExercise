import { elementosComunes } from "./elementosComunes";

export class MetodosComunes {

  static generarString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }

    return result;
  }

  static generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(7); // Genera una cadena aleatoria
    const domain = 'example.com'; // Cambia esto al dominio deseado
    const email = `${randomString}@${domain}`;
    return email;
  }


  static generateRandomAddress() {
    const streets = ['Main Street', 'Park Avenue', 'Broadway', 'Elm Street', 'Oak Lane'];
    const companyNames = ['ABC Company', 'XYZ Corporation', 'Acme Inc.', 'Global Enterprises', 'Tech Solutions'];

    const street = streets[Math.floor(Math.random() * streets.length)];
    const poBox = Math.floor(Math.random() * 1000);
    const companyName = companyNames[Math.floor(Math.random() * companyNames.length)];

    const address = {
      street: `${Math.floor(Math.random() * 100)} ${street}`,
      poBox: `P.O. Box ${poBox}`,
      company: companyName
    };

    return address;
  }


  static elementVisible(text) {
    cy.contains(text).should('be.visible');
  }

  static validateLoggedInUserText(textoEsperado) {
    elementosComunes.links.loggedInAs.should('be.visible')
      .invoke('text')
      .then((texto) => {
        if (texto.trim() === textoEsperado) {
          cy.log('Usuario logueado: ' + texto);
        } else {
          cy.log('Usuario no logueado');
        }
      });
  }

  static clickLinkText(textLink) {
    switch (textLink) {
      case 'Home':
        elementosComunes.links.homeLink.click();
        break;
      case 'Products':
        elementosComunes.links.productLink.click();
        break;
      case 'Cart':
        elementosComunes.links.cartLink.click();
        break;
      case 'Logout':
        elementosComunes.links.logoutLink.click();
        break;
      case 'Delete Account':
        elementosComunes.links.deleteAccountLink.click();
        break;
      case 'login':
        elementosComunes.links.signupLogin.click();
        break;
      default: cy.log('No action defined for the given text.');
    }
  }


  static validateUrlText(url) {
    cy.url().should('eq', url)

  }


}