# Phase 1 : Week 1 Code Challenge
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)

## Description

This is a JavaScript code challenge for Phase 1 Week 1.

The challenge involves creating three separate programs for calculating output based on user input.

### 1: School Grade Generator
This is a JavaScript program that calculates a student's grades based on their marks as per the grade chart below:

        A = 79 - 100
        B = 60 - 79
        C = 49 - 59
        D = 40  -49
        E = < 40

        

In case of an error in user input, the program repeats the prompt for the user to attempt another entry, allowing a max of three tries.

### 2: Speed Detector

This is a program that takes as input the speed of a car and outputs "Ok" if the speed is less than 70, and for every 5 km/s above the speed limit (70), it gives the driver one demerit point and prints the total number of demerit points.

For example, if the speed is 80, it prints: “Points: 2”. 

If the driver gets more than 12 points, the function prints: “License suspended”.

In case of an error in user input, the program repeats the prompt for the user to attempt another entry, allowing a max of three tries.


### 3: Net Salary Calculator

This is a program that calculates an individual’s Net Salary by getting the inputs of basic salary and benefits. It shows the user's relevant data: Gross salary, benefits/allowances, NSSF deductions, taxable income, NHIF contributions, PAYE due, and net pay.

KRA, NHIF, and NSSF values are obtained from the sources below:

1. https://www.aren.co.ke/payroll/taxrates.htmLinks

2. https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks


#### NSSF
NSSF: New Rates
The employer and employee each contribute 6% of pensionable pay to NSSF, subject to the following montly limits:

    Tier       Pensionable Pay
    I           Up to 6,000
    II          6,001 - 18,000


NSSF: Old Rates
Under the old NSSF Act, the employee and the employer contributed 5% of gross pay each. The combined employee and employer contribution for each pay period was subject to the following limits:

    Pay Frequency       Maximum Contribution
    Monthly	                400
    Biweekly                200
    Weekly	                100


#### PAYE
New income tax rates were introduced in Kenya on January 1, 2022. The rates are progressive, meaning that the higher your income, the higher your tax rate. 
A personal relief of Ksh2,400 per month applies, which is subtracted from your tax payable.
PAYE is calculated by first determining your taxable income. This is done by subtracting your pension contributions from your gross income. 
Your taxable income is then taxed using the progressive income tax rates.

    Gross Pay             Rate of Tax (%)
    Up to 24,000                10
    24,001 - 32,333             25
    Above 32,333                30


#### NHIF Contributions
Monthly NHIF contributions qualify for 15% insurance relief, capped at 5,000.
```
    Gross Pay (Ksh)        Deduction (Ksh)
    Up to 5,999                 150	 	
    6,000 - 7,999               300	 	
    8,000 - 11,999              400	     	
    12,000 - 14,999             500	 	
    15,000 - 19,999             600	 	
    20,000 - 24,999             750	 	
    25,000 - 29,999             850	 	
    30,000 - 34,999             900	 	
    35,000 - 39,999             950
    40,000 - 44,999             1,000	 	
    45,000 - 49,999             1,100
    50,000 - 59,999             1,200
    60,000 - 69,999             1,300
    70,000 - 79,999             1,400
    80,000 - 89,999             1,500
    90,000 - 99,999             1,600
    100,000 and above           1,700
```


## Project Setup
### 1. Clone the repository
```
git clone https://github.com/ArshavineRoy/phase-1-week-1-code-challenge
```

### 2. Navigate to the project directory
```
cd phase-1-week-1-code-challenge
```
### 3. Open the project in Visual Studio Code
```
Within the repo forlder in the terminal, use code . to open VS Code.

Alternatively, run VS Code and the project repo folder directly.
```
### 4. Install the Live Server extension
```
Open the Extensions view in VS Code (Ctrl+Shift+X), search for "Live Server" by Ritwick Dey, and click Install.
```

### 5. Open the JavaScript program of choice
```
Locate the JavaScript file in the project directory and open its index.html file.
```

### 6. Start the Live Server
```
Right-click on the opened JavaScript file in VS Code and select "Open with Live Server" from the context menu.

This will automatically launch a local development server and open the JavaScript program in your default web browser.
```

### 7. View the console
```
Right-click anywhere in the opened tab and select "Inspect" from the context menu to view developer tools.

Click on "Console" to see outputs.

```

### 8. Interact with the programs
```
Follow the prompts and view outputs to interact with the JavaScript program running in the browser.
```


## Author & License
This project is authored by Arshavine Waema and licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.
