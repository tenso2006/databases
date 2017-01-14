DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  message varchar(255) NOT NULL,
  room_name varchar(20) NOT NULL,
  PRIMARY KEY (id) 
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  user_name varchar(15) NOT NULL, 
  PRIMARY KEY (id) 
);

INSERT INTO messages (message) VALUES ('static')
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

