-- drop tables if exist ---------------------------------------------------------------------------------------------------

drop table if exists customers;
drop table if exists users;
drop table if exists customers_users;


-- create tables ---------------------------------------------------------------------------------------------------

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


-- foreign keys ---------------------------------------------------------------------------------------------------

ALTER TABLE `customers_users`
  ADD CONSTRAINT `customers_users_ibfk_1` 
    FOREIGN KEY (`customer_id`) 
    REFERENCES `customers` (`customer_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE;
ALTER TABLE `customers_users`
  ADD CONSTRAINT `customers_users_ibfk_2` 
    FOREIGN KEY (`user_id`) 
    REFERENCES `users` (`user_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE;
COMMIT;


-- insert ---------------------------------------------------------------------------------------------------

insert into customers
     (name_short, name_long)
values 
     ("admissions", "The Office of Admissions"),
     ("crc", "Campus Recreation Center");

insert into users
     (name_first, name_last, gt_name, gt_id, avatar, contact_phone, contact_email, ddst_admin)
values 
     ("Cecil", "Dunston", "cdunston3", 123456789, "cecil.jpg", "4042857946", "cdunston3@gatech.edu", 0),
     ("Nick", "Baker", "nick.baker", 987654321, "nick.jpg", "4045356678", "nick.baker@gatech.edu", false);

-- Nick makes two accounts, Cecil makes one.
insert into customers_users
     (customer_id, user_id, admin)
values 
-- cecil
     (1, 1, 1),
-- nick
     (1, 2, 0),
     (2, 2, 1);


-- select ---------------------------------------------------------------------------------------------------

-- show all accounts - user, company, and admin status
SELECT customers.customer_id, customers.name_short, users.user_id, users.name_first, users.name_last, users.ddst_admin, customers_users.admin
FROM customers_users
JOIN customers
ON customers_users.customer_id = customers.customer_id
JOIN users
ON customers_users.user_id = users.user_id;