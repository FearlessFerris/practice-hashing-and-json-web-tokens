// Main Application 
const express = require( 'express' );
const app = express();
const ExpressError = require( './ExpressError.js' );

// Middleware 
app.use( express.json() );

// Routers 
const userRoutes = require( './routes/user.js' );

// Routers - Prefix 
app.use( '/users', userRoutes );

// 404 Error Handler 
app.use(( req, res, next )=> {
    const notFound = new ExpressError( 'Not Found', 404 );
    return next( notFound );
});

// General Error Handler 
app.use(( err, req, res, next )=> {
    err.status = err.status || 500;
    return res.status( err.status ).json({
        error:{
            message: err.msg || 'An Error Occurred',
            status: err.status,
        },
    });
});

// Export Application for Use 
module.exports = app;














