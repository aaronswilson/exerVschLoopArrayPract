// #1 Loop through the following array and count how many "computers" there are. Log the final count: 4

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]

var count = 0
for( var i = 0 ; i < officeItems.length ; i++ ) {
    if( officeItems[i] === "computer" ) {
        count++;
    }
}
console.log(count)


// #2 Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
] 

var count = 0
for( var i = 0 ; i < peopleWhoWantToSeeMadMaxFuryRoad.length ; i++ ) {
    if( peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ) {
        var genderpronoun = "him"
    }
    else {
        var genderpronoun = "her"
    }
    if( peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 ) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max. Please let " + genderpronoun + " in.")
    }
    else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max. Don't let " + genderpronoun + " in!")
    }
}


// Optional Bonus challenge
// Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number. The array [2, 3, 2] would toggle the button 7 times.
// The light is off to start with. Log to the console whether or not the light is on at the end.

// Sample Arrays:
// [2, 5, 435, 4, 3] // "The light is on"
// [1, 1, 1, 1, 3]   // "The light is on"
// [9, 3, 4, 2]      // "The light is off"

var light = false;

var array = [ 2 , 5 , 435 , 4 , 3 ];

for( var i = 0; i < array.length; i++ ) {
    for( var j = 0; j < array[i]; j++ ) {
        light = !light;
    }
}
if( light === true ) {
    console.log("The light is on!");
} else {
    console.log("The light is off!");
}

// ANOTHER METHOD

var sum = 0

for ( var i = 0; i < array.length ; i++ ) {
    sum = sum + array[i];
}
sum % 2 === 0 ? console.log ( "The light is off!" ) : console.log( "The light is on!" )