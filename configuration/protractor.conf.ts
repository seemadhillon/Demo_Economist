const reportjson = process.cwd()+"\\reports\\reportjson"
import{Config,browser} from "protractor";
import{Reporter} from "../support/reporter";
import * as path from "path";



export const config:Config={
  //  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
   // getPageTimeout: 60000,
     directConnect:true,
   // SELENIUM_PROMISE_MANAGER: false,
    // allScriptsTimeout: 500000,
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    baseURL: "http://www.google.com",

    capabilities: {
      'browserName': 'chrome',
      'chromeOptions': {
              args:["--no-sandbox --disable-gpu -disable-new-profile-management  --disable-extensions --ignore-certificate-errors "]
      }
    },

    // Spec patterns are relative to this directory.
    specs: [
    //  "../../e2e/features/calculator_unittest.feature",
    // "../../e2e/features/economist_e2e.feature",
    // "../../e2e/features/economist_Jobsearch.feature",
    // "../../e2e/features/economist_homepage.feature"
    "../../e2e/features/*.feature"
    ],

    onPrepare: () => {

      browser.waitForAngularEnabled(false);
      browser.manage().window().maximize();
      Reporter.createFolder(reportjson);
  },

    cucumberOpts: {
   //  compiler: "ts:ts-node/register",
     format: 'json:../../reports/reportjson/cucumber_report.json',
      require: ["../../JSFiles/e2e/stepdefinitions/*.js", "../../JSFiles/support/*.[jt]s"],
 //     strict:true,
      tags: ["~@OutlineScenario" , "~@economist","@calculator"]

 //   profile: false,
  //   strict:true,
 //  'no-source': true
    },

    OnComplete:()=>{
         Reporter.createReportwithHTML();
    }


}

