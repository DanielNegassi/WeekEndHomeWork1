// weekend-js-1

// Conceptual Questions

// 1.How do we asign a value to a variable?
// Use a LET statement.
// Use a SELECT INTO statement.
// Use a CALL statement with a procedure that has a RETURNING clause.
// Use an EXECUTE PROCEDURE INTO or EXECUTE FUNCTION INTO statement.

// 2.How do we change the value of a variable?
   



// 3.How do we assign an existing variable to a new variable?


// Strings

// 1. Create a variable called firstVariable.

//  var firstVariable = "Hello World"
//  let firstVariable = 12345678
//  var secondVariable = firstVariable
//  let var secondVariable = '123445678'

// 2.Create a variable called yourName and set it equal to your name as a string.

// var yourName = 'Daniel Negassi';
// console.log('Hello, my name is ' + yourName);

// Booleans

// 1. 
// Using the provided variable definitions, replace the blanks with a mathematical or boolean operator that evaluates the expression to true. 👋
//   const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

// a !== b;
// c !== d;
// 'Name'=='Name';
// a != b != c;
// a == a != d;
// e != 'Kevin';
// 48 =='48';


// The Farm

// var animal = (y) => {
// if( y == 'cow') {
// 	console.log('mooo');
// } else {
// 	console.log("Hey! You're not a cow.");
// }
// };
// animal('cow');
// animal('cat');

// // Driver's Ed

// const driversEd = (age) => {
// if (age >= 16) {
//   console.log("Here are your keys.");
// } else {
//   console.log("Sorry you're too young.");
// }
// };
// driversEd(16);
// driversEd(12);


// //Just Loop It

// 1.
// for (let i = 0; i <= 10; i++) {
// 	console.log(i)
// };


// 2.
// for (let i = 10; i <= 4000; i++) {
// 	console.log(i);
// };

// 3.
// for (let i = 10; i <= 4000 ; i+=2) {
// 	console.log(i);
// }

// Let's get even

// for ( let i = 0; i <= 10; i++)
// 	if ((i % 2) === 0){
// 	 console.log(i + ' is an even number');
// }

// Give me Five

// for ( let i = 0; i <= 100; i++)
// 	if ((i % 5) === 0){
// 	 console.log('I found a ' + i + '. Highfive!');
// } else {
// 	if ((i % 3) === 0){
// 	 console.log('I found a ' + i + '. Three is a crowd');
// };
// }

// Savings account

// 1.
// const bank_acount = (dollars) =>{
// 	var s = 0;
// 	for(i = 1; i <= dollars; i++){
// 		s+=i;
// 	}
// 	console.log(s);
// }
// bank_acount(10);

// 2.
// const bank_acount = (dollars) =>{
// 	var s = 0;
// 	for(i = 1; i <= dollars; i++){
// 		s+=i*2;
// 	}
// 	console.log(s);
// }
// bank_acount(100);


//Multiples of 3 and 5

// const sum = (num) =>{
// 	var s = 0;
// 	for(i=0; i <= num; i++)
// 		if ((i%3) === 0 || (i%5) === 0) {
// 			s+=i;
// 		}
// 		console.log(s);
// }
// sum(1000);


//Easy Does It

//1.
//var quotes =['easy', 'does', 'it']

//Random
// const randomThings = [1, 10, "Hello", true]

// 1.
// randomThings[0];

// 2.
// randomThings[2] = "World";

// 3.
// console.log(randomThings);


//We've Got Class

// const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]

// 1. ourClass[2]

// 2. ourClass[2] = "Octocat";

// 3. ourClass.push("Cloud City");

 
// Mix It Up
//const myArray = [5 ,10 ,500, 20]

// 5. 
// myArray.push("Egon");
// 6.
// myArray.pop();
// 7.
// myArray.unshift("Bob Marley");
// 8.
// myArray.shift();

 // 9.
 // myArray.reverse();

//Biggie Smalls

// 1.
// const biggie = (z) => {
//     if (z <=100) {
// 	console.log('little number');}
// 	else{
// 		console.log('big number');
// 	}
//   } 
// biggie(1000);

//Monkey in the Middle

//1.

  // const biggie = (number) => {
  //   if ( number < 5) { 
  //    	console.log('little number'); 
  //    }
  //     else if 
  //      ( number > 10) { 
  //      console.log('big number');
  //    } 
  //     else { 
  //     	console.log("monkey");
  //    }
  // };
  // biggie(7);

 // What's in Your Closet?

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// 1.
// console.log( "kristyn is rocking that " + kristynsCloset[2] + " today!")

// 2.
// let kritynShoe = kristynsCloset.shift()

// 3.

// 4.
// kristynsCloset[5]= "stained knit hat"
// 5. 

// 8. 
// const thomsCloset = [
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
// console.log("Thom is looking fierce in grey  " + thomsCloset[1,1] +" ,"+ thomsCloset[2,2]+" and"+ thomsCloset[3,2]+ " !" ");

// calculate

// const calculate = (num1, num2, operation) => {
// switch(operation) {
// 	 case 'add': return (num1 + num2);
// 	 break;
// 	 case 'sub': return (num1 - num2);
// 	 break;
// 	 case 'mult': return (num1 * num2);
// 	 break;
// 	 case 'div': return (num1 / num2);
// 	 break;
// 	 case 'exp': return (num1 ^ num2);
// 	}
// }
// console.log(calculate(5, 7, 'mult'))

// 1.
// const printcool = (name) => {
//    console.log(name+ " is cool")
// };
// printcool("captain Reynolds");

// 2.
// const calculateCube = (length) => {
// 	return ((length*length*length))
// };
// console.log(calculateCube(5));

// 3.
// const isAvowel = (x) => {
// 	var x = x.toLowerCase();
//     if ( x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u') {
// 		console.log("a" == "a");
//     } else{
//     	console.log("1" === "a");
//     }
// };
// isAvowel("A");

// 4.
// getTwolengths = (string1, string2) => {
// 	var x = string1.length;
// 	var y = string2.length;
// 	console.log([x +" ,"+ y]);
// }
// getTwolengths("Hank", "Hippopopalous");

// 5.
// getMultipleLengths = ([strings]) => {
// 	for(i = 0; i < strings.length; i++)
// 	var x = strings[i].length;
//     console.log(x);
// }
// getMultipleLengths(["hello", "what", "is", "up", "dude"]);

// 6.
// const maxOfThree = ( a, b, c) => {
//     if ((a >= b) && (a >= c)) { 
//         return a;
//     } else if ((b >= a) && (b >= c)) {
//         return b;
//     } else {
//         return c;
//     }
// } 
// console.log(maxOfThree(6, 9, 1));

7.
8.

//syntax

// a. const -> declares the object as a constant.
//    object name -> describes object name.
//     = -> assigns object value.
//     curly brace -> curly braces define the object.
//     property name -> assigns property name
//     : -> separation
//     "" -> holds value
//     , -> separates between different properties.
//     curly brace -> curly braces define the object.


//Me
// const me = {
//  	name: 'daniel',
//  	age: 27,
//  	email:'dyn29@hotmail.com',
//     };

// 3. 
//  console.log(me.name);

// 4.
// me.age(1000);

// // 5.
//    console.log(me.age);

// Slimer
//    name: "Slimer",
//    color: "greenish",
//    type: "plasm or ghost or something"
// }
// 1. 
// console.log(monster.name);
// 2.
// monster.type = "creature";
// 3.
// monster.age ="6";
// 4.
// console.log(monster);

// //Ogres
// const adventurer = {
// name: 'supermario',
// startPoints: 100,
// attack() {
//   return ogre.startPoints -= 10;
// },
// };

// const ogre = {
//  name: 'dragon',
//  startPoints: 100,
// attack() {
//   return adventurer.startPoints -= 5;
// }
// };

// for (let i = 0; adventurer.startPoints >= 0 && ogre.startPoints >= 0; i++) {
//  adventurer.attack();
//  ogre.attack();
// } 

//  if (adventurer.startPoints == 0) {
//     console.log("Ogre wins. OH NO, the humanity!");
//  } else {
//    console.log("Adventurer wins, the person has been saved.");
//  };

// console.log(adventurer);
// console.log(ogre);





























 







	

 














