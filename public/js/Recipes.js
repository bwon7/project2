$(document).ready(function() {
    // Getting references to the name ,recName, ingredients, and instructions
    var name = $("#contributor");
    var recipeName = $("#recipe");
    var instructions = $("#instructions");
    var ingredients = $("#ingredients");
    // Adding event listeners to the form to create a new object
    
  
    $("#buttonF").on("click", function(event){
      event.preventDefault();
      if (!name.val().trim().trim() || !recipeName.val().trim().trim() || !instructions.val().trim().trim() || !ingredients.val().trim().trim()) {
        alert("Fill out ALL of the boxes");
      }
      else {
      var newRecipe = {
        name: name.val().trim(),
        recipeName: recipeName.val().trim(),
        instructions: instructions.val().trim(),
        ingredients: ingredients.val().trim()
      };

      console.log(newRecipe);
      
      $.post("/api/recipes", newRecipe);
      }
    });
})
   