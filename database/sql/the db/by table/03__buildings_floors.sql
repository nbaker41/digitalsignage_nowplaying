-- drop tables if exist ---------------------------------------------------------------------------------------------------

drop table if exists buildings;
drop table if exists floors;
drop table if exists customers_buildings;


-- create tables ---------------------------------------------------------------------------------------------------

CREATE TABLE `buildings` (
  `building_id` int UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
  `name_short` varchar(50) NOT NULL,
  `name_long` varchar(300) NOT NULL,
  `location_city` varchar(75) NOT NULL,
  `location_state` varchar(2) NOT NULL,
  `location_zip` varchar(9) NOT NULL,
  `floors_underground` int NOT NULL,
  `address_number` varchar(10) NULL,
  `address_street` varchar(100) NULL,
  `geo_latitude` decimal(16, 8) NULL,
  `geo_longitude` decimal(16, 8) NULL,
  `image` varchar(300) NULL -- added
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `floors` (
  `floor_id` int UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
  `building_id` int UNSIGNED,
  `name` varchar(100) NOT NULL,
  `order` int NOT NULL,
  `notes` mediumtext NULL,
  `floorplan` varchar(300) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- join customers, buildings
CREATE TABLE `customers_buildings` (
  `customer_id` int UNSIGNED,
  `building_id` int UNSIGNED,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


-- foreign keys ---------------------------------------------------------------------------------------------------

ALTER TABLE `customers_buildings`
  ADD CONSTRAINT `customers_buildings_ibfk_1` 
  FOREIGN KEY (`customer_id`) 
  REFERENCES `customers` (`customer_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;
ALTER TABLE `customers_buildings`
  ADD CONSTRAINT `customers_buildings_ibfk_2` 
  FOREIGN KEY (`building_id`) 
  REFERENCES `buildings` (`building_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;

ALTER TABLE `floors`
  ADD CONSTRAINT `floors_ibfk_1` 
  FOREIGN KEY (`building_id`) 
  REFERENCES `buildings` (`building_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;
  

-- insert ---------------------------------------------------------------------------------------------------

-- create two buildings
insert into buildings
     (
          name_short, 
          name_long, 
          location_city, 
          location_state, 
          location_zip, 
          floors_underground,
          address_number,
          address_street,
          geo_latitude,
          geo_longitude,
          image
     )
values 
     (
          "student_success_center",
          "Bill Moore Student Success Center",
          "Atlanta",
          "GA",
          "30332",
          0,
          "219",
          "Uncle Heinie Way",
          33.772565,
          -84.393945,
          "bill-moore-center.jpg"
     ),
     (
          "arch_east",
          "Architecture Building (East)",
          "Atlanta",
          "GA",
          "30332",
          2,
          "245",
          "4th Street, NW, Suite 351",
          33.776109,
          -84.395456,
          "arch_east.png"
     );

-- create four floors for two buildings.
insert into floors
     (`building_id`, `name`, `order`, `notes`, `floorplan`)
values
     -- Bill More Student Success Center - 1 floor.
     (1, "Main Lobby", 0, null, null),
     -- Architecture East - 3 floors.
     (2, "Architecture Lobby", 0, null, null),
     (2, "Floor 1", 1, null, null),
     (2, "Second Floor", 2, null, null);

-- match customers and buildings.
insert into customers_buildings
     (customer_id, building_id)
values 
     -- arch -> arch_east
     (2, 2),
     -- admissions -> arch_east
     (1, 2),
     -- admissions -> bill_moore
     (1, 1);


-- select ---------------------------------------------------------------------------------------------------

-- show all customer-building-floor relationships by floor
SELECT 
     floors.floor_id,
     floors.name,
     customers.customer_id,
     customers.name_long,
     buildings.building_id,
     buildings.name_long
FROM customers_buildings
JOIN customers
ON customers_buildings.customer_id = customers.customer_id
JOIN buildings
ON customers_buildings.building_id = buildings.building_id
JOIN floors
ON customers_buildings.building_id = floors.building_id
GROUP BY floors.floor_id;