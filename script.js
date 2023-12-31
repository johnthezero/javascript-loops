let max;
let message="This is not a number, enter a number";
let messageNegative="Enter a positive number greater than 1";
let isValid=false; //boolean that will be useful to run the loops
let numberOfTries=0;
//validation process --> is the input correct ?
while(!isValid){
    max=prompt("Enter an integer");

    //Is the user input empty or null ?
    if(max!=null && max!=''){

        //Is the user input a number ?
        if(!isNaN(max)){
            //isValid=true --> we quit the loop
            max=parseInt(max);
            if(max>0){
                isValid=true;
            }else{
                alert(messageNegative);
            }
        }else{
            alert(message);
        }
    }else {
        alert(message);
    }
}

//selecting a number between 1 and the max included
let random=Math.floor(Math.random()*max)+1;
let guess;

//We need "isValid" to be false to run the loop -> as long as the value is not valid, we ask again to enter a number
isValid=false;
while(!isValid){
    guess=prompt("Guess the number");
    if(guess!=null && guess!=''){
        if(!isNaN(guess)){
            //If the guess is correct, we reset "isValid" to true and so we quit the loop
            isValid=true;
            guess=parseInt(guess);
            numberOfTries++;
            if(guess==random){
                alert("You found it !!!\n The number was "+random+"!!"+"\n Tu as reussi en "+numberOfTries+" essais !");
                isValid=true;
            }else if (guess<random){
                //If the guess is not correct, we reset isValid to false (remember that "isValid" was set to true at line 41) 
                //and go back to the beginning of the loop with "continue"
                alert("Too low, try again !!!");
                isValid=false;
                continue;
            }else {
                //If the guess is not correct, we reset isValid to false (Remember that is was set to true at line 41) 
                //and go back to the beginning of the loop with "continue"
                alert("Too high! Try again");
                isValid=false;
                continue;
            }
        }else{
            console.log(message);
        }
    }else{
        console.log(message);
    }

}

    

