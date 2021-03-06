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
    image_url TEXT,
    artist_id VARCHAR(100),
    genre VARCHAR(100),
    card_type VARCHAR(100),
    album_1 VARCHAR(100),
    alb1_tracks TEXT,
    album_2 VARCHAR(100),
    alb2_tracks TEXT,
    popularity INT,
    followers INT,
    favorite BOOLEAN
);

CREATE TABLE album_card (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id),
    artist_name VARCHAR(100),
    artist_id VARCHAR(100),
    image_url TEXT,
    genre VARCHAR(100),
    card_type VARCHAR(100),
    album_name VARCHAR(100),
    alb_tracks TEXT,
    popularity INT,
    release_date VARCHAR(15),
    favorite BOOLEAN
);

