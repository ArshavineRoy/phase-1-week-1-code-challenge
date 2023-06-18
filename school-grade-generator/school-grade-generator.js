// A program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade as follows:
// A = 79 - 100
// B = 60 - 79
// C = 49 - 59
// D = 40  -49
// E = < 40

function gradeGenerator(){
    let prompts = 0; // sets prompts to 0 for first try
    do {
        const marks = prompt("Please enter your marks: ")
        if (!isNaN(marks) && marks>= 0 && marks<=100){ //Allows grading to be worked out only if user input is a number between 0 and 100.
            if (marks >= 79 && marks<= 100) {
                console.log("Grade: A");
                break;
            }else if (marks >= 60 && marks<= 79){
                console.log("Grade: B");
                break;
            }else if (marks >= 49 && marks<= 59){
                console.log("Grade: C");
                break;
            }else if (marks >= 40 && marks<= 49){
                console.log("Grade: D");
                break;
            }else if (marks < 40){
                console.log("Grade: E");
                break;
            }
        }else{
            alert("You need to enter a number between 0 and 100."); // alerts user of what to enter as a valid input.
        } prompts++; // increments prompts by 1, so the user can enter a valid input after the alert.
    } while (prompts <= 2) // gradeGenerator repeats for the user to attempt another entry. Allows a max of two more tries after the alert.
    
        
}

gradeGenerator();