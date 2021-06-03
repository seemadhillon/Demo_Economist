import { $, by, element, ElementArrayFinder, ElementFinder} from "protractor";

export class Applyjobpageobject{
   public applybutton: ElementFinder;
   public jobdescriptionlist: ElementArrayFinder;

   constructor(){
       this.applybutton = $("li.job-actions__action.job-actions__action--applylink");
       this.jobdescriptionlist = element.all(by.css("dd.grid-item.three-fifths.portable-one-whole.palm-one-half"));
   }

}