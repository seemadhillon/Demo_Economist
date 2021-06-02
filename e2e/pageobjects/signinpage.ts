import{$,By,element,ElementFinder} from "protractor"


export class signinpageObject{
   signinButton: ElementFinder;

   constructor(){
    this.signinButton = $("input[type='submit'][value='Sign in']");

   }

}