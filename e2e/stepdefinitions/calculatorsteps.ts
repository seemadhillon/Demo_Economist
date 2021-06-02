import { Given , When , Then} from "@cucumber/cucumber";
import{Calculator} from "../Pageobjects/calculator"

import { expect } from "chai";

//const calculator:Calculator=new Calculator();

Given("a calculator", function() {
    this.calculator=new Calculator();
});
 
When("I divide {int} by {int}", function(n1: number, n2: number) {
    this.actual = this.calculator.division(n1, n2);
});
 
Then("the result is {int}", function(expected: number) {
    expect(this.actual).to.be.equal(expected);
});

When("I multiply {int} by {int}", function(n1: number, n2: number) {
    this.actual = this.calculator.multiplication(n1, n2);
});

When("I subtract {int} from {int}", function(n1: number, n2: number) {
    this.actual = this.calculator.subtration(n1, n2);
});

When("I add {int} and {int}", function(n1: number, n2: number) {
    this.actual = this.calculator.addition(n1, n2);
});

Then("the result should be Infinity",function(){
    Infinity:Number;
    expect(this.actual).to.be.equal(Infinity);
});

Then("the result should be NaN",function() {
    
    expect(isNaN(this.actual)).to.equal(true);
  //  expect(this.actual).to.be.equal(Number.NaN);
});

Then("NaN operation results in NaN only",function() {
    
    this.actualnumber=Number.NaN+1
      expect(isNaN(this.actualnumber)).to.equal(true)
});

Then("Infinity operation results in NaN only",function(){
    
    this.actualnumber=Infinity*0
    expect(isNaN(this.actualnumber)).to.equal(true)
})

When("I enter negative numbers as {int} and {int}",function(num1:string,num2:string) {
    this.actual = this.calculator.addition(parseInt(num1),parseInt(num2))
})

Then("the result should be {int}",function(expected:string){
        expect(this.actual).to.equals(parseInt(expected));
})
