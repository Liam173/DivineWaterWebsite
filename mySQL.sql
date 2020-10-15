DROP database IF EXISTS DivineWater;
CREATE database DivineWater;
USE DivineWater;

CREATE TABLE IF NOT EXISTS Product (
  productID INT NOT NULL PRIMARY KEY,
  name VARCHAR(45) NOT NULL,
  productPrice FLOAT NULL,
  description VARCHAR(200) NOT NULL
);
  
CREATE TABLE IF NOT EXISTS Customer (
  customerID INT NOT NULL PRIMARY KEY auto_increment,
  fullname VARCHAR(45) NOT NULL,
  cAddress VARCHAR(45) NULL,
  phoneNumber VARCHAR(10) NOT NULL,
  email VARCHAR(45) NOT NULL
);

CREATE TABLE IF NOT EXISTS Orders (
  orderID INT NOT NULL PRIMARY KEY,
  cartQuantity VARCHAR(45) NOT NULL,
  pickupData DATE NULL,
  address VARCHAR(10) NOT NULL,
  email VARCHAR(45) NOT NULL,
  status VARCHAR(45) NOT NULL,
  customerID INT NOT NULL REFERENCES Customer(customerID)
);

CREATE TABLE IF NOT EXISTS Order_details (
  orderID INT NOT NULL PRIMARY KEY REFERENCES Orders(orderID),
  price INT NOT NULL,
  quantity INT NULL,
  basketTotal INT NOT NULL,
  productID INT NOT NULL REFERENCES Product(productID)
);

INSERT INTO Product (productID, name, productPrice, description) VALUES
(1, '3 Stage Big Blue Filtration System', 3999, 'This whole house filtration system will deliver high-quality drinking water. The ideal application is for rainwater.'),
(2, 'Little Luxury Tap Filter Unit', 199, 'This simple to use filter fits onto any tap present in your house, designed to filter the water coming out of the taps.'),
(3, '14 Liter Mineral Pot Counter Top', 389, 'This is a standalone filtration system that slowly filters the water throughout the day, traversing from top to bottom container.'),
(4, 'Reverse Osmosis Water Filter System', 1799, 'The 50 GPD under counter reverse osmosis system provides safe, pure water using Reverse Osmosis Technology.');

SELECT * FROM Customer;