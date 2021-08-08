//click for hint
function hintone(){
    document.getElementById("hintone").innerHTML = 'Hint: fresh eggs sink and lie horizontally at the bottom.';
}

function hinttwo(){
    document.getElementById("hinttwo").innerHTML = 'Hint: the flavor mainly comes from this ingredient. ';
}



//after clicking 'submit', show result
// Grab the form element from HTML
var form = document.querySelector("form");

// Grab the pre element from HTML
var log = document.querySelector("#log");
//var logtwo = document.querySelector("#logtwo");


// Wait for the user to click Submit
form.addEventListener("submit", function(event) {

  // Retrieve the data from the form
  var data = new FormData(form);
  
  // Create a string to store the data
  var output = "";
  
  // Loop through the data and collect the value of 
  // the name tag and the value that the user selected
  for (const entry of data) {
      output = output + entry[0] + ": " + entry[1] + "\r";
  };
      
// print out the result
  log.innerText = output;  
  event.preventDefault();
}, false);




