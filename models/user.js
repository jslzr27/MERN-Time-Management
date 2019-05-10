const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    Email: {type: String, required: true},
    password: {type: String, required: true},
    Activities: {type: String, ref: 'Activity', required: true}
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null
    )};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password
    )}; 

const User = mongoose.model("User", userSchema);

module.exports = User;