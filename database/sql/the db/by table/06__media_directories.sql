-- drop tables if exist ---------------------------------------------------------------------------------------------------

drop table if exists media;
drop table if exists directories;
drop table if exists playlists_media;
drop table if exists playlists_directories;


-- create tables ---------------------------------------------------------------------------------------------------

CREATE TABLE `media` (
  `media_id` int UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
  `customer_id` int UNSIGNED,
  `user_id` int UNSIGNED,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `file_name` varchar(100) NOT NULL,
  `file_type` varchar(100) NOT NULL,
  `file_size` int NOT NULL,
  `title` varchar(250) NULL,
  `description` mediumtext NULL,
  `dimensions_width` int NULL,
  `dimensions_height` int NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `directories` (
  `directory_id` int UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
  `customer_id` int UNSIGNED,
  `user_id` int UNSIGNED,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `title` varchar(250) NULL,
  `file_contents` longtext NOT NULL,
  `description` mediumtext NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- join playlists, media
CREATE TABLE `playlists_media` (
  `playlist_id` int UNSIGNED,
  `media_id` int UNSIGNED,
  `user_id` int UNSIGNED,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `order` int NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- join playlists, directories
CREATE TABLE `playlists_directories` (
  `playlist_id` int UNSIGNED,
  `directory_id` int UNSIGNED,
  `user_id` int UNSIGNED,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `order` int NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


-- foreign keys ---------------------------------------------------------------------------------------------------

ALTER TABLE `media`
  ADD CONSTRAINT `media_ibfk_1` 
  FOREIGN KEY (`customer_id`) 
  REFERENCES `customers` (`customer_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;
ALTER TABLE `media`
  ADD CONSTRAINT `media_ibfk_2` 
  FOREIGN KEY (`user_id`) 
  REFERENCES `users` (`user_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;

ALTER TABLE `directories`
  ADD CONSTRAINT `directories_ibfk_1` 
  FOREIGN KEY (`customer_id`) 
  REFERENCES `customers` (`customer_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;
ALTER TABLE `directories`
  ADD CONSTRAINT `directories_ibfk_2` 
  FOREIGN KEY (`user_id`) 
  REFERENCES `users` (`user_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;

ALTER TABLE `playlists_media`
  ADD CONSTRAINT `playlists_media_ibfk_1` 
  FOREIGN KEY (`playlist_id`) 
  REFERENCES `playlists` (`playlist_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;
ALTER TABLE `playlists_media`
  ADD CONSTRAINT `playlists_media_ibfk_2` 
  FOREIGN KEY (`media_id`) 
  REFERENCES `media` (`media_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;
ALTER TABLE `playlists_media`
  ADD CONSTRAINT `playlists_media_ibfk_3` 
  FOREIGN KEY (`user_id`) 
  REFERENCES `users` (`user_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;

ALTER TABLE `playlists_directories`
  ADD CONSTRAINT `playlists_directories_ibfk_1` 
  FOREIGN KEY (`playlist_id`) 
  REFERENCES `playlists` (`playlist_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;
ALTER TABLE `playlists_directories`
  ADD CONSTRAINT `playlists_directories_ibfk_2` 
  FOREIGN KEY (`directory_id`) 
  REFERENCES `directories` (`directory_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;
ALTER TABLE `playlists_directories`
  ADD CONSTRAINT `playlists_directories_ibfk_3` 
  FOREIGN KEY (`user_id`) 
  REFERENCES `users` (`user_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;


-- insert ---------------------------------------------------------------------------------------------------

insert into customers


-- select ---------------------------------------------------------------------------------------------------

-- show all accounts - user, company, and admin status
