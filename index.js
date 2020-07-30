'use strict';

function getDogImage(userInput) {
    
    fetch(`https://dog.ceo/api/breed/${userInput}/images/random`)  
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong, we are working on a solution.'));
    
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImage($("#userInput").val());
        
        
    });
}

function displayResults(responseJson) {
    $("#dogImage").empty();
    if (responseJson.status === "error") {
        alert("Breed not found");
    } else {

       
       
           
           $("#dogImage").append(`<img src=${responseJson.message}>`);
          
           console.log(responseJson);
       
    
        $('.results').removeClass('.hidden');
    }

}








$(document).ready(function() {
    console.log('App loaded! Waiting for submit');
    watchForm();
});