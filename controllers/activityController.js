const db = require("../models");

module.exports = {
    findAll: function(req, res){
        db.Activity.find(req.query)
        .then(dbActivity => res.join(dbActivity))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res){
        db.Activity.findById(req.params.id)
        .then(dbActivity => res.json(dbActivity))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res){
        db.Activity.create(req.body)
        .then(dbActivity => res.json(dbActivity))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res){
        db.Activity.findOneAndUpdate({id: req.params.id}, req.body)
        .then(dbActivity => res.json(dbActivity))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res){
        db.Activity.findById(req.params.id)
        .then(dbActivity => dbActivity.remove())
        .then(dbActivity => res.json(dbActivity))
        .catch(err => res.status(422).json(err));
    },
}