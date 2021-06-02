import{browser, protractor, WebElement} from "protractor"
import { Given , When , Then} from "@cucumber/cucumber";
import { signinpageObject } from "../pageobjects/signinpage";
const chai=require("chai")
chai.use(require("chai-as-promised"));
chai.use(require('chai-url'))
const expect = chai.expect;

Then(/^validate the "(.*?)" page navigation$/, async (pagename:string) =>{
    var currentUrl = browser.driver.getCurrentUrl();
    switch(pagename){
        case "Sign in":{
          await  currentUrl.then(function(currentUrl){
                expect(currentUrl).to.contain('logon');
                ;

            })
            break;
            
        }
        case "create account":{
          await  currentUrl.then(function(currentUrl){
              expect(currentUrl).to.contain('register')
          })
            break;
        }
        default:{
            console.log("No URL present")
            break;
        }
    }
    
});