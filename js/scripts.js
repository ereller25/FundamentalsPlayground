//JS File

function add(x,y){
	console.log(x + y);
}

function stuff(a,b){
	console.log(a / b);
}

function hi(){
	console.log("Hello World");
}

//Arrays//
//count in an array: 0,1,2,3...//
var classmates = ["Evan", "Matt", "Tara", "Justin", "Danielle"];
//or//
var typesOfSoda = new Array();
typesOfSoda[0] = "Red Cream Soda";
typesOfSoda[1] = "IBC";

console.log(classmates);
console.log(typesOfSoda);

for (var i in classmates) {
  console.log(classmates[i]);
}
//OR// 
for(var i = 0; i < classmates.length; i++){
	console.log(classmates[i]);
}
//Can't mix Array types in other languages//
var mixedTypeArray = ["Elephant", 100, (5>2)];
var sameType = ["Elephant", "Dog", "Dog"];

//Challenge: 
	//BRONZE:
    //See if you can turn any of those loops above into functions that can be called. 
    //Call them in the console.
var carArray = ["Toyota", "Honda", "Ford", "Chevy", "BMW"];

function carList(){
	for(var i = 0; i< carArray.length; i++){
		console.log(carArray[i]);
		}
}

var favMovies = ["Empire", "Avengers", "Dark Knight", "Godfather"]

function listMovies(){
	for(var i=0; i< favMovies.length; i++){
		console.log(favMovies[i]);
	}
}

//SILVER: 
    //Create an array of about 10 random numbers. Find a way to check to see if a 
    //duplicate of that random 
    //Check to see if a value is in the array*****

var randomNumberArray = [57, 58, 92, 10, 11, 83, 20, 28];

var a = randomNumberArray.indexOf();





//GOLD: 
    //See if you can do the following to the abcArray:
      //  1. Add the rest of the alphabet without altering the array we've already created.
        //2. Turn the alphabet to a string and take out those commmas/spaces.
        //3. Print the alphabet in reverse order.
        //4. See if you can do all of that and execute it in one word.














//*************DO NOT GO ABOVE THIS LINE RIGHT NOW*****************//
//*************DO NOT GO ABOVE THIS LINE RIGHT NOW*****************//

//****OBJECTS****//

//Object Literal
var friend = {
	//properties	
	fullname		: "",
	age 			: 0,
	married			: true,
	vocation		: "",
	closeLikeABro	: true,
	yearsKnown		: 0,
	kids			: true,
	//Method
	printVocation	: function(){
		return this.vocation; 
	},
	introduceToSisterInLaw : function(){
		if(this.yearsKnown >= 5 && this.closeLikeABro == true && this.married == false){
			return "I want you to meet my friend.";
		}else{
			return "Have you tried Tinder?"
		}
	},
	bestMan : function(){
		if(this.yearsKnown >= 18 && this.closeLikeABro == true){
			return "Best Man";
		}else{
			return "Wedding party"
		}
	},
	hasKids : function(){
		if(this.kids ==true){
			return "Did you get any sleep?"
		}else{
			return "What do you do with your extra income?"
		}
	},
	canHangout : function(){
		if(this.yearsKnown >= 10 && this.closeLikeABro == true && this.married == false && this.kids == false){
			return "Hell yeah";
		}else{
			return "Maybe"
		}
	}
}

var mikeHahn = Object.create(friend);
mikeHahn.fullname = "Mike Hahn";
mikeHahn.age = 31;
mikeHahn.married = false;
mikeHahn.vocation = "Security";
mikeHahn.closeLikeABro = true;
mikeHahn.yearsKnown = 21;
mikeHahn.kids = true;

var mikeStinnette = Object.create(friend);
mikeStinnette.fullname = "Mike Stinnette";
mikeStinnette.age = 31;
mikeStinnette.married = true;
mikeStinnette.vocation = "Homemaker"
mikeStinnette.closeLikeABro = true;
mikeStinnette.yearsKnown = 17;
mikeStinnette.kids = true;

var chrisMoberg = Object.create(friend);
chrisMoberg.fullname = "Chris Moberg";
chrisMoberg.age = 31;
chrisMoberg.married = false;
chrisMoberg.vocation = "Installer"
chrisMoberg.closeLikeABro = true;
chrisMoberg.yearsKnown = 16;
chrisMoberg.kids = false;































