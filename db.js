// Setup Database 
const { Client } = require( 'pg' );
let DB_URI;

if( process.env.NODE_ENV === 'test' ){
    DB_URI = 'postgresql://marcus:Civil392601*@localhost:5432/hashing_test';
}
else {
    DB_URI = 'postgresql://marcus:Civil392601*@localhost:5432/hashing';
}

let db = new Client({
    connectionString: DB_URI,
});

db.connect(); // Connect to the specified database 
module.exports = db;
