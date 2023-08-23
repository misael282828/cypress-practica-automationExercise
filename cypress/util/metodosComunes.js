export class MetodosComunes{
  
  static  generarString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const charactersLength = characters.length;
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }
    
    return result;
  }

  static  generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(7); // Genera una cadena aleatoria
    const domain = 'example.com'; // Cambia esto al dominio deseado
    const email = `${randomString}@${domain}`;
    return email;
  }


  static  generateRandomAddress() {
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

}