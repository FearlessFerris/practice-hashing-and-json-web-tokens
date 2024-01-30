DROP DATABASE IF EXISTS hashing;
DROP DATABASE IF EXISTS hashing_test;

CREATE DATABASE hashing;
CREATE DATABASE hashing_test;

\c hashing;

CREATE TABLE pilots (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL, 
    email TEXT NOT NULL,
    image_url TEXT,
    admin BOOLEAN DEFAULT FALSE 
);

CREATE TABLE airplanes (
    id SERIAL PRIMARY KEY,
    make TEXT NOT NULL, 
    model TEXT NOT NULL, 
    age INTEGER NOT NULL,
    image_url TEXT
);

CREATE TABLE airports (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    latitude INTEGER NOT NULL, 
    longitude INTEGER NOT NULL,
    country_name TEXT NOT NULL
);

-- Pilots
INSERT INTO pilots ( username, password, email, image_url, admin ) VALUES ( 'James Bond', 'jamestheman', 'james@theshard.uk', 'https://imageio.forbes.com/specials-images/dam/imageserve/494751156/960x0.jpg?height=474&width=711&fit=bounds', true );
INSERT INTO pilots ( username, password, email, image_url, admin ) VALUES ( 'Jason Bourne', 'jasontheman', 'jason@thecia.shh', 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/18/1493825719-bourne.jpg', true );

-- Airplanes 
INSERT INTO airplanes ( make, model, age, image_url ) VALUES ( 'Boeing', '777X', 1, 'https://ukaviation.news/wp-content/uploads/SH_Farnborough_Airshow_2022-314-Focus-scaled.jpg' );
INSERT INTO airplanes ( make, model, age, image_url ) VALUES ( 'Boeing', '787 - Dreamliner', 1, 'https://t4.ftcdn.net/jpg/05/55/34/63/360_F_555346317_md8bHUKKslwC1lZ6muy5OP9lv5b7ZEMO.jpg' );

-- Airports 
INSERT INTO airports ( name, latatude, longitude, country_name ) VALUES ( '')







