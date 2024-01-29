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





