const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;



/*
Schema for User Model
*/

ClientSchema = new Schema({
    client: {	//User's legal first name
        type: String,
        required: true,
        lowercase: true,
    },
    password: {
        type:String,
        required:true,
        minLength: 8
    },
    electionBody: {	//Array of election bodies that user is verified for
        type: ObjectId,	//Array of ElectionBody id's
        ref: 'ElectionBody',
        required: false
    },
    meta: {  //Nested object containing other useful information
        isActive: {
            type: Boolean,
            default: true
        },
        dateJoined: {
            type: Date,
            required: true,
            default: Date.now()
        },
        lastAccessTime:{    //Last Date and time the user successfully logged onto the system
            type: Date,
            default: Date.now()
        },
        lastLoginAttempt: { //Last date and time the user attempted to Login (Login may not be successful due to failed password/token)
            type: Date
        },
        lastAccessLocation: {
            type: String,
        },
        ipAddress: {
            type: String
        },
        // tokenPasscode: {
        //     type: String,
        // },
        // tokenExpiry: {
        //     type: Date
        // },
    }
})

const Client = mongoose.model('Client', ClientSchema);
module.exports = Client;