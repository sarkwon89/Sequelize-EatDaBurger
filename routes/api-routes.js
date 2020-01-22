// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our db model
var db = require("../models");

// Routes
// =============================================================


module.exports = function (app) {

    // Create all our routes and set up logic within those routes where required.
    app.get("/", function (req, res) {
        db.burger.findAll({})
            .then(function (burgerdata) {
                res.json(burgerdata);
            });
    });

    app.post("/api/burgers", function (req, res) {
        console.log(req.body)
        db.burger.create({
                burger_name: req.body.burger_name,
                devoured: req.body.devoured
            })
            .then(function (burgerdata) {
                res.json(burgerdata);
            });
    });

    app.put("/api/burgers/:id", function (req, res) {
        var condition = "id = " + req.params.id;




    });

    app.delete("/api/burgers/:id", function (req, res) {
        var condition = "id = " + req.params.id;


    });


};