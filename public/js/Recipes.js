$(document).ready(function() {
    // Getting references to the name ,recName, ingredients, and instructions
    var name = $("#contributor");
    var recipeName = $("#recipe");
    var instructions = $("#ingredients");
    var ingredients = $("#instructions");
    // Adding event listeners to the form to create a new object, and the button to delete
    // an Author
    $(document).on("submit", "#buttonF", handleFormSubmit);
  
    // Getting the intiial list of Recipes
    getRecipes();
  
    // A function to handle what happens when the form is submitted to create a new Recipe
    function handleFormSubmit(event) {
      event.preventDefault();
      // Don't do anything if the name fields hasn't been filled out
      if (!name.val().trim().trim() && !recipeName.val().trim().trim() && !instructions.val().trim().trim() && !ingredients.val().trim().trim() ) {
        return;
      }
      // Calling the upsertAuthor function and passing in the value of the name input
      upsertRecipe({
        name: name.val().trim(),
        recipeName: recipeName.val().trim(),
        instructions: instructions.val().trim(),
        ingredients: ingredients.val().trim()
      });
    }
  
    // A function for creating an author. Calls getAuthors upon completion
    function upsertRecipe(recipeData) {
      $.post("/api/recipes", recipeData)
        .then(getRecipes);
    }
  
    // Function for creating a new list row for authors
    function createRecipeRow(recipeData) {
      console.log(recipeData);
      var newTr = $("<tr>");
      newTr.data("recipe", recipeData);
      newTr.append("<td>" + recipeData + "</td>");
    
      return newTr;
    }
  
    // Function for retrieving authors and getting them ready to be rendered to the page
    function getRecipes() {
      $.get("/api/recipes", function(data) {
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
          rowsToAdd.push(createRecipeRow(data[i]));
        }
        renderRecipeList(rowsToAdd);
        nameInput.val("");
      });
    }
  
    // A function for rendering the list of authors to the page
    function renderRecipeList(rows) {
      recipeList.children().not(":last").remove();
      recipeContainer.children(".alert").remove();
      if (rows.length) {
        console.log(rows);
        recipeList.prepend(rows);
      }
      else {
        renderEmpty();
      }
    }
  
});