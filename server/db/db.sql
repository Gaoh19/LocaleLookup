CREATE DATABASE Lookup;

CREATE TABLE locations (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    priceRange INT NOT NULL check(priceRange >= 1 and priceRange <=5)
);