import{Given} from "@cucumber/cucumber";
import{browser} from "protractor";

Given(/^user launch the url "(.*?)"$/, async(url: any) => {
     await browser.driver.get(url);
});
