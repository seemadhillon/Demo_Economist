@calculator
Feature: Calculator Unit tests 

    Scenario Outline: Divide scenario
    Given a calculator
    When I divide <num1> by <num2>
    Then the result is <num3>
    Examples:
        | num1 | num2 | num3 |
        | 10   |  2   | 5    |
        

    Scenario Outline: Multiply scenario
    Given a calculator
    When I multiply <num1> by <num2>
    Then the result is <num3>
    Examples:
        | num1 | num2 | num3 |
        | 10   |  2   | 20  |    

    Scenario Outline: Division scenario
    Given a calculator
    When I add <num1> and <num2>
    Then the result is <num3>
    Examples:
        | num1 | num2 | num3 |
        | 10   |  2   | 12  |    
        
     Scenario Outline: Division scenario
    Given a calculator
    When I subtract <num1> from <num2>
    Then the result is <num3>
    Examples:
        | num1 | num2 | num3 |
        | 10   |  20  | 10 |   

     Scenario: Perform divide by Zero operation
     Given a calculator
     When I divide 10 by 0
     Then the result should be Infinity
     
     Scenario: Scenario to check the result should be NaN
     Given a calculator
     When I divide 0 by 0
     Then the result should be NaN

     Scenario: Scenario to check the operation of NaN
     Then NaN operation results in NaN only

     Scenario: Scenario to check the operation of Infinity
     Then Infinity operation results in NaN only

     Scenario Outline: Check for negative number addition
     Given a calculator
     When I enter negative numbers as <num1> and <num2>
     Then the result should be <num3> 
     Examples:
         | num1 | num2 | num3 |
         | -10  | -2  | -12  |


    