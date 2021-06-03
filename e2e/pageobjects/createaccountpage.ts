import{$, ElementFinder} from "protractor";

export class Createaccountpageobject{

    createaccountlink: ElementFinder;
   constructor(){
       this.createaccountlink = $("input[type='submit'][value='Create an account']");
   }

}