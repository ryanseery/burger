CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(50) NOT NULL,
  devoured boolean NOT NULL,
  date TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);

SELECT * FROM burgers;