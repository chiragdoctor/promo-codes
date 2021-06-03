USE promo_codes; 
DROP TABLE IF EXISTS activate_bonus; 

CREATE TABLE IF NOT EXISTS activate_bonus
( 
     id INT PRIMARY KEY auto_increment, 
     userId INT NOT NULL, 
     serviceId INT NOT NULL 
  );
