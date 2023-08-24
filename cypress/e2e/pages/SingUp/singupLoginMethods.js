import { elementosComunes } from "../../../util/elementosComunes";
import { singupElements } from "./singupLoginElements";

export class singupMethods{

  static staticData = {  // Hacer staticData una propiedad estática
    firstName: "Pedro",
    lastName: 'Doe',
    company: 'Example Corp',
    address: '123 Main St',
    city: 'Cityville',
    zipCode: '12345',
    phoneNumber: '555-123-4567',
    state: 'CA',
    country: 3
  };

  // Login to your account
  static completedLogin(email,pass){
    singupElements.inputs.inputLoginEmail.invoke('val',email)
    singupElements.inputs.inputPasswordLogin.type(pass)
    singupElements.buttons.btnLogin.click()
  }




  //ENTER ACCOUNT INFORMATION
  static selectGender(gender){
    if(gender =='male'){
      singupElements.radios.genderRadioMale.click()
    }else if(gender == 'famele'){
      singupElements.radios.genderRadioFamele.click()
    }else{
      throw new Error('Invalid gender option');
    }
  }

  static clickNewsletter(){
    singupElements.checkboxes.checkNewsletter.click()
  }

  static clickReceivEspecial(){
    singupElements.checkboxes.checkReceivEspecial.click()
  }

  static clickCreateAccount(){
    singupElements.buttons.createAccount.click()
  }



  static fillNameField(name){
    singupElements.inputs.inputName.type(name)
  }

   static fillEmailField(email){
    singupElements.inputs.inputEmail.type(email)
  }

   static fillPasswordField(pass){
    singupElements.inputs.inputPassword.type(pass)
  }
  static clickCountry(cityNumber){
    singupElements.selects.selectCountry.select(cityNumber)
  }

  static fillBirthday(day,month,year){
    singupElements.selects.selectDays.select(day)
    singupElements.selects.selectMonths.select(month)
    singupElements.selects.selectYears.select(year)
  }

  // ADDRESS INFORMATION
   static fillFistNameField(fistName){
    singupElements.inputs.inputFistName.type(fistName)
  }

  static fillLastNameField(lastName){
    singupElements.inputs.inputLastName.type(lastName)
  }

  static fillCompanyField(company){
    singupElements.inputs.inputCompany.type(company)
  }


  static fillCompanyField(company){
      singupElements.inputs.inputCompany.type(company)
    }

  static fillAddressField(address){
    singupElements.inputs.inputAddress.type(address)
  }

  static fillCity(city){
    singupElements.inputs.city.type(city)
  }

  static zipCodeField(zipCode){
    singupElements.inputs.zipCode.type(zipCode)
  }

  static mobileNumberField(phoneNumber){
    singupElements.inputs.inputMobileNunber.type(phoneNumber)
  }
  static fillState(state){
    singupElements.inputs.state.type(state)
  }
  static fillAccountInfom(gender,name,pass){
    this.selectGender(gender)
    this.fillNameField(name)
    this.fillPasswordField(pass)
    
  }

  static fillFormWithStaticData() {
    
    this.fillFistNameField(this.staticData.firstName);
    this.fillLastNameField(this.staticData.lastName);
    this.fillCompanyField(this.staticData.company);
    this.fillAddressField(this.staticData.address);
    this.fillCity(this.staticData.city);
    this.zipCodeField(this.staticData.zipCode);
    this.mobileNumberField(this.staticData.phoneNumber);
    this.fillState(this.staticData.state);
    this.clickCountry(this.staticData.country)
  }

  

  
}