@economist
Feature: This feature is to test the Economist Job Portal

Background: background feature
Given user launch the url "https://jobs.economist.com/"
When User lands on home page

Scenario: Job search
Then user should enter the  data "director" in designationtext field
Then user should enter the data "uk" in location text field
Then user should click on "search" button
Then user lands on search Job page
Then user should click on view details 
Then user should be able to see Apply button

Scenario:Validate correct Job search in sector list
Then user should click on "Banking and finance" sector
Then user lands on sector page
Then user should click on view details
Then user should validate sector "Banking and finance" Job is displayed
Then user should be able to see Apply button
