import {$, by, element, ElementArrayFinder, ElementFinder} from "protractor";

export class Homepageobject{
    public searchdesignation: ElementFinder;
    public searchlocation: ElementFinder;
    public searchbutton: ElementFinder;
    public signinlink: ElementFinder;
    public createaccountlink: ElementFinder;
    public  sectorlist: ElementArrayFinder;
    public navigationlist: ElementArrayFinder;
    public navhome: ElementFinder;
    public navfindJob: ElementFinder;
    public navjobalert: ElementFinder;
    public navserachrecruit: ElementFinder;
    public navjoblog: ElementFinder;
    public sectorbankingfinance: ElementFinder;
    public sectorGovernment: ElementFinder;
    public sectorAcsdemia: ElementFinder;
    public sectorMedia: ElementFinder;
    public sectorCharity: ElementFinder;
    public sectorInternational: ElementFinder;
    public sectorNGO: ElementFinder;
    public sectorConsultancy: ElementFinder;
    public sectorDevelopement: ElementFinder;
    public sectorHealth: ElementFinder;
    public sectorHumanitarian: ElementFinder;
    public sectorOther: ElementFinder;
    public sectorIT: ElementFinder;

    constructor(){
       this.searchdesignation = element(by.id("keywords"));
       this.searchlocation = element(by.id("location"));
       this.searchbutton = $("input[value='Search']");
       this.signinlink = $("a[href='/logon/']");
       this.createaccountlink = $("a[href='/register/']");
       this.sectorlist = element.all(by.css("div.browse__items ul li"));
       this.navigationlist = element.all(by.css("nav#primary-nav div ul li"));
       this.navhome = $("a[href='/']");
       this.navfindJob = $("a[href='/jobs/']");
       this.navjobalert = $("a[href='/newalert/']");
       this.navjoblog = $("a[href='/careers/']");
       this.navserachrecruit = $("a[href='/employers/']");
       this.sectorbankingfinance = $("a[href='/jobs/banking-and-finance/']");
       this.sectorIT = $("a[href='/jobs/it-and-telecoms/']");
       this.sectorIT = $("a[href='/jobs/government/']");
       this.sectorIT = $("/jobs/academia/");
       this.sectorIT = $("/jobs/media/");
       this.sectorIT = $("/jobs/charity/");
       this.sectorNGO = $("/jobs/ngo/");
       this.sectorInternational = $("/jobs/international-public-sector/");
       this.sectorConsultancy = $("/jobs/consultancy/");
       this.sectorDevelopement = $("/jobs/development/");
       this.sectorHealth = $("/jobs/health/");
       this.sectorHumanitarian = $("/jobs/humanitarian/");
       this.sectorOther = $("a[href='/jobs/other/");

    }

  }
