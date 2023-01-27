/*
1a. Create a LET variable named randomNum. Use Math.random, as well as Math.floor, so the possible value 
    for it will be a whole number from 1 to 5 (Ex: 1, 2, 3, 4, or 5).
1b. Using IF, ELSE IF, and ELSE, have the following display in the terminal/console for each case 
    (AKA Each value for randomNum) "Greater than or equal to 4", "Equal to 2 or 3", "Equal to 1" in 
    the terminal/console
1c. Using a separate if statement (Not part of the one created above) have the following display 
    "Not equal to 3" if the value for randomNum is NOT equal to 3.
1d. Using another separate if statement (Not part of the ones created above) have the following display 
    "NOT equal to 3 AND not equal to 5" if the value for randomNum is NOT equal to 3 and also 
    NOT equal to 5 (AKA If the value is 1, 2, or 4).
1e. Using another separate if statement (Not part of the ones created above) have the following display 
    "Equal to 2 OR equal to 4" if the value for randomNum is either 2 or 4.
*/


let randomNum = Math.floor(Math.random() * 5 + 1);
console.log(randomNum);

if (randomNum >= 4){
    console.log("Greater than or equal to 4");
}
else if (randomNum == 2 || randomNum == 3){
    console.log("Equal to 2 or 3");
}
else {
    console.log("Equal to 1");
}

if (randomNum != 3){
    console.log("Not equal to 3");
}

if (randomNum != 3 && randomNum != 5){
    console.log("NOT equal to 3 AND not equal to 5");
}

if (randomNum == 2 || randomNum == 4){
    console.log("Equal to 2 OR equal to 4");
}

