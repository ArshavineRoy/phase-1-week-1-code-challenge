// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. 
// Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
// NB: Use KRA, NHIF, and NSSF values provided in the link below.
// https://www.aren.co.ke/payroll/taxrates.htmLinks.  
// https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks.



let basicSalary = prompt("What is your monthly basic salary? ");        // prompt the user for input. Almost all inputs treated similarly.
basicSalary = parseInt(basicSalary.replace(/,/g, ""), 10);                 // parseInt () and .replace () methods used to convert input into an integer and remove all commas, if present
console.log(`Basic Salary: ${basicSalary.toLocaleString()}`);           // .toLocaleString() method used to log comma separated values e.g., 1000 = 1,000

let benefits = prompt("What are your monthly benefits/allowances? ");
benefits = parseInt(benefits.replace(/,/g, ""), 10);
console.log(`Benefits/allowances: ${benefits.toLocaleString()}`);

let insurancePremiums = prompt("Do you have any insurance premiums? Enter total amount, or 0 if none:"); // Ask user to enter any insurance premiums they have.
insurancePremiums = parseInt(insurancePremiums);

const personalRelief = 2400;


// 1. NSSF
// A function for calculating NSSF deductions. All percentages expressed as floats i.e., 6% = 0.06.

function NSSFDeductions (basicSalary){
    let NSSFRate = prompt("What are your NSSF rates? \n 1. New Rates \n 2. Old Rates")
    if (NSSFRate === "1"){
        if (basicSalary <= 6000){                                // Tier 1: employee contributes 6% of amount if basic pay is below 6000. Tier 1 default value = 360 (6000 * 0.06)
            return (basicSalary * 0.06);
        }else if (basicSalary > 6000 && basicSalary <=18000){       // Tier 2: employee contributes  6% of any amount between 6,001 - 18,000, added to Tier 1's contribution
            return 360 + ((basicSalary - 6000) * 0.06);
        }else{
            return 1080;                                      // Anything above 18000; Tier 1 default: 360 + Tier 2 default: 720 = 1080
        }
    }else if (NSSFRate === "2"){
        let NSSFcontribution = (basicSalary * 0.05)              // monthly basic pay subject to 5% deductions per old rates, capped at 200.
        if (NSSFcontribution <= 200){                         // Contribution shouldn't exceed 200.
            return NSSFcontribution;
        }else{
            return 200;
        }
    }else{
        alert ("Please enter 1 or 2");
    }
}

let yourNSSFDeductions = NSSFDeductions (basicSalary);          // assigning function to a variable for easier reference
console.log(`NSSF Deductions: ${yourNSSFDeductions.toLocaleString()}`);



// 2. PAYE

// A function to for calculating PAYE from basic pay
// New income tax rates were introduced in Kenya on January 1, 2022. The rates are progressive, meaning that the higher your income, the higher your tax rate. 
// A personal relief of Ksh2,400 per month applies, which is subtracted from your tax payable.
// PAYE is calculated by first determining your taxable income. This is done by subtracting your pension contributions from your basic income. 
// Your taxable income is then taxed using the progressive income tax rates.

let taxableIncome = ((basicSalary + benefits) - yourNSSFDeductions);
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

// A function for calculating NHIF contributions from basic pay

function NHIFContributions(basicSalary) {
    let contribution;

    // A switch statement based on the NHIF contributions Chart 
    switch (true) {
      case (basicSalary <= 5999):
        contribution = 150;
        break;
      case (basicSalary >= 6000 && basicSalary <= 7999):
        contribution = 300;
        break;
      case (basicSalary >= 8000 && basicSalary <= 11999):
        contribution = 400;
        break;
      case (basicSalary >= 12000 && basicSalary <= 14999):
        contribution = 500;
        break;
      case (basicSalary >= 15000 && basicSalary <= 19999):
        contribution = 600;
        break;
      case (basicSalary >= 20000 && basicSalary <= 24999):
        contribution = 750;
        break;
      case (basicSalary >= 25000 && basicSalary <= 29999):
        contribution = 850;
        break;
      case (basicSalary >= 30000 && basicSalary <= 34999):
        contribution = 900;
        break;
      case (basicSalary >= 35000 && basicSalary <= 39999):
        contribution = 950;
        break;
      case (basicSalary >= 40000 && basicSalary <= 44999):
        contribution = 1000;
        break;
      case (basicSalary >= 45000 && basicSalary <= 49999):
        contribution = 1100;
        break;
      case (basicSalary >= 50000 && basicSalary <= 59999):
        contribution = 1200;
        break;
      case (basicSalary >= 60000 && basicSalary <= 69999):
        contribution = 1300;
        break;
      case (basicSalary >= 70000 && basicSalary <= 79999):
        contribution = 1400;
        break;
      case (basicSalary >= 80000 && basicSalary <= 89999):
        contribution = 1500;
        break;
      case (basicSalary >= 90000 && basicSalary <= 99999):
        contribution = 1600;
        break;
      case (basicSalary >= 100000):
        contribution = 1700;
        break;
      default:
        break;
    }
  
    return contribution;
}


let yourNHIFContributions = NHIFContributions(basicSalary);

console.log(`NHIF Contributions: ${yourNHIFContributions.toLocaleString()}`);


// Tax Relief calculations
// Per KRA, Insurance Relief = 15% (Insurance Premiums + NHIF Contributions) but shall not exceed Kshs. 5,000.00 per month or Kshs. 60,000.00 per year.

function insuranceRelief(yourNHIFContributions, insurancePremiums) {
    let totalInsuranceRelief;

    if (insurancePremiums !== 0) {                                                 // an if statement for user input that is not 0; i.e., for a person who has another form of insurance
        totalInsuranceRelief = yourNHIFContributions * 0.15 + insurancePremiums;
        console.log(`Insurance Premiums: ${insurancePremiums}`);
    } else {
        totalInsuranceRelief = yourNHIFContributions * 0.15;                    // if a user doesn't have another form of insurance
    }

    return Math.min(totalInsuranceRelief, 5000); // returns the smaller value between totalInsuranceRelief and 5000, ensuring that the returned value does not exceed relief cap of 5000.
                                                                               
}


let yourInsuranceRelief = insuranceRelief(yourNHIFContributions, insurancePremiums);

console.log(`Insurance Relief: ${yourInsuranceRelief.toLocaleString()}`);


let PAYEDue = Math.round((yourPAYEBeforeRelief - (yourInsuranceRelief + personalRelief)))
 
console.log(`PAYE Due: ${PAYEDue.toLocaleString()}`);


// Net monthly pay = basic pay - total deductions (NSSF, NHIF, PAYE)

console.log(`Net Pay: ${(basicSalary - PAYEDue).toLocaleString()}`)
