DROP DATABASE IF EXISTS meals_users;
CREATE DATABASE meals_users;

\c meals_users;

CREATE TABLE users(
  id serial primary key,
  name varchar NOT NULL,
  email varchar UNIQUE NOT NULL,
  password varchar NOT NULL,
  is_admin boolean DEFAULT 'f',
  phone VARCHAR
);

CREATE TABLE oneweek(
id serial primary key,
DATA,

)

CREATE TABLE twoweek (
id serial primary key,

)
