let router = require('express').Router(); //router instance to create modular route handlers for user
let Client = require('../models/client');
const {check, validationResult} = require('express-validator/check'); //used for validation
const bcrypt = require('bcrypt'); //used for password hashing and comparison with DB
const ObjectID =require('mongoose').mongo.ObjectID;



/*
Login
*/
router.post('/login', async (req,res)=>{ //use of javascript async/await for synchronous login process
    try{

        let {client,password} = req.body; //get password and email from form

        //check if email exist.
        client = await Client.findOne({client}).exec();
        if (!client) {
            console.log("No such client");
            return res.status(404).send({error: 'Client authentication failed'}) //return if client does not exist
        }
        console.log("Client found");
        client.meta.lastLoginAttempt = Date.now(); //updates last login attempt
        //check if client's password matches stored hash using bcrypt
        let hash = client.password; //get hash from database
        let passwordMatch = bcrypt.compareSync(password, hash) //compare
        if (!passwordMatch){
            return res.status(404).send({error:"Client authentication failed"})
        }
        console.log("Password matched");

        res.status(200).send({message:"Account Verified", electionBodyID: client.electionBody})


    }
    catch(err) {
        console.log(err)
        return {error:err}
    }
});


/*
Register/Create a client
*/
router.post('/register', [
    check('password')
        .isLength({min: 8})
        .withMessage('Password must be at least 8 characters')
        .custom((value,{req})=>{ //custom validator checks if passwords match
            if(value !== req.body.password2){
                throw new Error("Passwords do not match")
            }else {
                return true
            }
        })
],(req,res)=>{
    /*
        Get information from form
    */
    let {
        client,
        password,
        password2,
        electionBodyID, //The election body that validated the User. The user will be able to participate in elections created by this body
    } = req.body;


    //Validation Check
    const errors = validationResult(req); //return validation object with errors
    if(!errors.isEmpty() ){
        return res.send({errors:errors.array()});
    }

    //for development
    electionBodyID = new ObjectID(); //generates random id for electionbody

    //Hash password
    const saltRounds = 13; //higher salting
    let hash = bcrypt.hashSync(password,saltRounds);
    let electionBody = electionBodyID;
    //create new instance of client
    let newClient = Client({
        client,
        password:hash, //store hash in password field
        electionBody,

    })

    //Add client to database
    newClient.save().then((client)=>{
        //TODO : store user's session
        //send email to user
        console.log(client.client)

        res.send({client});
    }).catch((err)=>{
        console.log(err);
        res.send({error:err});
    })
});


/*
list all users in the system
*/
router.get('/list', (req,res)=>{
    Client.find({}).exec().then((clients)=>{
        res.send({clients}) //return users from database

    }).catch((err)=>{ //catch errors
        console.log({error: err}) //print errors to console
    })
});

/*
logout
ToDo:
*/

/*
Change Password
ToDo:
*/


module.exports = router;
