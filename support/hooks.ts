import { BeforeAll, Before, AfterAll, After, Status } from "@cucumber/cucumber";
import {browser} from "protractor"


BeforeAll({timeout: 100 * 1000}, async () => {
    browser.manage().window().maximize();
});

Before(async function () {
    await browser.manage().deleteAllCookies();
})

After(async function (scenario) {
    
      // if(scenario.result.status=== Status.FAILED){
        const screenShotFail= await browser.takeScreenshot();
        this.attach(screenShotFail, "images/png")
        
   // }
})

// After(async(scenario:any)=>{
//     if(scenario.result.status==Status.FAILED){
//         const screenshot = await browser.takeScreenshot();
//         const image = Buffer.alloc(screenshot.length,screenshot,'base64');
//         scenario.attach(image,'image/img')

//     }
// }
// )



AfterAll({timeout: 100 * 1000}, async () => {
    await browser.quit();
});
