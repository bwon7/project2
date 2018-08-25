var api_key = "dzIyydCkWBnuxyHLXLaLpGlAGCPJFQ5cE30CHoxd";
var queryURL = "https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=" + api_key + "&location=Denver+CO";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});

$.ajax({ url: "http://localhost:3000/api/recipe/pineapple", method: "get" }).done(function (response) {
    $('.console').html(JSON.stringify(response));
}).fail(function (error) {
    console.log(error);
    $('.console').html("<h1>Ooops! Something went wrong, check the console!</h1>");
});