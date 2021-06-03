import { Given , Then , When} from "@cucumber/cucumber";
import{browser, by, element, protractor, WebElement} from "protractor";
import {Applyjobpageobject} from "../pageobjects/applyJobpage";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const applyJob: Applyjobpageobject = new Applyjobpageobject();

Then(/^user should be able to see Apply button$/, async() => {
   await  expect(applyJob.applybutton.isDisplayed()).to.eventually.equals(true);

});

Then(/^user should validate sector "(.*?)" Job is displayed$/, async(sectorname: string) => {
   await expect(applyJob.jobdescriptionlist.get(5).getText()).to.eventually.equals(sectorname);

});

