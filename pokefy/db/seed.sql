DROP TABLE users

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    username VARCHAR(100) NOT NULL UNIQUE,
    hash TEXT NOT NULL
);

CREATE TABLE artist_card (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id),
    name VARCHAR(100),
    genre VARCHAR(100),
    species VARCHAR(100),
    album_1 VARCHAR(100),
    ab1_tracks TEXT,
    album_2 VARCHAR(100),
    ab2_tracks TEXT,
    poularity INT,
    followers INT,
    favorite BOOLEAN
);

CREATE TABLE album_card (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id),
    name VARCHAR(100),
    genre VARCHAR(100),
    species VARCHAR(100),
    album_1 VARCHAR(100),
    ab1_tracks TEXT,
    poularity INT,
    followers INT,
    favorite BOOLEAN
);