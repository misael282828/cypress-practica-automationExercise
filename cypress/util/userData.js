import { MetodosComunes } from "./metodosComunes";

export class userDate{

  static get userDateInfo(){
    return signUpInfo = {
      gender: "male",
      name: MetodosComunes.generarString(),
      email: MetodosComunes.generateRandomEmail(),
      password: "secretpassword",
      firstName: "John",
      lastName: "Doe",
      company: "Example Corp",
      address: MetodosComunes.generateRandomEmail(),
      zipCode: "12345",
      phoneNumber: "123-456-7890"
    };
  }



}

