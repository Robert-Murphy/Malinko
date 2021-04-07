## To run Cypress UI tests locally

First ensure you have Cypress installed globally with: 

> npm install cypress -g

<br/>

To run the tests in headless mode use:

> npm run cy:headless 

or to run them in chrome browser use:

> npm run cy:chrome

<br/>

## To run Cypress UI tests in Docker:

To run the tests in a docker container which will exit upon finishing use:


> docker-compose up --build --abort-on-container-exit

<br/>

## Test Cases

Test scripts can be found in the `testcases.xls` file in the `test_cases` folder at the root. 
<br/>
Please note there are multiple tabs in the .xls file for seperate cases. 
