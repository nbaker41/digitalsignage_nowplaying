-- Customers & Users ---------------------------------------------------------------------------------------------------


CREATE TABLE `customers` (
  `customer_id` int UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `name_short` varchar(50) NOT NULL,
  `name_long` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `users` (
  `user_id` int UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `name_first` varchar(50) NOT NULL,
  `name_last` varchar(50) NOT NULL,
  `gt_name` varchar(50) NOT NULL UNIQUE,
  `gt_id` int NOT NULL UNIQUE,
  `avatar` varchar(300) NULL,
  `contact_phone` varchar(50) NULL,
  `contact_email` varchar(50) NULL,
  `ddst_admin` bit(1) NOT NULL -- added
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- join customers, users
CREATE TABLE `customers_users` (
  `customer_id` int UNSIGNED,
  `user_id` int UNSIGNED,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `admin` bit(1) NOT NULL,
  `login_last` DATETIME NULL,
  `login_count` int NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



-- Schools & Departments ---------------------------------------------------------------------------------------------------


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



-- Buildings & Floors ---------------------------------------------------------------------------------------------------


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
  `building_id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `order` int NOT NULL,
  `notes` mediumtext NULL,
  `floorplan` varchar(300) NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;





-----------------------------------------------------------------------------------------
-- 100 character example
-- abcdefghijabcdefghijabcdefghijabcdefghijabcdeffghi
-- ghijabcdefghijabcdefghijabcdefghijabcdefghijabcdej



