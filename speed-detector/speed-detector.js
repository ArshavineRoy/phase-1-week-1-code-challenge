// Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. 

// Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

// For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.


function speedDetector(){
    let prompts = 0; // sets prompts to 0 for first try
    do {
        if (prompts < 2){
            const speedLimit = 70;
            let carSpeed = prompt("Please enter car speed: ")                   //prompts the user to enter the car speed

            if (!isNaN(carSpeed)){
                if (carSpeed <= speedLimit){
                    return "Ok";
                }else{
                    let demeritPoints = Math.round((carSpeed - speedLimit) / 5);  //rounds the result up or down appropriately. e.g., 2.1 = 2, 3.9 = 4.
                    
                    if(demeritPoints > 12){
                        return "License suspended";
                    }else{
                        return `Points: ${demeritPoints}`;
                    }   
                }
            }else{
                alert("You need to enter a number!"); // alerts user to enter a number as a valid input.
            }
        }else{
            alert ("You have reached maximum number of tries. Please start again.")
        }prompts++; // increments prompts by 1.
    } while (prompts <= 2) // speedDetector repeats for the user to attempt another entry. Allows a max of three tries.
    
        
}

console.log(speedDetector());
