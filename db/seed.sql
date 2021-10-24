USE customer_db;

INSERT INTO customers (cust_code, name, address, city, state, country, zip)
VALUES
    ("SCIINS", "Scientific Instruments, LTD.", "2304 W 2400 N", "Phoenix", "AZ", "USA", 85006),
    ("LIGELE", "Light Elements", "5000 W 9023 N", "Dallas", "TX", "USA", 75001);

INSERT INTO parts (part_number, price, cust_id)
VALUES
    ("A3029400-T34", 5499.97, 1),
    ("SW3049382", 6775.25, 2);
