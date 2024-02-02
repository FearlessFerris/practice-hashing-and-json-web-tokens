// User Routes 
const express = require( 'express' );
const ExpressError = require('../ExpressError');
const router = new express.Router();
const db = require( '../db' );

// Useful Tools / Dependencies 
const Pilot = require( '../models/pilot' );

// Homepage for Pilot Routes 
router.get( '/', ( req, res, next )=>{
    return res.json({ Welcome: 'To the Hashing and JSON web token homepage!' });
});

// Retrieve all pilots 
router.get( '/all', async ( req, res, next )=> {
    try{
        const response = await db.query( 
            `SELECT * FROM pilots` );
        const allPilots = response.rows;
        return res.json({ pilots: allPilots });
    }
    catch( error ){
        return next( error );
    };
});

// Create a new Pilot ( Yes this will create a new pilot with an un-encrypted password,
// this is by design I want to demonstrate that process within a seperate route )
router.post( '/create', async ( req, res, next )=> {
    try{
        const { username, password, email, image_url, admin } = req.body;
        const newPilot = new Pilot( username, password, email, image_url, admin ); 
        const result = await db.query( 
            `INSERT INTO pilots ( username, password, email, image_url, admin )
             VALUES ( $1, $2, $3, $4, $5 )`, [ username, password, email, image_url, admin ]);
        return res.json({ Pilot: result.rows[0] });
    }
    catch( error ){
        return next( error );
    };
});

// Encrypt a Pilots password to ensure secure personal information
router.post( '/encrypt', async ( req, res, next )=> {
    try{
        const { username } = req.body;
        const result = await db.query( 
            `SELECT password FROM pilots 
             WHERE username = $1`, [ username ]);
        const password = result.rows[0];
        if( !password ){
            return res.status( 404 ).json({ message: `User ${ username }, currently does not have a password!` });
        }
        const userEncrypted = await Pilot.encryptPassword( username, password.password, 12 );
        return res.json({ message: 'Success! Password has been Encrypted!', user: userEncrypted });
    }
    catch( error ){
        return next( error );
    }
})

module.exports = router;

