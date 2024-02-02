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
        return `Pilot: ${ this.username } || Email: ${ this.email } || Image: ${ this.image_url } || Admin Privileges: ${ this.admin }`
    }

    static async create({ username, password, email, image_url, admin = false }){
        try{
            const newPilot = new Pilot( username, password, email, image_url, admin );
            const result = await db.query( 
                `INSERT INTO pilots ( username, password, email, image_url, admin )
                 VALUES ( $1, $2, $3, $4, $5 )
                 RETURNING *`, [ username, password, email, image_url, admin ]);
            return newPilot;
        }
        catch( error ){
            return next( error );
        }
    }

    static async encryptPassword( username, password, saltRounds = 12 ){
        try{
            const user = await db.query( 
                `SELECT * FROM pilots
                 WHERE username = $1 AND password = $2`, [ username, password ]);
            if( !user ){
                throw new ExpressError( 'Invalid Username or Password!' );
            }
            const hashed = await bcrypt.hash( password, saltRounds );
            const result = await db.query(
                `UPDATE pilots
                 SET password = $1
                 WHERE username = $2 AND password = $3
                 RETURNING *;`, [ hashed, username, password ]);
            return result.rows[0];
        }
        catch( error ){
            throw new ExpressError( 'Problem occurred while hashing password!' )
        };
    }

    static async allPilots(){
        const results = await db.query( 
            `SELECT username, email, image_url, admin 
            FROM pilots`);
        return results.rows;
    }

}


module.exports = Pilot;