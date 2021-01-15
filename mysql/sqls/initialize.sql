DROP DATABASE IF EXISTS myapp;

CREATE DATABASE myapp;
USE myapp;

create table lists (
    id INTEGER AUTO_INCREMENT,
    value TEXT,
    PRIMARY KEY (id)
);