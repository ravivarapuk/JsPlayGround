// Single Line Comments

/****************************************
Multi Line Comments
*/


//  Variables and DataTypes

var firstName = 'Karthik';
console.log(firstName);

var lastName = 'Ravivarapu';
var age = 26;

var fullName = true;
console.log(fullName);

var job;
console.log(job);

job = 'Software Developer';
console.log(job);

var _3years = 3;


// Variable Mutation and Type Coercion

var job, isMarried;
job = 'Senior Software Engineer';
isMarried = false;

console.log(job + ' ' + isMarried);

alert(job + ' ' + isMarried);

var happyProgrammer = prompt('Are you a happy programmer?');
console.log(job + ' ' + isMarried + '. He is a ' + happyProgrammer + ' programmer');


// Basic Operators
/*
+, -, *, /
>, <, >=, <=, <>
typeof -> returns the type of the variable
*/

// Coding Challenge 1
var markWeight = prompt("Hey Mark! What is your weight (in Kg's): ");
var markHeight = prompt("Hey Mark! What is your height (in Mtr's): ");
var johnWeight = prompt("Hey John! What is your weight (in Kg's): ");
var johnHeight = prompt("Hey John! What is your height (in Mtr's): ");

var markBMI, johnBMI, checkBool;

markBMI = markWeight / (markHeight * markHeight);
johnBMI = johnWeight / (johnHeight * johnHeight);

checkBool = markBMI > johnBMI;

console.log("Is Mark's BMI higher than Jonh's? " + checkBool);


// Control Structures

// If - Else
var markWeight = prompt("Hey Mark! What is your weight (in Kg's): ");
var markHeight = prompt("Hey Mark! What is your height (in Mtr's): ");
var johnWeight = prompt("Hey John! What is your weight (in Kg's): ");
var johnHeight = prompt("Hey John! What is your height (in Mtr's): ");

var markBMI, johnBMI, checkBool;

markBMI = markWeight / (markHeight * markHeight);
johnBMI = johnWeight / (johnHeight * johnHeight);


if (markBMI > johnBMI) {
    console.log("Mark\'s BMI is higher than Jonh\'s");
} else {
    console.log("John\'s BMI is higher than Marks\'s");
}

// Ternary Operator

age >= 18 ? console.log(firstName + ' drinks beer.'): console.log(firstName + ' drinks juice.');
var drink =  age >= 18 ? 'beer' : 'juice';

// Switch statement

var location = 'Bengaluru';

switch(location) {
    case 'Lucknow':
        console.log('He moved to Lucknow!');
        break;
    case 'Hyderabad':
        console.log('He moved to Hyderabad!');
        break;
    case 'Melbourne':
        console.log('He moved to Melbourne!');
        break;
    case 'Delhi':
        console.log('He moved to Delhi!');
        break;
    default:
        console.log('He is still in Bengaluru!');
}


// Truthy and Falsy Values
// Falsy Values: undefined, null, 0, '', NaN
// Truthy values: Not falsy values

var height;

if (height) {
    console.log('Variable is defined!');
} else {
    console.log('Variable has NOT been defined!');
}

// == operator does type coercion while === operator is a stsict check


// Challenge 2
var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;

console.log(scoreMike, scoreJohn, scoreMary);

if (scoreJohn > scoreMike && scoreMike > scoreMary) {
    console.log('With an average score of ' + scoreJohn + ' John\'s team is the winner');
} else if (scoreMike > scoreJohn && scoreJohn > scoreMary) {
    console.log('With an average score of ' + scoreMike + ' Mike\'s team is the winner');
} else if (scoreMary > scoreMike && scoreMike > scoreJohn) {
    console.log('With an average score of ' + scoreMary + ' Mary\'s team is the winner');
} else if (scoreJohn === scoreMike && scoreMike == scoreMary && scoreJohn === scoreMary) {
    console.log('It is a tie between Mary\'s, John\'s and Mike\'s teams with the scores respectively' + scoreMary + ' ' + scoreJohn + ' ' + scoreMike);
} else {
    console.log('With an average score of ' + scoreMike + ' Mike\'s team is the winner');
}


// Function statements and expressions

// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab';
        case 'designer':
            return firstName + ' designs clothing line';
        default:
            return firstName + ' is a procarcinator';
    }
}
 

// Arrays

var names = ['Karthik', 'Ravivarapu', 'kr'];
var years = new Array(1993, 1995, 1997);

console.log(names[0]);
console.log(names);
console.log(names.length);

var john = ['John', 'Smith', 1990, 'teacher', false];
console.log(john)

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is Not a designer': 'John is a designer';
console.log(isDesigner);

// Challenge 3

function tipCalculator(billAmount) {
    var percentage;
    if (billAmount < 50) {
        percentage = .2;
    }
    else if (billAmount >= 50 && billAmount < 200) {
        percentage = .15;
    }
    else {
        percentage = .1;
    }
    return percentage*billAmount
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
var amountPaid = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];


var tipCalculator = function(billAmount) {
    tips = [];
    amount_paid = [];
    if (billAmount < 50) {
        tips.push((billAmount * (20/100)));
        amount_paid.push(billAmount+(billAmount * (20 / 100)));
    }
    else if (billAmount >= 50 && billAmount < 200) {
        tips.push((billAmount * (15 / 100)));
        amount_paid.push(billAmount + (billAmount * (15 / 100)));
    }
    else {
        tips.push((billAmount * (10 / 100)));
        amount_paid.push(billAmount + (billAmount * (10 / 100)));
    }

}


// Objects and Properties

var karthik = {
    firstName: 'Karthik',
    lastName: 'Ravivarapu',
    birthYear: 1994,
    family: ['Hemanth', 'Indira', 'Harsh', 'Bruno'],
    job: 'Software Engineer',
    isMarried: false
};

console.log(karthik);
console.log(karthik.firstName);
console.log(karthik['lastName']);
var x = 'brithYear';
console.log(karthik[x]);

// Properties are Mutable
karthik.job = 'Senior Software Engineer';
karthik['birthYear'] = 1995;

var ravivarapu = new Object();
ravivarapu.name = 'Karthik Ravivarapu';
ravivarapu.birthYear = 1995;
ravivarapu['birthPlace'] = 'Tenali';
console.log(ravivarapu);


// Objects and Methods

var karthik = {
    firstName: 'Karthik',
    lastName: 'Ravivarapu',
    birthYear: 1994,
    family: ['Hemanth', 'Indira', 'Harsh', 'Bruno'],
    job: 'Software Engineer', // a property is a value already defined inside the object
    isMarried: false,
    calcAge: function() { //a method is a function isnide a object
        return 2018 - this.birthYear;
    }
};

// Challenge 4

var johnObject = {
    fullName: 'John',
    mass: 92,
    height: 172,
    bmi: function() {
        return this.mass / (this.height * this.height)
    }
}

var markObject = {
    fullName: 'Mark',
    mass: 79,
    height: 185,
    bmi: function () {
        return this.mass / (this.height * this.height)
    }
}

if (markObject.bmi() > johnObject.bmi()) {
    console.log(markObject.fullName + '\'s BMI is: ' + markObject.bmi());
} else if (markObject.bmi() === johnObject.bmi()) {
    console.log(markObject.fullName + ' and ' + johnObject.fullName + ' have the same BMI respectively ' + markObject.bmi() + ' ' + johnObject.bmi());
} else {
    console.log(johnObject.fullName + '\'s BMI is: ' + johnObject.bmi())
}


//  Loops and Iterations

for (var i = 0; i < 10; i++) {
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// while loop
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}

// continue and break statemnets

var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = john.length-1; i >= 0; i--) {
    console.log(john[i]);
}

// Challenge 5

var john = {
    fullName: 'John Smith',
    bills: [124, 48,268,180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i]
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1; 
            }

            this.tips[i] = bill*percentage;
            this.finalValues[i] = bill + this.tips[i] 
        }
    }
}

john.calcTips();
console.log(john)