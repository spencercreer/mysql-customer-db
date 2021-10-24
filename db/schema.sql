DROP DATABASE IF EXISTS customer_db;
CREATE DATABASE customer_db;

USE customer_db;

CREATE TABLE customers (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    cust_code VARCHAR(10) UNIQUE NOT NULL,
    name VARCHAR(255) UNIQUE NOT NULL,
    address VARCHAR(255) UNIQUE NOT NULL,
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    zip INT
);

CREATE TABLE parts (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    part_number VARCHAR(100),
    price DECIMAL(6,2),
    cust_id INT UNSIGNED,
    INDEX cust_ind (cust_id),
    CONSTRAINT fk_cust FOREIGN KEY (cust_id) REFERENCES customers(id) ON DELETE CASCADE
);


