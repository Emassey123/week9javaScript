//// Very Easy


function min(x, y) {
    if (x > y) {
        return y
    }else {
        return x
    }
}
console.log(min(23,40));

// Easy

let students = [["Josh", "Kaleb", "Cynthia"], ["Allen", "Blueman", "Moralez"], ["14", "16", "15"]];

console.log(`Hello my name is ${students [0][1]} ${students[1][1]} I am ${students[2][1]} years old!`);

// Medium 

let userInput = Number(prompt("Enter a number 1 - 12"));

let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let answer;

for (let i = 0; i <= 12; i++ ){
   switch (userInput){
       case i: 
       console.log(userInput = months[i - 1])
       break;
   }
} 
alert(userInput);

//Hard 
let tomHeight = 9;
let tomMass = 8;

let jerryHeight = 10;
let jerryMass = 45;

let bmi;

function calcBmi (x,y) {
    bmi = x / (y * y)
    return bmi
}

let tomBmi = (calcBmi(tomMass,tomHeight));

let jerryBmi = (calcBmi(jerryMass,jerryHeight));

let booCheck = tomBmi > jerryBmi;

console.log(`Is Tom's BMI is higher than Jerry's BMI? ${booCheck}`);



