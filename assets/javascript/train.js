

//Initialize Firebase//


<script src="https://www.gstatic.com/firebasejs/3.5.3/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBb8qB4GMIc78BcdFrNGTHZRClIfiz_uKA",
    authDomain: "train-project-c4502.firebaseapp.com",
    databaseURL: "https://train-project-c4502.firebaseio.com",
    storageBucket: "train-project-c4502.appspot.com",
    messagingSenderId: "732543658967"
  };
  firebase.initializeApp(config);
</script>

//Create a variable to reference the database.

var database = firebase.database();

//Initial Values

var trainName ="";
var destination ="";
var frequency ="";
var nextArrival="";
var minutesAway="";

//Capture clik button
$("#addTrain").on("click", function(){
	trainName = $('#trainName').val().trim();
	destination= $('#destination').val().trim();
	frequency= $('#frequency').val().trim();
	nextArrival = $('#nextArrival').val().trim();
	minutesAway = $('#minutesAway').val().trim();

	//Code for setting values in the database

	database.ref().set({
		trainName: trainName,
		destination: destination,
		frequency: frequency,
		nextArrival: nextArrival,
		minutesAway: minutesAway,
	})
	// Don't refresh the page
	return false;
});

//Firebase watcher + initial loader

database.ref().on("value", function(snapshot)
	//console log
	console.log(snapshot.val());
	console.log(snapshot.value().trainName);
	console.log(snapshot.value().destination);
	console.log(snapshot.value().frequency);
	console.log(snapshot.value().nextArrival);
	console.log(snapshot.value().minutesAway);

//Change the HTML to reflect
$("#trainName").html(snapshot.val().trainName);
$("#destination").html(snapshot.val().destination);
$("#frequency").html(snapshot.val().frequency);
$("#nextArrival").html(snapshot.val().nextArrival);
$("#minutesAway").html(snapshot.val().minutesAway);

//Handle errors
},(errorObject){
	console.log("Errors handled: " + errorObject.code)
})
}