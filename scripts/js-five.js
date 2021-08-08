//after clicking 'submit', show result
// Grab the form element from HTML
var form = document.querySelector("form");

// Grab the pre element from HTML
var logone = document.querySelector("#logone");
var logtwo = document.querySelector("#logtwo");
var logthree = document.querySelector("#logthree");
//var logtwo = document.querySelector("#logtwo");


// Create an array to store the value of each result
  let answers = new Array();


// Wait for the user to click Submit
form.addEventListener("submit", function(event) {

  // Retrieve the data from the form
  var data = new FormData(form);
    
  let i=0;
  
  // Loop through the data and collect the value of 
  // the name tag and the value that the user selected
  for (const entry of data) {
      answers[i]=entry[1];
      i++;
  };
      
// print out the result
  logone.innerText = answers[0];  
  logtwo.innerText = answers[1]; 
  logthree.innerText = answers[2]; 
  event.preventDefault();
    
    
//show the number of correct questions at the top of the page
//variables that store the number of right/wrong questions 
var rightnum = 0;
var wrongnum = 0; 
    

for (let j=0; j<3; j++){
        if (answers[j]=='Correct!'){
            rightnum++;
        } else{
            wrongnum++;
        } 
}    
    

//final report statement
var report = '';
    
if (rightnum == 3){
    report = 'Congratulations! You got all 3 questions right!';
} else if (rightnum == 2){
    report = 'Good job! You got 2 questions right!';
} else if (rightnum == 1){
    report = 'Not bad! You got 1 question right.';
} else{
    report = 'What a pity, You got 0 point. Check the answers below!';
}
    
    
document.getElementById("testresult").innerHTML = report;
document.getElementById("intro").innerHTML = '';    
    
    
}, false);

