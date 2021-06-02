import{browser, by, element, protractor, WebElement} from "protractor"
import { Given , When , Then} from "@cucumber/cucumber";
import { homepageobject } from "../pageobjects/homepage";
import { DriverProvider } from "protractor/built/driverProviders";
import { dir } from "console";
const chai=require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const home:homepageobject = new homepageobject();


When('User lands on home page', async ()=> {
          await expect(browser.driver.getCurrentUrl()).to.eventually.equal("https://jobs.economist.com/");
    });

Then(/^User should validate the correct page navigation in navigation bar$/,async()=>{
        let navigationpageMapping = new Map();  
        await  home.navigationlist.each(function(element,index){
                    element.getText().then(function (text) {
                            console.log(index, text);
                            navigationpageMapping.set(index,text);
          });
           
        });   
        for(let value of navigationpageMapping.values()){
            
            switch(value){
                case"Home":{
                    try{
                    home.nav_jobalert.click();
                    browser.driver.getCurrentUrl().then(function(currentUrl){
                    expect(currentUrl).to.equals("https://jobs.economist.com/newalert/")});
                }catch(err){
                    console.log("error in execution");
                }
                    break;}
                case "Find a job":{
                    try{
                        console.log("find a job");
                        browser.driver.get("https://jobs.economist.com/");
                        home.nav_findJob.click();                                                      
                        browser.driver.getCurrentUrl().then(function(currentUrl){
                        expect(currentUrl).to.equals("https://jobs.economist.com/jobs/")
                        });
                    }catch(err){
                        console.log("error in execution");
                    }
                    
                    
                    break;}
                case "Job alerts":{
                    try{
                        console.log("jobalert");
                        browser.driver.get("https://jobs.economist.com/");
                        home.nav_jobalert.click();
                        browser.driver.getCurrentUrl().then(function(currentUrl){
                        expect(currentUrl).to.equals("https://jobs.economist.com/newalert/")});
                        
                    }catch(err){
                        console.log(err);    
                    }
                    
                    break;}
                case "Search recruiters":{
                    try{
                        browser.driver.get("https://jobs.economist.com/");
                        console.log("serach");
                        home.nav_serachrecruit.click();
                        browser.driver.getCurrentUrl().then(function(currentUrl){
                        expect(currentUrl).to.equals("https://jobs.economist.com/employers/")
                        });
                    }catch(err){
                        console.log(err);
                    }
                    
                    break;}
                case "Jobs blog":{
                    try{
                        browser.driver.get("https://jobs.economist.com/");
                        home.nav_joblog.click();
                        browser.driver.getCurrentUrl().then(function(currentUrl){
                        expect(currentUrl).to.equals("https://jobs.economist.com/careers/")});
                    }catch(err){
                        console.log("error in execution");
                    }
                   
                    break;}
                default:{
                    console.log("default")
                }    
            }
        
        } 
                  
    });
   
Then(/^user should validate the visibility of navigation bar$/,async()=>{
    await home.navigationlist.each(function(element,index){
                   
        element.getText().then(function(text){
            switch(text){
                case"Home":{
                    expect(index).to.equals(0);
                    expect(home.nav_home.isPresent()).to.eventually.equal(true);
                    break;}
                case "Find a job":{
                    expect(home.nav_findJob.isPresent()).to.eventually.equal(true)
                    break;}
                case "Job alerts":{
                    expect(home.nav_jobalert.isPresent()).to.eventually.equal(true)
                    break;}
                case "search recruiters":{
                    expect(home.nav_serachrecruit.isPresent()).to.eventually.equal(true)
                    break;}
                case "Jobs blog":{
                    expect(home.nav_joblog.isPresent()).to.eventually.equal(true)
                    break;}
            }
        });
});
});



Then(/^validate "(.*?)" link is present on home page$/, async (homepagelink:string)=> {
    if(homepagelink=="Sign in"){
        await expect(home.signinlink.isPresent()).to.eventually.equal(true);
    }else if(homepagelink=="create account"){
        await expect(home.createaccountlink.isPresent()).to.eventually.equal(true);
    }
    });

Then(/^click on "(.*?)" button$/, async(buttonname:string)=> {
    if(buttonname=="Sign in"){
        await home.signinlink.click();
    }else if(buttonname=="create account"){
        await home.createaccountlink.click();
    }   
});


Then(/^user should validate the visibility of "(.*?)" scroll bar$/,async(elementtobepresent:any)=>{
    switch(elementtobepresent){
        case "vertical scroll Bar":{
            try{
                await browser.driver.executeScript("return window.scrollMaxY").then(function(verticalscrollbar){
                    console.log(verticalscrollbar);
                if(verticalscrollbar!=0){
                    console.log("vertical scroll bar is presnet")
                }else{
                    console.log("vertical scroll bar is not present")
                }
                });
                }catch(err){
                    console.log("No such element present")
                }
            }
       default:{
           console.log("Check again the visbility")
           break;
       }
    }
});

Then(/^user should validate the visibility of "(.*?)" links$/,async(elementtobechecked:any)=>{
    await home.sectorlist.each(function(element,index){
        console.log("index is "+index)
        element.getText().then(function(text){
                console.log(text);
             switch(text){
                 case"Banking and finance":{
                       expect(home.sector_bankingfinance.isPresent()).to.eventually.equal(true);
                        break;}
                case "IT and telecoms":{
                        expect(home.sector_IT.isPresent()).to.eventually.equal(true)
                        break;}

                case "Government":{
                         expect(home.sector_Government.isPresent()).to.eventually.equal(true)
                         break;}
                case "Academia":{
                         expect(home.sector_Acsdemia.isPresent()).to.eventually.equal(true)
                         break;}
                case "Charity":{
                    expect(home.sector_Charity.isPresent()).to.eventually.equal(true)
                    break;}
                case "International public sector":{
                        expect(home.sector_International.isPresent()).to.eventually.equal(true)
                        break;}    
                case "NGO":{
                            expect(home.sector_NGO.isPresent()).to.eventually.equal(true)
                            break;}
                case "Consultancy":{
                                expect(home.sector_Consultancy.isPresent()).to.eventually.equal(true)
                                break;}    
                case "Development":{
                                    expect(home.sector_Developement.isPresent()).to.eventually.equal(true)
                                    break;} 
                case "Health":{
                                 expect(home.sector_Health.isPresent()).to.eventually.equal(true)
                                 break;}
                case "Humanitarian":{
                                    expect(home.sector_Humanitarian.isPresent()).to.eventually.equal(true)
                                    break;} 
                case "Other":{
                            expect(home.sector_Other.isPresent()).to.eventually.equal(true)
                            break;}                                              
                                
            }
        });
});

});
   
       
   
// });
Then('user should validate the existence of {string} on home page' , async function(elementtobeprseent:string){

    switch(elementtobeprseent){
         case "search designation":{
           try{ 
                home.searchdesignation.isPresent().then(function(present){
                    if(present){
                            console.log("search deignation is present")
                        }else{
                            console.log("serch designation is not present")
                     }
                    });
                } catch(err){
                 throw new Error("designatin is not present");     
             }
            break;
        }
        case "search location":{
            try{ 
                home.searchlocation.isPresent().then(function(present){
                    if(present){
                        console.log("search location is present")
                    }else{
                        console.log("serch location is not present")
                    }
                });       
            } catch(err){
             throw new Error("location field is not present");            
         }
        break;
        }
        default:{
            console.log("No matching values");
            break;
        }          
       }
    });


Then(/^user should enter the  data "(.*?)" in designationtext field$/,async(testdata:any)=>{
  await home.searchdesignation.sendKeys(testdata)

})

Then(/^user should enter the data "(.*?)" in location text field$/,async(location:any)=>{
  await home.searchlocation.sendKeys(location);

})

Then(/^user should click on "(.*?)" button$/,async(searchbtn:any)=>{
    if(searchbtn=="search"){
        await home.searchbutton.click();
    }
   

})

Then(/^user should click on "(.*?)" sector$/,async(sectorname:any)=>{
    if(sectorname=="Banking and finance"){
        await home.sector_bankingfinance.click();
        
    }
 });


Then(/^user should switch to windows$/,async()=>{
       browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handles[1]).then(function(){
                browser.driver.getCurrentUrl().then(function(currentUrl){
                    expect(currentUrl).to.equals("https://jobs.economist.com/jobs/banking-and-finance/")

                })
            });
        });
});        
        




Then(/^user should check the correct validation of "(.*?)" bar$/,async(type:String)=>{
   switch(type){
       case "Jobalert":{
            home.nav_jobalert.click();
            browser.driver.getCurrentUrl().then(function(currentUrl){
            expect(currentUrl).to.equals("https://jobs.economist.com/newalert/")});
            break;
         }
       case "findajob":{
           home.nav_findJob.click();
           browser.driver.getCurrentUrl().then(function(currentUrl){
            expect(currentUrl).to.equals("https://jobs.economist.com/jobs/")});
         
           break;
        }
        case "searchrecruiters":{
             home.nav_serachrecruit.click();
             browser.driver.getCurrentUrl().then(function(currentUrl){
             expect(currentUrl).to.equals("https://jobs.economist.com/employers/")});
                
             break;
        }
        case "Jobblog":{
            home.nav_joblog.click();
            
            browser.driver.getCurrentUrl().then(function(currentUrl){
                expect(currentUrl).to.equals("https://jobs.economist.com/careers/")});
            break;
        }
        case "home":{
            home.nav_home.click();
            browser.driver.getCurrentUrl().then(function(currentUrl){
                expect(currentUrl).to.equals("https://jobs.economist.com/")
                
             });
        }
        default:{
            break;
        }
   }

    
})