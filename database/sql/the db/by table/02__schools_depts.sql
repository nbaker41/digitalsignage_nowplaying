-- drop tables if exist ---------------------------------------------------------------------------------------------------

drop table if exists schools;
drop table if exists departments;
drop table if exists customers_schools;
drop table if exists customers_departments;


-- create tables ---------------------------------------------------------------------------------------------------

CREATE TABLE `schools` (
  `school_id` int UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
  `name_short` varchar(50) NOT NULL,
  `name_long` varchar(300) NOT NULL,
  `logo` varchar(100) NULL, -- added
  `url` varchar(250) NULL -- added
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `departments` (
  `department_id` int UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
  `name_short` varchar(50) NOT NULL,
  `name_long` varchar(300) NOT NULL,
  `logo` varchar(100) NULL, -- added
  `url` varchar(250) NULL -- added
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- join customers, schools
CREATE TABLE `customers_schools` (
  `customer_id` int UNSIGNED,
  `school_id` int UNSIGNED,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- join customers, departments
CREATE TABLE `customers_departments` (
  `customer_id` int UNSIGNED,
  `department_id` int UNSIGNED,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


-- foreign keys ---------------------------------------------------------------------------------------------------

ALTER TABLE `customers_schools`
  ADD CONSTRAINT `customers_schools_ibfk_1` 
  FOREIGN KEY (`customer_id`) 
  REFERENCES `customers` (`customer_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;
ALTER TABLE `customers_schools`
  ADD CONSTRAINT `customers_schools_ibfk_2` 
  FOREIGN KEY (`school_id`) 
  REFERENCES `schools` (`school_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;

ALTER TABLE `customers_departments`
  ADD CONSTRAINT `customers_departments_ibfk_1` 
  FOREIGN KEY (`customer_id`) 
  REFERENCES `customers` (`customer_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;
ALTER TABLE `customers_departments`
  ADD CONSTRAINT `customers_departments_ibfk_2` 
  FOREIGN KEY (`department_id`) 
  REFERENCES `departments` (`department_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;
  

-- insert ---------------------------------------------------------------------------------------------------

-- create a school
insert into schools
     (name_short, name_long, logo, url)
values 
     ("arch", "The School of Architecture", "arch-logo.png", "http://arch.gatech.edu");

-- create a department
insert into departments
     (name_short, name_long, logo, url)
values 
     ("admissions", "The Office of Admissions", "logo.jpeg", NULL);

-- match admissions and crc to school of architecture.
insert into customers_schools
     (customer_id, school_id)
values 
     (1, 1),
     (2, 1);

-- match admissions to office of admissions.
insert into customers_departments
     (customer_id, department_id)
values 
     (1, 1);


-- select ---------------------------------------------------------------------------------------------------

-- show all affiliations between customers and schools
SELECT customers.customer_id, customers.name_short, schools.school_id, schools.name_long
FROM customers_schools
JOIN customers
ON customers_schools.customer_id = customers.customer_id
JOIN schools
ON customers_schools.school_id = schools.school_id;

-- show all affiliations between customers and departments
SELECT customers.customer_id, customers.name_short, departments.department_id, departments.name_long
FROM customers_departments
JOIN customers
ON customers_departments.customer_id = customers.customer_id
JOIN departments
ON customers_departments.department_id = departments.department_id;