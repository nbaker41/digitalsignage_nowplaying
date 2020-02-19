-- drop tables if exist ---------------------------------------------------------------------------------------------------

drop table if exists playlists;
drop table if exists players_playlists;


-- create tables ---------------------------------------------------------------------------------------------------


CREATE TABLE `playlists` (
  `playlist_id` int UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
  `customer_id` int UNSIGNED,
  `user_id` int UNSIGNED,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(50) NOT NULL,
  `type` varchar(100) NOT NULL,
  `description` mediumtext NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- join players, playlists
CREATE TABLE `players_playlists` (
  `player_id` int UNSIGNED,
  `playlist_id` int UNSIGNED,
  `user_id` int UNSIGNED,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `order` int NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


-- foreign keys ---------------------------------------------------------------------------------------------------


ALTER TABLE `playlists`
  ADD CONSTRAINT `playlists_ibfk_1` 
  FOREIGN KEY (`customer_id`) 
  REFERENCES `customers` (`customer_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;
ALTER TABLE `playlists`
  ADD CONSTRAINT `playlists_ibfk_2` 
  FOREIGN KEY (`user_id`) 
  REFERENCES `users` (`user_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;

ALTER TABLE `players_playlists`
  ADD CONSTRAINT `players_playlists_ibfk_1` 
  FOREIGN KEY (`player_id`) 
  REFERENCES `players` (`player_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;
ALTER TABLE `players_playlists`
  ADD CONSTRAINT `players_playlists_ibfk_2` 
  FOREIGN KEY (`playlist_id`) 
  REFERENCES `playlists` (`playlist_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;
ALTER TABLE `players_playlists`
  ADD CONSTRAINT `players_playlists_ibfk_3` 
  FOREIGN KEY (`user_id`) 
  REFERENCES `users` (`user_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;

-- insert ---------------------------------------------------------------------------------------------------


-- create playlists.
insert into playlists
     (`customer_id`, `user_id`, `name`, `type`, `description`)
values
     (1, 1, "Two Welcome Images", "media", "Images to play on our screen in the front office"),
     (1, 2, "Staff & Calendar", "directory", "Show our staff directory and calendar"),
     (2, 2, "Campus Pic", "media", "Just a single image of campus to show as a placeholder"),
     (2, 2, "Arch Main", "media", "Images for Arch students in the building"),
     (1, 1, "Admissions Directory", "directory", "Show Just our staff directory, not the calendar.");

-- match players and playlists.
insert into players_playlists
     (`player_id`, `playlist_id`, `user_id`, `order`)
values 
     -- bill_moore/main_lobby <- playlists 1, 2 by cecil
     (1, 1, 1, 0),
     (1, 2, 1, 1),
     -- arch_east floor one has no players...
     -- arch_east/soa_welcome_screen <- playlists 3, 4 by nick
     (2, 3, 2, 0),
     (2, 4, 2, 1),
     -- arch_east/admissions_soa <- playlist 5 by cecil
     (3, 5, 1, 0),
     -- no playlists for floor two Arch Lab
     -- arch_east/Second Floor <- playlists  by nick
     (5, 3, 2, 0);

-- select ---------------------------------------------------------------------------------------------------


-- SELECT
--      players.player_id as ``,
--      players.name_long as `player`,
--      playlists.playlist_id as ``,
--      playlists.name `playlist`,
--      playlists.type `type`
-- FROM players_playlists
-- LEFT JOIN playlists
-- ON playlists.playlist_id = players_playlists.playlist_id
-- JOIN players
-- ON players_playlists.playlist_id = players.player_id;
SELECT
     players.player_id as ``,
     players.name_short as `player`,
     playlists.playlist_id as ``,
     playlists.name `playlist`,
     playlists.type `type`
FROM playlists
JOIN players_playlists
ON playlists.playlist_id = players_playlists.playlist_id
JOIN players
ON players_playlists.playlist_id = players.player_id;