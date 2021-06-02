import * as reporter from "cucumber-html-reporter";
import * as mkdirp from "mkdirp";
import * as fs from "fs";
import * as path from "path"

const jsonreport = path.join(process.cwd(),"\\reports\\reportjson");
const HTMLReport = path.join(process.cwd(),"\\reports\\reportHTML");
const targetJson = jsonreport+"cucumber_report.json"
//let bootstraptheme = "bootstrap" as const

var cucumberReporterOptions  = {
    
    jsonFile:targetJson,
    theme: 'bootstrap' as const ,
    output:HTMLReport+"/cucumber_report.html",
    reportSuiteAsScenarios: true,
    launchReport:true,
  
};


export class Reporter{
   
   
    public static createReportwithHTML(){
        try{
          
          reporter.generate(cucumberReporterOptions);//invoke cucumber-html-reporter
        }catch(err){
            if(err)
            throw new Error("Failed to Save results in cucumber Json file")

        }
    }

    public static createFolder(dir:string){
        try{
        if(!fs.existsSync(dir)){ //checking with directory already exist 
            fs.mkdirSync(dir);
        }
        }catch(err){
            console.error("Issue in craeting folder"+err)
        }
    }
}