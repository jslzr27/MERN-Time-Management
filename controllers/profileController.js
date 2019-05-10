const db = require("../models");

module.exports = {
 findbyId: function(req, res){
     db.Profile.findbyId(req.params.id)
     .then (dbProfile => res.json(dbProfile))
     .catch(err => res.status(422).json(err));
    } ,
    
}