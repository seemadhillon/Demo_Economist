import{$,ElementFinder} from "protractor";

export class createaccountpageobject{

    createaccountlink:ElementFinder;
   constructor(){
       this.createaccountlink=$("input[type='submit'][value='Create an account']");
   }

}