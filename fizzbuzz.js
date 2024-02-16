//user inputs number
//print numbers from 1 - number inputted
//if a number is a multiple of 3, print Fizz
//if it's a multiple of 3 and 5, print FizzBuzz

let answer = parseInt(prompt("Please enter a number:"));

for(let i = 1; i<= answer; i++){
    if (i % 3 === 0){
        if(i % 5 === 0){console.log("FizzBuzz")}
        else{console.log("Fizz");}
    } 
    else if (i % 5 === 0){
        console.log("Buzz");
    }
    else{
    console.log(i);
    }
}