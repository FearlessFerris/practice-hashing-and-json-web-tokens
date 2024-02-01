// User Routes 
const express = require( 'express' );
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

router.post( '/create', async ( req, res, next )=> {
    try{
        const { username, password, email, image_url, admin } = req.body;
        const newPilot = new Pilot( username, password, email, image_url, admin );
        return res.json({ Pilot: newPilot.toString() });
    }
    catch( error ){
        return next( error );
    }
})

module.exports = router;

