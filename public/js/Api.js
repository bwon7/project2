$("#buttonS").click(function(){
    $("#derp").empty();
    var search = $("#searchS").val();
    var app_id = "a5c2415c";
    var api_key = "ae69f336f33aa08a37125b9eb71fc22a";
    var q = search
    var queryURL = "https://api.edamam.com/search?q="+ q+"&app_id="+ app_id + '&app_key=' + api_key + "&from=0&to=5";
    $.ajax({
        url: queryURL,
        method: "GET"
    }). then(function(response){

        var array = response.hits
    
        for (var i = 0; i < array.length; i++){

            var cookDiv = $("<div class ='cook'>");

            var imageTitle = $("<div class ='imageTitle'>");

            var imageFood = $("<img>");

            imageFood.attr("src", array[i].recipe.image);

            var points = array[i].recipe.ingredientLines; 

            var recipe = $("<div class ='recipe'>");

            for (var j = 0; j < points.length; j++){

                var instructions = $("<li>").text(points[j]);
                recipe.append(instructions);
        
            };

        
            var label = $("<h4>").text(array[i].recipe.label)

            recipe.prepend("<h5>Ingredients</h5>")
            imageTitle.prepend(label);
            imageTitle.append(imageFood);
            cookDiv.append(imageTitle);
            cookDiv.append(recipe);
            
            
            
            $("#derp").prepend(cookDiv);
            console.log(array[i].recipe);
        };
        $("#inputS").text(search);
        
        
    });
 
});


$("#buttonSF").click(function(){
    $("#derps").empty();
    var recipeName= $("#searchF").val().trim();
    $("#inputF").text(recipeName);

    $.get("/api/recipes/" + recipeName, function(data) {
        
        for (i = 0; i < data.length; i++) {
        console.log(data[i].name);
        var recipeDiv = $("<div class= 'recipe'>");
        var recipeTop = $("<div class= 'recipeT'>");

        var contN = $("<h4>Contributor: "+ data[i].name +"</h4>");
        var recipeN = $("<h4> "+ data[i].recipeName+ " </h4>");                                           
        
        var recipeIns = $("<p>").text(data[i].instructions);
        var recipeIn = $("<p>").text(data[i].ingredients);

        recipeTop.append(contN);
        recipeTop.append(recipeN);
        recipeDiv.prepend(recipeTop);
        recipeDiv.append(recipeIn);
        recipeDiv.append(recipeIns);
        $("#derps").prepend(recipeDiv);

        }
    });

});
 

