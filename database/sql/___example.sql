-- Create tables ---------------------------------------------------------------------------------------------------


CREATE TABLE `groups` (
  `group_id` int UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
  `name` varchar(300) NOT NULL,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP 
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


CREATE TABLE `users` (
  `user_id` int UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
  `username` varchar(300) NOT NULL,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP 
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


CREATE TABLE `group_user` (
  `group_id` int UNSIGNED,
  `user_id` int UNSIGNED,
  `account_created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  `account_lastlogin` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP 
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



-- Relationships via Constraints ---------------------------------------------------------------------------------------------------


ALTER TABLE `group_user`
  ADD CONSTRAINT `group_user_fk1` 
    FOREIGN KEY (`group_id`) 
    REFERENCES `groups` (`group_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE;
ALTER TABLE `group_user`
  ADD CONSTRAINT `group_user_fk2` 
    FOREIGN KEY (`user_id`) 
    REFERENCES `users` (`user_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE;
COMMIT;



-- Insert ---------------------------------------------------------------------------------------------------


-- four users create profiles...
INSERT into `users` (username) VALUES ("crdunsto");
INSERT into `users` (username) VALUES ("lamar_jackson");
INSERT into `users` (username) VALUES ("andy_reid");
INSERT into `users` (username) VALUES ("randy_moss");

-- four groups create profiles...
INSERT into `groups` (name) VALUES ("fans");
INSERT into `groups` (name) VALUES ("players");
INSERT into `groups` (name) VALUES ("coaches");
INSERT into `groups` (name) VALUES ("journalists");

-- Cecil joins the fans group.
INSERT into `group_user` (user_id, group_id) VALUES (1, 1);
-- Lamar Jackson joins both players and fans groups.
INSERT into `group_user` (user_id, group_id) VALUES (2, 2);
INSERT into `group_user` (user_id, group_id) VALUES (2, 1);
-- Andy Reid joins both coaches and fans groups.
INSERT into `group_user` (user_id, group_id) VALUES (3, 3);
INSERT into `group_user` (user_id, group_id) VALUES (3, 1);
-- Randy Moss joins players, fans and journalists groups.
INSERT into `group_user` (user_id, group_id) VALUES (4, 4);
INSERT into `group_user` (user_id, group_id) VALUES (4, 2);
INSERT into `group_user` (user_id, group_id) VALUES (4, 1);



-- Delete ---------------------------------------------------------------------------------------------------


-- Delete randy_moss
DELETE FROM `users` WHERE `user_id` = 4;



-- Update ---------------------------------------------------------------------------------------------------


-- Update latest login for lamar_jackson's players account
UPDATE `group_user`
SET `account_lastlogin` = now()
WHERE `user_id` = 2
  AND `group_id` = 2;



-- Add new data after having deleted some ---------------------------------------------------------------------------------------------------


-- Add Rodney Harrison, add to fans, journalists
INSERT into `users` (username) VALUES ("rodney_harrison");
-- Rodney Harrison joins players, fans and journalists groups.
INSERT into `group_user` (user_id, group_id) VALUES (5, 4);
INSERT into `group_user` (user_id, group_id) VALUES (5, 2);
INSERT into `group_user` (user_id, group_id) VALUES (5, 1);



-- Select ---------------------------------------------------------------------------------------------------


-- Find all accounts
SELECT * FROM group_user;


-- join of three tables
SELECT users.username, groups.name, group_user.account_lastlogin 
FROM group_user
JOIN users
ON group_user.user_id = users.user_id
JOIN groups
ON group_user.group_id = groups.group_id
WHERE group_user.group_id = 1;