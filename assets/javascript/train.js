 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBb8qB4GMIc78BcdFrNGTHZRClIfiz_uKA",
    authDomain: "train-project-c4502.firebaseapp.com",
    databaseURL: "https://train-project-c4502.firebaseio.com",
    storageBucket: "train-project-c4502.appspot.com",
    messagingSenderId: "732543658967"
  };
  firebase.initializeApp(config);

//Create a variable to reference the database.

var database = firebase.database();

//Initial Values
var trainName ="";
var destination ="";
var frequency ="";
var nextArrival="";
var minutesAway="";

//Capture clik button
$("#addTrain").on("click", function()
{
//Grabbed values from tex-boxes
	trainName = $('#trainName').val().trim();
	destination= $('#destination').val().trim();
	frequency= $('#frequency').val().trim();
	nextArrival = $('#nextArrival').val().trim();
	minutesAway = $('#minutesAway').val().trim();

	//Code for setting values in the database
	// database.ref().set({
	// 	trainName: trainName,
	// 	destination: destination,
	// 	frequency: frequency,
	// 	nextArrival: nextArrival,
	// 	minutesAway: minutesAway
// });	

    //Code for setting the push
   	database.ref().push({
		trainName: trainName,
		destination: destination,
		frequency: frequency,
		nextArrival: nextArrival,
		minutesAway: minutesAway
    });

// Clear all of the text-boxes
   	$('#trainName').val("");
   	$('#destination').val("");
   	$('#frequency').val("");
   	$('#nextArrival').val("");
   	$('#minutesAway').val("");
     
// Refresh the page
	return false;
});

//Firebase watcher + initial loader

database.ref().on("child_added", function(childSnapshot)
{
	//console log
	console.log(childSnapshot.val());
	console.log(childSnapshot.val().trainName);
	console.log(childSnapshot.val().destination);
	console.log(childSnapshot.val().frequency);
	console.log(childSnapshot.val().nextArrival);
	console.log(childSnapshot.val().minutesAway);

//Change the HTML to reflect
$("#trainName").html(childSnapshot.val().trainName);
$("#destination").html(childSnapshot.val().destination);
$("#frequency").html(childSnapshot.val().frequency);
$("#nextArrival").html(childSnapshot.val().nextArrival);
$("#minutesAway").html(childSnapshot.val().minutesAway);

//Handle errors
},
    function(errorObject){
	console.log("Errors handled: " + errorObject.code)

});

database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(){
 $("#trainName").html(snapshot.val().trainName);
 $("#destination").html(snapshot.val().destination);
 $("#frequency").html(snapshot.val().frequency);
 $("#nextArrival").html(snapshot.val().nextArrival);
 $("#minutesAway").html(snapshot.val().minutesAway);
 });