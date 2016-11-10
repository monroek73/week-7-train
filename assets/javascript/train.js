 // Initialize Firebase

var config = {
    apiKey: "AIzaSyBb8qB4GMIc78BcdFrNGTHZRClIfiz_uKA",
    authDomain: "train-project-c4502.firebaseapp.com",
    databaseURL: "https://train-project-c4502.firebaseio.com",
    storageBucket: "train-project-c4502.appspot.com",
    messagingSenderId: "732543658967"
  };
  firebase.initializeApp(config);

var database = firebase.database();

//Create a variable to reference the database.

//Initial Values
var trainName ="";
var destination ="";
var frequency ="";
var nextArrival="";
var minutesAway="";

//Capture clik button
$("#addTrain").on("click", function()

// Grabbed values from text-boxes
{
	trainName = $('#trainName').val().trim(),
	destination= $('#destination').val().trim(),
	frequency= $('#frequency').val().trim(),
	nextArrival = $('#nextArrival').val().trim(),
	minutesAway = $('#minutesAway').val().trim(),
 
     // //Code for setting the push
     // database.ref().push(newTrain);
   	 // console.log(newTrain.trainName),
   	 // console.log(newTrain.destination),
   	 // console.log(newTrain.frequency),
   	 // console.log(newTrain.nextArrival)

//Clearing out data
   	$('#trainName').val("");
   	$('#destination').val("");
   	$('#frequency').val("");
    $('#nextArrival').val("");
   	$('#minutesAway').val(""); 	 

//pushing the data to the root of the datapush
 database.ref().push({
	 trainName: trainName,
	 destination: destination,
     frequency: frequency,
	 nextArrival: nextArrival,
	 minutesAway: minutesAway,
	 dataAdded: firebase.database.ServerValue.TIMESTAMP
 })

// Refresh the page
	return false;
});

//Firebase watcher + initial loader

database.ref().on("child_added", function(Snapshot)
{
	//console log
	console.log(Snapshot.val());
	console.log(Snapshot.val());
	console.log(Snapshot.val().trainName);
	console.log(Snapshot.val().destination);
	// console.log(Snapshot.val().frequency);
	// console.log(childSnapshot.val().nextArrival);
	// console.log(childSnapshot.val().minutesAway);

$("#trainName").html(Snapshot.val().trainName);
$("#destination").html(Snapshot.val().destination);
$("#frequency").html("15 minutes");
$("#nextArrival").html("15 minutes");
$("#minutesAway").html("15 minutes");

// full list of items to the well
$('#TrainTable tbody').append("<tr><td>"
	+Snapshot.val().trainName+" </td><td>"
	+Snapshot.val().destination+" </td><td>"
	+Snapshot.val().frequency+"</td><td>"
	+Snapshot.val().nextArrival+"</td><td>"
	+Snapshot.val().minutesAway+
	"</td></tr>")
},

//Handle errors
function(errorObject){
	console.log("Errors handled: " + errorObject.code)
});

// database.ref().on("child.snapshot", function(Snapshot)
// {
// 	//console log
// 	console.log(child.Snapshot.val());
// 	console.log(child.Snapshot.val().trainName);
// 	console.log(child.Snapshot.val().destination);
// 	// console.log(Snapshot.val().frequency);
// 	// console.log(childSnapshot.val().nextArrival);
// 	// console.log(childSnapshot.val().minutesAway);

// //Change the HTML to reflect
// $("#trainName").html(child.Snapshot.val().trainName);
// $("#destination").html(child.Snapshot.val().destination);
// $("#frequency").html("15 minutes");
// $("#nextArrival").html("15 minutes");
// $("#minutesAway").html("15 minutes")

dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(){
// Change the HTML to reflect
$("#trainName").html(snapshop.val().trainName);
$("#destination").html(snapshop.val().destination);
$("frequency").html(snapshop.val().frequency);
$("nextArrival").html(snapshop.val().nextArrival);
$("minutesAway").html(snapshop.val().minutesAway);
});
