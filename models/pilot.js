// Pilot Model 

const db = require( '../db' ); 
const ExpressError = require( '../ExpressError' );
const bcrypt = require( 'bcrypt' );


class Pilot {
    
    constructor( username, password, email, image_url, admin = false ){
        this.username = username; 
        this.password = password;
        this.email = email;
        this.image_url = image_url;
        this.admin = admin;
    }

    toString(){
        return `Pilot: ${ this.username } Email: ${ this.email } Image: ${ this.image_url } Admin Privileges: ${ this.admin }`
    }

    static async encryptPassowd( password, saltRounds = 12 ){
        try{
            const hashed = await bcrypt.hash( password, saltRounds )
            return hashed;
        }
        catch( error ){
            throw new ExpressError( 'Problem occurred while hashing password!' )
        };
    }

}


module.exports = Pilot;