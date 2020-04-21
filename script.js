/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
job = 'Teacher';
console.log(job);

var _3years = 3;
**/

var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);

/* Basic operators */

var year, yearJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;

yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now / 10);

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);


var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);


x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);


var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);


var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}


var firstName = 'John';
var age = 16;

if (age < 13){
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager.');
} else if (age > 20 && age < 30) {
  console.log(firstName + ' is a young man.');
} else {
  console.log(firstName + ' is a man.');
}


var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

if (age >= 18) {
  var drink = 'beer';
} else {
  var drink = 'juice';
}

var job = 'teacher';
switch (job) {
  case 'teacher':
    console.log(firstName + ' teaches kids how to code.');
  case 'driver':
    console.log(firstName + ' drives an uber in Lisbon.');
  case 'designer':
    console.log(firstName + ' designs beautiful websites.');
    break;
  default:
    console.log(firstName + ' does something else.');
}


function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0){
    console.log(firstName + ' retires in ' + retirement + ' years.');
  } else {
    console.log(firstName + ' is already retired.');
  }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1968, 'Jane');