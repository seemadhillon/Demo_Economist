@economist
Feature: This feature is to test the Economist Job Portal

Background: background feature
Given user launch the url "https://jobs.economist.com/"
When User lands on home page

Scenario: validate the home page of economist
Then user should validate the existence of "search designation" on home page
Then user should validate the existence of "search location" on home page
Then user should validate the visibility of "sector list" links
Then user should validate the visibility of navigation bar


Scenario Outline: Validate the sign in and create account functionality 
Then validate "<linkname>" link is present on home page
And click on "<buttonname>" button
And validate the "<pagename>" page navigation

Examples:
    | linkname      | pagename      | buttonname |
    |  Sign in      | Sign in       | Sign in |
    | create account|create account | create account|

# Scenario: Validate the Navigation
# Then User should validate the correct page navigation in navigation bar

Scenario Outline: To check page Navigation
Then user should check the correct validation of "<navigation>" bar

Examples:
    | navigation     | 
    | Jobalert       | 
    | findajob       |
    |Jobblog         |
    |searchrecruiters|
    |home            |