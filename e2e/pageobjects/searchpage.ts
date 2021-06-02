import {$,by,element,ElementArrayFinder,ElementFinder} from "protractor"

export class searchPageObject{
    public searchTextBox:ElementFinder;
    public searchButton:ElementFinder;
    public logo:ElementFinder;
    public viewdetailslist :ElementArrayFinder
    constructor(){
        this.searchTextBox = $("input[title='Search']");
        this.viewdetailslist=element.all(by.css('p.lister__view-details a'));
    }
}