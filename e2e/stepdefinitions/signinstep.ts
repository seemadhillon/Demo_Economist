import { Given , Then , When} from "@cucumber/cucumber";
import{browser, protractor, WebElement} from "protractor";
import { SigninpageObject } from "../pageobjects/signinpage";
const chai = require("chai");
chai.use(require("chai-as-promised"));
chai.use(require("chai-url"));
const expect = chai.expect;

Then(/^validate the "(.*?)" page navigation$/, async (pagename: string) => {
    switch (pagename){
        case "Sign in": {
          await  browser.driver.getCurrentUrl().then((currentUrl) => {
                expect(currentUrl).to.contain("logon");
                            });
          break;

        }
        case "create account": {
          await  browser.driver.getCurrentUrl().then((currentUrl) => {
              expect(currentUrl).to.contain("register");
          });
          break;
        }
        default: {
            console.log("No URL present");
            break;
        }
    }

});