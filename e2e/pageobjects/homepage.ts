import {$,by,element,ElementArrayFinder,ElementFinder} from "protractor";

export class homepageobject{
    public searchdesignation:ElementFinder 
    public searchlocation:ElementFinder
    public searchbutton:ElementFinder
    public signinlink:ElementFinder
    public createaccountlink:ElementFinder
    public  sectorlist:ElementArrayFinder
    public navigationlist:ElementArrayFinder
    public nav_home:ElementFinder
    public nav_findJob:ElementFinder
    public nav_jobalert:ElementFinder
    public nav_serachrecruit:ElementFinder
    public nav_joblog:ElementFinder
    public sector_bankingfinance:ElementFinder;
    public sector_Government: ElementFinder
    public sector_Acsdemia: ElementFinder
    public sector_Media: ElementFinder
    public sector_Charity: ElementFinder
    public sector_International: ElementFinder
    public sector_NGO: ElementFinder
    public sector_Consultancy: ElementFinder
    public sector_Developement: ElementFinder
    public sector_Health: ElementFinder
    public sector_Humanitarian: ElementFinder
    public sector_Other: ElementFinder
    public sector_IT: ElementFinder

    constructor(){
       this.searchdesignation = element(by.id('keywords'));
       this.searchlocation=element(by.id('location'));
       this.searchbutton= $("input[value='Search']");
       this.signinlink=$("a[href='/logon/']");
       this.createaccountlink=$("a[href='/register/']");
      this.sectorlist=element.all(by.css('div.browse__items ul li'));
      this.navigationlist= element.all(by.css('nav#primary-nav div ul li'))
      this.nav_home=$("a[href='/']");
      this.nav_findJob=$("a[href='/jobs/']");
      this.nav_jobalert=$("a[href='/newalert/']");
      this.nav_joblog=$("a[href='/careers/']");
      this.nav_serachrecruit=$("a[href='/employers/']");
      this.sector_bankingfinance=$("a[href='/jobs/banking-and-finance/']")
      this.sector_IT=$("a[href='/jobs/it-and-telecoms/']")
      this.sector_IT=$("a[href='/jobs/government/']")
      this.sector_IT=$("/jobs/academia/")
      this.sector_IT=$("/jobs/media/")
      this.sector_IT=$("/jobs/charity/")
      this.sector_NGO=$("/jobs/ngo/");
      this.sector_International=$("/jobs/international-public-sector/")
      this.sector_Consultancy=$("/jobs/consultancy/")
      this.sector_Developement=$("/jobs/development/")
      this.sector_Health=$("/jobs/health/")
      this.sector_Humanitarian=$("/jobs/humanitarian/")
      this.sector_Other=$("a[href='/jobs/other/")

      



        
    }

    getpagenavigations(url:any,locator:any): void {
     
    }

  } 


 