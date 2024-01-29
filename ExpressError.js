// Create Express Error that extends the normal Error Class
class ExpressError extends Error {
    constructor( msg, status ){
        super( msg ); // Don't forget to call the super constructor of the Error class to access the msg property 
        this.status = status;
        console.error( this.stack );
    }
}

// Export Class for use 
module.exports = ExpressError;

