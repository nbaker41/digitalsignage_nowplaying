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

-- create 5 players across four floors and two buildings
insert into media
     (
          `customer_id`, 
          `user_id`, 
          `file_name`, 
          `file_type`, 
          `file_size`,
          `title`,
          `description`,
          `dimensions_width`,
          `dimensions_height`
     )
values
     -- arch media.
     (
          2,
          2,
          "campus.png",
          "image/png",
          354678,
          "Picture of Gatech campus",
          "This is the default picture used on our signage.",
          1267,
          987
     ),
     (
          2,
          2,
          "building.jpg",
          "image/jpg",
          78884744,
          "Building",
          null,
          1107,
          687
     ),
     (
          2,
          2,
          "welcome.png",
          "image/png",
          9844477,
          "Welcome Image",
          "Standard greeting image for the school",
          1280,
          900
     ),
     -- admissions media.
     (
          1,
          1,
          "welcome-image.png",
          "image/png",
          77336633,
          "Admissions - hello",
          null,
          1367,
          1087
     ),
     (
          1,
          2,
          "reminder.jpeg",
          "image/jpeg",
          633366,
          "Registration-reminder",
          "Reminder to register!",
          1367,
          1087
     );

insert into directories
     (
          `customer_id`, 
          `user_id`, 
          `title`,
          `file_contents`, 
          `description`
     )
values
     -- admissions directories.
     (
          1,
          1,
          "Staff",
          "",
          "Directory of our staff"
     ),
     (
          1,
          2,
          "Deadlines",
          "",
          "Calendar of our deadlines"
     );

-- match playlists to media.
insert into playlists_media
     (`playlist_id`, `media_id`, `user_id`, `order`)
values 
     -- -> playlist 1 (2 files)
     (1, 4, 1, 0),
     (1, 5, 1, 1),
     -- -> playlist 3 (1 file)
     (3, 1, 2, 0),
     -- -> playlist 4 (3 files)
     (4, 1, 2, 0),
     (4, 2, 2, 1),
     (4, 3, 2, 2);

-- match playlists to directories.
insert into playlists_directories
     (`playlist_id`, `directory_id`, `user_id`, `order`)
values 
     -- -> playlist 2 (2 directories)
     (2, 1, 1, 0),
     (2, 2, 2, 1),
     -- -> playlist 5 (1 directory)
     (5, 1, 1, 0);



-- select ---------------------------------------------------------------------------------------------------

SELECT
     media.media_id,
     media.file_name,
     playlists.playlist_id,
     playlists.name
FROM media
LEFT JOIN playlists_media
ON media.media_id = playlists_media.media_id
JOIN playlists
ON playlists_media.playlist_id = playlists.playlist_id;

SELECT
     directories.directory_id,
     directories.title,
     playlists.playlist_id,
     playlists.name
FROM directories
LEFT JOIN playlists_directories
ON directories.directory_id = playlists_directories.directory_id
JOIN playlists
ON playlists_directories.playlist_id = playlists.playlist_id;