var db = require("../models");
var express = require('express');
var router = express.Router();


router.get("/api/recipes/:id", function (req, res) {
  // Find one Recipe with the id in req.params.id and return them to the user with res.json
  db.Recipes.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbRecipes) {
    res.json(dbRecipes);
  });
});

router.post("/api/recipes", function (req, res) {
  // Create an Recipe with the data available to us in req.body
  console.log(req.body);
  db.Recipes.create(req.body).then(function (dbRecipes) {
    res.json(dbRecipes);
  });
});

module.exports = router;