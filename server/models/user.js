const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create user Schema and model
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    jobRole: {
        type: String,
        required: [true, 'Job role field is required']
    },
    permanentAddress: {
        type: String
        
    },
    mobileNo:{
        type: Number,
        required: [true, 'Mobile No field is required']
    },
    currentAddress:{
        type: String
    }


});

const User = mongoose.model('user',UserSchema);

module.exports = User;