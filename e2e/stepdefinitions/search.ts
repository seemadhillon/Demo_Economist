import { Then, When } from "@cucumber/cucumber";
import {browser, ExpectedConditions, protractor} from "protractor";
import {SearchPageObject} from "../../e2e/pageobjects/searchpage";
const chai = require("chai");
chai.use(require("chai-as-promised"));

const expect = chai.expect;

const search: SearchPageObject = new SearchPageObject();

Then(/^I type "(.*?)"$/, async(text: any) => {

    await search.searchTextBox.sendKeys(text);
});

Then(/^I click on search button$/, async () => {
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
});

Then(/^I clear the search box$/, async () => {
    await browser.driver.actions().sendKeys(" ").perform();
});

Then(/^user lands on sector page$/, async() => {
    try{
        await browser.driver.getCurrentUrl().then((currentUrl) => {
         expect(currentUrl).to.equals("https://jobs.economist.com/jobs/banking-and-finance/");
    }); }catch (err){
        console.log("error in executing");
    }

});

Then(/^user should click on view details$/, async() => {
    // await search.viewdetailslist.each(function(element,index){
    //    element.click();
    // });

    const elm = search.viewdetailslist.get(0);
    browser.executeScript("arguments[0].scrollIntoView();", elm.getWebElement());

    await elm.click();
//    try{
//     await search.viewdetailslist.first().then(function(text){
//         console.log(text);
//     })
//    }catch(err){
//         console.log("errprrrrrr")
//    }
// console.log("test")

    });

    Then(/^user lands on search Job page$/, async() => {

        try{
            await browser.driver.getCurrentUrl().then((currentUrl) => {
             expect(currentUrl).to.contains("https://jobs.economist.com/searchjobs/");
        }); }catch (err){
            console.log("error in executing");
        }

    });
