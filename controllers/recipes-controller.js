var db = require("../models");
var express = require('express');
var router = express.Router();


router.get("/api/recipes", function (req, res) {
  db.Recipes.findAll({}).then(function(dbRecipes) {
    res.json(dbRecipes);
  });
});


router.post("/api/recipes", function (req, res) {
  // Create an Recipe with the data available to us in req.body
  console.log(req.body);
  db.Recipes.create({
    name: req.body.name,
    recipeName: req.body.recipeName,
    instructions: req.body.instructions,
    ingredients: req.body.ingredients,
  })
  .then(function (dbRecipes) {
    res.json(dbRecipes);
  });
});

router.get("/api/recipes/:recipeName", function(req, res){
  db.Recipes.findAll({
    where: {
      recipeName: req.params.recipeName
    }
  })
  .then(function(dbRecipes) {
    res.json(dbRecipes);
  });
});



module.exports = router;

/* router.get("/api/recipes/:id", function (req, res) {
  // Find one Recipe with the id in req.params.id and return them to the user with res.json
  db.Cook_Ease.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbRecipes) {
    res.json(dbRecipes);
  });
});
 */