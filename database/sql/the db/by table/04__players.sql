-- drop tables if exist ---------------------------------------------------------------------------------------------------

drop table if exists players;


-- create tables ---------------------------------------------------------------------------------------------------

CREATE TABLE `players` (
  `player_id` int UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
  `customer_id` int UNSIGNED,
  `floor_id` int UNSIGNED,
  `name_short` varchar(50) NOT NULL,
  `name_long` varchar(300) NOT NULL,
  `touch_enabled` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


-- foreign keys ---------------------------------------------------------------------------------------------------

ALTER TABLE `players`
  ADD CONSTRAINT `players_ibfk_1` 
  FOREIGN KEY (`customer_id`) 
  REFERENCES `customers` (`customer_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;
ALTER TABLE `players`
  ADD CONSTRAINT `players_ibfk_2` 
  FOREIGN KEY (`floor_id`) 
  REFERENCES `floors` (`floor_id`)
  ON DELETE SET NULL
  ON UPDATE CASCADE;


-- insert ---------------------------------------------------------------------------------------------------

-- create 5 players across four floors and two buildings
insert into players
     (customer_id, floor_id, name_short, name_long, touch_enabled)
values
     -- Bill More has one floor with one player.
     (1, 1, "screen-one", "Main Lobby Screen", true),
     -- Arch East first floor = 0 players.
          -- nothing...
     -- Arch East second floor = 1 player.
     (2, 3, "welcome", "SOA Welcome Screen", 0),
     -- Arch East third floor = 3 players.
     (1, 4, "adm-soa", "Admissions Screen in SOA Building - Floor 2", false),
     (2, 4, "2-1", "Arch Lab", true),
     (2, 4, "2-2", "Arch Gallery", 1);


-- select ---------------------------------------------------------------------------------------------------

-- show all customer-player-building-floor relationships by player
SELECT 
     players.player_id,
     players.name_long,
     floors.floor_id,
     floors.name,
     buildings.building_id,
     buildings.name_long,
     customers.name_short
FROM floors
JOIN players
ON floors.floor_id = players.floor_id
JOIN buildings
ON floors.building_id = buildings.building_id
JOIN customers
ON players.customer_id = customers.customer_id
GROUP BY players.player_id;