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
            .then(function (data) {
                var hbsObject = {
                    burger: data
                };
                console.log(data);
                res.render("index", hbsObject);
            });
    });

    //route to insert a new burger...this route is working
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
        // var condition = "id = " + req.params.id;
        db.burger.update(req.body, {
                where: {
                    id: req.body.id
                }
            })
            .then(function (burgerdata) {
                res.json(burgerdata);
            });
    });

    app.delete("/api/burgers/:id", function (req, res) {
        // var condition = "id = " + req.params.id;
        db.burger.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function (burgerdata) {
                res.json(burgerdata);
            });
    });

};