import { Given , Then , When} from "@cucumber/cucumber";
import { dir } from "console";
import{browser, by, element, protractor, WebElement} from "protractor";
import { DriverProvider } from "protractor/built/driverProviders";
import { Homepageobject } from "../pageobjects/homepage";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const home: Homepageobject = new Homepageobject();

When("User lands on home page", async () => {
          await expect(browser.driver.getCurrentUrl()).to.eventually.equal("https://jobs.economist.com/");
    });

Then(/^User should validate the correct page navigation in navigation bar$/, async() => {
        const navigationpageMapping = new Map();
        await  home.navigationlist.each((element1, index) => {
                    element1.getText().then((text) => {
                            console.log(index, text);
                            navigationpageMapping.set(index, text);
          });

        });
        for (const value of navigationpageMapping.values()){

            switch (value){
                case"Home": {
                    try{
                    home.navjobalert.click();
                    browser.driver.getCurrentUrl().then((currentUrl) => {
                    expect(currentUrl).to.equals("https://jobs.economist.com/newalert/"); });
                }catch (err){
                    console.log("error in execution");
                }
                    break; }
                case "Find a job": {
                    try{
                        console.log("find a job");
                        browser.driver.get("https://jobs.economist.com/");
                        home.navfindJob.click();
                        browser.driver.getCurrentUrl().then((currentUrl) => {
                        expect(currentUrl).to.equals("https://jobs.economist.com/jobs/");
                        });
                    }catch (err){
                        console.log("error in execution");
                    }

                    break; }
                case "Job alerts": {
                    try{
                        console.log("jobalert");
                        browser.driver.get("https://jobs.economist.com/");
                        home.navjobalert.click();
                        browser.driver.getCurrentUrl().then((currentUrl) => {
                        expect(currentUrl).to.equals("https://jobs.economist.com/newalert/"); });

                    }catch (err){
                        console.log(err);
                    }

                    break; }
                case "Search recruiters": {
                    try{
                        browser.driver.get("https://jobs.economist.com/");
                        console.log("serach");
                        home.navserachrecruit.click();
                        browser.driver.getCurrentUrl().then((currentUrl) => {
                        expect(currentUrl).to.equals("https://jobs.economist.com/employers/");
                        });
                    }catch (err){
                        console.log(err);
                    }

                    break; }
                case "Jobs blog": {
                    try{
                        browser.driver.get("https://jobs.economist.com/");
                        home.navjoblog.click();
                        browser.driver.getCurrentUrl().then((currentUrl) => {
                        expect(currentUrl).to.equals("https://jobs.economist.com/careers/"); });
                    }catch (err){
                        console.log("error in execution");
                    }

                    break; }
                default: {
                    console.log("default");
                }
            }
        }

    });

Then(/^user should validate the visibility of navigation bar$/, async() => {
    await home.navigationlist.each((element1, index) => {

        element1.getText().then((text) => {
            switch (text){
                case"Home": {
                    expect(index).to.equals(0);
                    expect(home.navhome.isPresent()).to.eventually.equal(true);
                    break; }
                case "Find a job": {
                    expect(home.navfindJob.isPresent()).to.eventually.equal(true);
                    break; }
                case "Job alerts": {
                    expect(home.navjobalert.isPresent()).to.eventually.equal(true);
                    break; }
                case "search recruiters": {
                    expect(home.navserachrecruit.isPresent()).to.eventually.equal(true);
                    break; }
                case "Jobs blog": {
                    expect(home.navjoblog.isPresent()).to.eventually.equal(true);
                    break; }
            }
        });
});
});

Then(/^validate "(.*?)" link is present on home page$/, async (homepagelink: string) => {
    if (homepagelink === "Sign in"){
        await expect(home.signinlink.isPresent()).to.eventually.equal(true);
    }else if (homepagelink === "create account"){
        await expect(home.createaccountlink.isPresent()).to.eventually.equal(true);
    }
    });

Then(/^click on "(.*?)" button$/, async(buttonname: string) => {
    if (buttonname === "Sign in"){
        await home.signinlink.click();
    }else if (buttonname === "create account"){
        await home.createaccountlink.click();
    }
});

Then(/^user should validate the visibility of "(.*?)" scroll bar$/, async(elementtobepresent: any) => {
    switch (elementtobepresent){
        case "vertical scroll Bar": {
            try{
                await browser.driver.executeScript("return window.scrollMaxY").then((verticalscrollbar) => {
                    console.log(verticalscrollbar);
                    if (verticalscrollbar !== 0){
                    console.log("vertical scroll bar is presnet");
                }else{
                    console.log("vertical scroll bar is not present");
                }
                });
                }catch (err){
                    console.log("No such element present");
                }
            }
       default: {
           console.log("Check again the visbility");
           break;
       }
    }
});

Then(/^user should validate the visibility of "(.*?)" links$/, async(elementtobechecked: any) => {

    await home.sectorlist.each((element1, index) => {
        console.log("index is " + index);
        element1.getText().then((text) => {
                console.log(text);
                switch (text){
                 case"Banking and finance": {
                       expect(home.sectorbankingfinance.isPresent()).to.eventually.equal(true);
                       break; }
                case "IT and telecoms": {
                        expect(home.sectorIT.isPresent()).to.eventually.equal(true);
                        break; }

                case "Government": {
                         expect(home.sectorGovernment.isPresent()).to.eventually.equal(true);
                         break; }
                case "Academia": {
                         expect(home.sectorAcsdemia.isPresent()).to.eventually.equal(true);
                         break; }
                case "Charity": {
                    expect(home.sectorCharity.isPresent()).to.eventually.equal(true);
                    break; }
                case "International public sector": {
                        expect(home.sectorInternational.isPresent()).to.eventually.equal(true);
                        break; }
                case "NGO": {
                            expect(home.sectorNGO.isPresent()).to.eventually.equal(true);
                            break; }
                case "Consultancy": {
                                expect(home.sectorConsultancy.isPresent()).to.eventually.equal(true);
                                break; }
                case "Development": {
                                    expect(home.sectorDevelopement.isPresent()).to.eventually.equal(true);
                                    break; }
                case "Health": {
                                 expect(home.sectorHealth.isPresent()).to.eventually.equal(true);
                                 break; }
                case "Humanitarian": {
                                    expect(home.sectorHumanitarian.isPresent()).to.eventually.equal(true);
                                    break; }
                case "Other": {
                            expect(home.sectorOther.isPresent()).to.eventually.equal(true);
                            break; }

            }
        });
});

});

Then("user should validate the existence of {string} on home page" , async (elementtobeprseent: string) => {

    switch (elementtobeprseent){
         case "search designation": {
           try{
                home.searchdesignation.isPresent().then((present) => {
                    if (present){
                            console.log("search deignation is present");
                        }else{
                            console.log("serch designation is not present");
                     }
                    });
                } catch (err){
                 throw new Error("designatin is not present");
             }
           break;
        }
        case "search location": {
            try{
                home.searchlocation.isPresent().then((present) => {
                    if (present){
                        console.log("search location is present");
                    }else{
                        console.log("serch location is not present");
                    }
                });
            } catch (err){
             throw new Error("location field is not present");
         }
            break;
        }
        default: {
            console.log("No matching values");
            break;
        }
       }
    });

Then(/^user should enter the  data "(.*?)" in designationtext field$/, async(testdata: any) => {
  await home.searchdesignation.sendKeys(testdata);

});

Then(/^user should enter the data "(.*?)" in location text field$/, async(location: any) => {
  await home.searchlocation.sendKeys(location);

});

Then(/^user should click on "(.*?)" button$/, async(searchbtn: any) => {
    if (searchbtn === "search"){
        await home.searchbutton.click();
    }

});

Then(/^user should click on "(.*?)" sector$/, async(sectorname: any) => {
    if (sectorname === "Banking and finance"){
        await home.sectorbankingfinance.click();

    }
 });

Then(/^user should switch to windows$/, async() => {
       browser.getAllWindowHandles().then((handles) => {
            browser.switchTo().window(handles[1]).then(() => {
                browser.driver.getCurrentUrl().then((currentUrl) => {
                    expect(currentUrl).to.equals("https://jobs.economist.com/jobs/banking-and-finance/");

                });
            });
        });
});

Then(/^user should check the correct validation of "(.*?)" bar$/, async(type: string) => {
   switch (type){
       case "Jobalert": {
            await home.navjobalert.click();
            browser.driver.getCurrentUrl().then((currentUrl) => {
            expect(currentUrl).to.equals("https://jobs.economist.com/newalert/"); });
            break;
         }
       case "findajob": {
           await home.navfindJob.click();
           browser.driver.getCurrentUrl().then((currentUrl) => {
            expect(currentUrl).to.equals("https://jobs.economist.com/jobs/"); });

           break;
        }
        case "searchrecruiters": {
             await home.navserachrecruit.click();
             browser.driver.getCurrentUrl().then((currentUrl) => {
             expect(currentUrl).to.equals("https://jobs.economist.com/employers/"); });

             break;
        }
        case "Jobblog": {
            await home.navjoblog.click();
            browser.driver.getCurrentUrl().then((currentUrl) => {
            expect(currentUrl).to.equals("https://jobs.economist.com/careers/"); });
            break;
        }
        case "home": {
            await home.navhome.click();
            browser.driver.getCurrentUrl().then((currentUrl) => {
                expect(currentUrl).to.equals("https://jobs.economist.com/");

             });
        }
        default: {
            break;
        }
   }

});