// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");
const router = require('express').Router();
const db = require("../models");
var express = require('express');

// Routes
// =============================================================


// Each of the below routes just handles the HTML page that the user gets sent to.
router.get("/", function (req, res) {
  res.render('recipes');
});
router.get("/cms", function (req, res) {
  res.render('cms');
});



module.exports = router;