function sayHello() {
	alert("Its working.");
}

var friend = {
	firstName 	: "Evan",
	lastName	: "Reller",
	age			: 31
};

document.getElementById("demo").innerHTML = friend.firstName + " " + friend.lastName + friend.age;

document.getElementById("name").innerHTML = friend.firstName;
document.getElementById("age").innerHTML = friend.age;

var shows = {
	showName			: "30 Rock",
	episode				: 1,
	episodeDescription	: "Pilot episode"
}
document.getElementById("show").innerHTML = shows.showName;
document.getElementById("number").innerHTML = shows.episode;
document.getElementById("about").innerHTML = shows.episodeDescription;


var netflixShow = {
	//Properties
	showName		: "", 
	epNumber		: 1,
	epDescription 	: "",
	//Methods
	watchNow	: function(){
		alert("You are now loading " + this.showName + " " + this.epNumber);
	}
}

var drWho = Object.create(netflixShow);
drWho.showName = "Doctor Who";
drWho.epNumber = 1;
drWho.epDescription = "Plastic mannequins come alive." 

document.getElementById("show-name").innerHTML = drWho.showName;
document.getElementById("ep-number").innerHTML = drWho.epNumber;
document.getElementById("description").innerHTML = drWho.epDescription;



/**** More complex object literals *****/

var amazonPrimeShow = {
	//PROPERTIES
	showId			: 1,
	name 			: "Evan's Show",
	description 	: "Bestest, most awesome show in the world",
	seasonInfo		:{
		seasonNumber	: 1,
	
		//METHODS
		printDetails : function(){
			document.write(description);
		},
		
		episodes 	: [
			{episodeNumber: 1, episodeName: "Happy Stuff"},
			{episodeNumber: 2, episodeName: "Happy Story Times"},
			{episodeNumber: 3, episodeName: "All the Happy"}
		]
	},
};

document.write(amazonPrimeShow.seasonInfo.episodes[0].episodeName);

document.write(amazonPrimeShow.seasonInfo.episodes[2].episodeName);

	for (info in amazonPrimeShow.seasonInfo.episodes){
		document.write((parseInt(info) + 1) + " - " + amazonPrimeShow.seasonInfo.episodes[info].episodeName + "<br>");
	}
















