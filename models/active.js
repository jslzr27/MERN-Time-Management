 const mongoose = require("mongoose");
 const Schema = mongoose.Schema;

 const activitySchema = new Schema({
     tasks: {type: String, required: true},
     timer: {type: Number, required: false},
    
 });

 const Activity = mongoose.model("Activity", activitySchema);

 module.exports = Activity;