drop table if exists schools;
drop table if exists departments;
drop table if exists customers_schools;
drop table if exists customers_departments;

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
