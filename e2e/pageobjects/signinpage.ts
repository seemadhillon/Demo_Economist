import{$, By, element, ElementFinder} from "protractor";

export class SigninpageObject{
   signinButton: ElementFinder;

   constructor(){
    this.signinButton = $("input[type='submit'][value='Sign in']");

   }

}