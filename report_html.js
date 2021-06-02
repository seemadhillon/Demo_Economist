var reporter = require('cucumber-html-reporter');
var path = require('path');


const jsonreport = path.join(process.cwd(),"\\reports\\reportjson");
const HTMLReport = path.join(process.cwd(),"\\reports\\reportHTML");
const targetJson = jsonreport+"cucumber_report.json"  
     
var options = {    
        theme: 'bootstrap',    
        jsonFile: jsonreport,    
        output: HTMLReport+"/cucumber_report.html",    
        reportSuiteAsScenarios: true,    
        scenarioTimestamp: true,    
        launchReport: true,    
        metadata: {    
            "App Version":"0.3.2",    
            "Test Environment": "STAGING",    
            "Browser": "Chrome  54.0.2840.98",    
            "Platform": "Windows 10",    
            "Parallel": "Scenarios",    
            "Executed": "Remote"    
        }    
    };    
     
    reporter.generate(options);