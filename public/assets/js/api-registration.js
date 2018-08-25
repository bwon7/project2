var api_key = "dzIyydCkWBnuxyHLXLaLpGlAGCPJFQ5cE30CHoxd";
var queryURL = "https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=" + api_key + "&location=Denver+CO";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});
//BioOben API
//function getRecipeJson() {
//    var apiKey = "your-api-key-here";
//    var RecipeID = 196149;
//    var url = "http://api2.bigoven.com/recipe/" + RecipeID + "?api_key=" + apiKey;
//   $.ajax({
//        type: "GET",
//        dataType: 'json',
//        cache: false,
//        url: url,
//        success: function (data) {
//            alert('success');
//            console.log(data);
//        }
//    });
//}
var e_apikey = "ae69f336f33aa08a37125b9eb71fc22a	—";
var appID = "a5c2415c";
var query = "https://api.edamam.com/search?q=chicken&app_id=${" +appID+"}&app_key=${"+e_apikey+"}&from=0&to=3&calories=591-722&health=alcohol-free";
$.ajax({
    url: query,
    method: "GET",

}).then(function(response){
    console.log(response);
});