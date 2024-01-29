// User Routes 

const express = require( 'express' )
const router = new express.Router()
const db = require( '../db' );

router.get( '/', ( req, res, next )=>{
    return res.json({ Welcome: 'To the Hashing and JSON web token homepage!' });
});

// router.get( '/all', ( req, res, next )=> {

// })

module.exports = router;

