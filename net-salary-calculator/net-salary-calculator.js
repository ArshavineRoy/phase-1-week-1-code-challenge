// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. 
// Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
// NB: Use KRA, NHIF, and NSSF values provided in the link below.
// https://www.aren.co.ke/payroll/taxrates.htmLinks.  
// https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks.



let grossPay = prompt("What is your monthly gross salary? ");        // prompt the user for input. Almost all inputs treated similarly.
grossPay = parseInt(grossPay.replace(/,/g, ""), 10);                 // parseInt () and .replace () methods used to convert input into an integer and remove all commas, if present
console.log(`Gross Salary: ${grossPay.toLocaleString()}`);           // .toLocaleString() method used to log comma separated values e.g., 1000 = 1,000

let benefits = prompt("What are your monthly benefits/allowances? ");
benefits = parseInt(benefits.replace(/,/g, ""), 10);
console.log(`Benefits/allowances: ${benefits.toLocaleString()}`);

let otherInsurance = prompt("Apart from NHIF, any other insurance relief received? Enter total amount, or 0 if none:"); // Ask user to enter any other insurance they have apart from NHIF for tax relief calculations.
otherInsurance = parseInt(otherInsurance);

const personalRelief = 2400;


// 1. NSSF
// A function for calculating NSSF deductions. All percentages expressed as floats i.e., 6% = 0.06.

function NSSFDeductions (grossPay){
    let NSSFRate = prompt("What are your NSSF rates? \n 1. New Rates \n 2. Old Rates")
    if (NSSFRate === "1"){
        if (grossPay <= 6000){                                // Tier 1: employee contributes 6% of amount if gross pay is below 6000. Tier 1 default value = 360 (6000 * 0.06)
            return (grossPay * 0.06);
        }else if (grossPay > 6000 && grossPay <=18000){       // Tier 2: employee contributes  6% of any amount between 6,001 - 18,000, added to Tier 1's contribution
            return 360 + ((grossPay - 6000) * 0.06);
        }else{
            return 1080;                                      // Anything above 18000; Tier 1 default: 360 + Tier 2 default: 720 = 1080
        }
    }else if (NSSFRate === "2"){
        let NSSFcontribution = (grossPay * 0.05)              // monthly gross pay subject to 5% deductions per old rates, capped at 200.
        if (NSSFcontribution <= 200){                         // Contribution shouldn't exceed 200.
            return NSSFcontribution;
        }else{
            return 200;
        }
    }else{
        alert ("Please enter 1 or 2");
    }
}

let yourNSSFDeductions = NSSFDeductions (grossPay);          // assigning function to a variable for easier reference
console.log(`NSSF Deductions: ${yourNSSFDeductions.toLocaleString()}`);



// 2. PAYE

// A function to for calculating PAYE from gross pay
// New income tax rates were introduced in Kenya on January 1, 2022. The rates are progressive, meaning that the higher your income, the higher your tax rate. 
// A personal relief of Ksh2,400 per month applies, which is subtracted from your tax payable.
// PAYE is calculated by first determining your taxable income. This is done by subtracting your pension contributions from your gross income. 
// Your taxable income is then taxed using the progressive income tax rates.

let taxableIncome = ((grossPay + benefits) - yourNSSFDeductions);
console.log(`Taxable Income: ${taxableIncome.toLocaleString()}`);

function PAYEBeforeRelief(taxableIncome){
    if (taxableIncome <= 24000){                                 // According to the resource provided, Level 1: Taxable Income below 24000 gets a 10% deduction. Default value = 2,400( 24000*0.1)
        return taxableIncome * 0.1
    }else if (taxableIncome > 24000 && taxableIncome <= 32333){  // Level 2: 24000 to 32,333 gets a 25% deduction, in addition to Level 1 default value. Level 2 default = 2,083.25
        return 2400 + ((taxableIncome - 24000) * 0.25);
    }else{
        return 4483 + ((taxableIncome - 32333) * 0.3);           // Level 3: Anything above 32,333 get a 30% cut, in addition to level 1 and level 2 defaults = 4,483.25
    }

}


let yourPAYEBeforeRelief = PAYEBeforeRelief(taxableIncome);


// 3. NHIF

// A function for calculating NHIF contributions from gross pay

function NHIFContributions(grossPay) {
    let contribution;

    // A switch statement based on the NHIF contributions Chart 
    switch (true) {
      case (grossPay <= 5999):
        contribution = 150;
        break;
      case (grossPay >= 6000 && grossPay <= 7999):
        contribution = 300;
        break;
      case (grossPay >= 8000 && grossPay <= 11999):
        contribution = 400;
        break;
      case (grossPay >= 12000 && grossPay <= 14999):
        contribution = 500;
        break;
      case (grossPay >= 15000 && grossPay <= 19999):
        contribution = 600;
        break;
      case (grossPay >= 20000 && grossPay <= 24999):
        contribution = 750;
        break;
      case (grossPay >= 25000 && grossPay <= 29999):
        contribution = 850;
        break;
      case (grossPay >= 30000 && grossPay <= 34999):
        contribution = 900;
        break;
      case (grossPay >= 35000 && grossPay <= 39999):
        contribution = 950;
        break;
      case (grossPay >= 40000 && grossPay <= 44999):
        contribution = 1000;
        break;
      case (grossPay >= 45000 && grossPay <= 49999):
        contribution = 1100;
        break;
      case (grossPay >= 50000 && grossPay <= 59999):
        contribution = 1200;
        break;
      case (grossPay >= 60000 && grossPay <= 69999):
        contribution = 1300;
        break;
      case (grossPay >= 70000 && grossPay <= 79999):
        contribution = 1400;
        break;
      case (grossPay >= 80000 && grossPay <= 89999):
        contribution = 1500;
        break;
      case (grossPay >= 90000 && grossPay <= 99999):
        contribution = 1600;
        break;
      case (grossPay >= 100000):
        contribution = 1700;
        break;
      default:
        break;
    }
  
    return contribution;
}


let yourNHIFContributions = NHIFContributions(grossPay);

console.log(`NHIF Contributions: ${yourNHIFContributions.toLocaleString()}`);


// Tax Relief calculations
// monthly NHIF contributions qualify for 15% insurance relief, capped at 5,000. 

function insuranceRelief(yourNHIFContributions, otherInsurance) {
    let totalInsuranceRelief;

    if (otherInsurance !== 0) {                                                 // an if statement for user input that is not 0; i.e., for a person who has another form of insurance
        totalInsuranceRelief = yourNHIFContributions * 0.15 + otherInsurance;
        console.log(`Other Insurance: ${otherInsurance}`);
    } else {
        totalInsuranceRelief = yourNHIFContributions * 0.15;                    // if a user doesn't have another form of insurance
    }

    return Math.min(totalInsuranceRelief, 5000); // returns the smaller value between totalInsuranceRelief and 5000, ensuring that the returned value does not exceed relief cap of 5000.
                                                                               
}


let yourInsuranceRelief = insuranceRelief(yourNHIFContributions, otherInsurance);

console.log(`Insurance Relief: ${yourInsuranceRelief.toLocaleString()}`);


let PAYEDue = Math.round((yourPAYEBeforeRelief - (yourInsuranceRelief + personalRelief)))
 
console.log(`PAYE Due: ${PAYEDue.toLocaleString()}`);


// Net monthly pay = gross pay - total deductions (NSSF, NHIF, PAYE)

console.log(`Net Pay: ${(grossPay - PAYEDue).toLocaleString()}`)
