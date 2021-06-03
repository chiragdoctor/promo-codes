USE promo_codes; 
DROP TABLE IF EXISTS service; 

CREATE TABLE IF NOT EXISTS service
( 
     id INT PRIMARY KEY auto_increment, 
     name VARCHAR(25) UNIQUE NOT NULL, 
     description VARCHAR(500) NOT NULL,
     promo_code VARCHAR(25) NOT NULL
  );

  INSERT INTO service(name, description, promo_code) VALUES ('SiteConstructor.io', 'This is the description for SiteConstructor.io','siteconstructorpromocode');
  INSERT INTO service(name, description, promo_code) VALUES ('AppVision.com', 'This is the description for AppVision.com','appvisionpromocode');
  INSERT INTO service(name, description, promo_code) VALUES ('Analytics.com', 'This is the description for Analytics.com','analyticspromocode');
  INSERT INTO service(name, description, promo_code) VALUES ('Logotype', 'This is the description for LogoType','logotypepromocode');
  INSERT INTO service(name, description, promo_code) VALUES ('Apple.com', 'This is the description for Apple.com','applepromocode');
  INSERT INTO service(name, description, promo_code) VALUES ('Microsoft.com', 'This is the description for Microsoft.com','microsoftpromocode');
  INSERT INTO service(name, description, promo_code) VALUES ('Amazon.com', 'This is the description for Amazon.com','amazonpromocode');
  INSERT INTO service(name, description, promo_code) VALUES ('Flipcart.in', 'This is the description for Flipcart.in','flipcartpromocode');
  INSERT INTO service(name, description, promo_code) VALUES ('ALX.com', 'This is the description for ALX.com','alxpromocode');
  INSERT INTO service(name, description, promo_code) VALUES ('Currys.com', 'This is the description for Currys.com','currypromocode');