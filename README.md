# Demo_Economist
This is Demo Repository that has been created for Demo Purpose.

Steps to configure CI/CD:
1. create a new Job by creating freestyle Project 
2. Configure GIT in Source code management with Repo : https://github.com/seemadhillon/Demo_Economist.git
3. Build Trigger with poll SCM by setting up the cron Job
4. In Build Section , Select Windows batch execution:
    call npm install
    call npm run-script webdriver-update
    call npm run-script clean
    call npm run-script build
    call npm run-script test
    node report_html.js
 5. Execute the Job and check the console for result   

Steps to execute the scripts in local
1. Clone the Project 
2. Perform below execution commands :
        npm install - for installation of dependencies 
        npm run-script clean - for cleaning the temporary files
        npm run-script build - for building the .ts files to .js files
        npm run-script test - for executing the test scripts
