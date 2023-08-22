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


}