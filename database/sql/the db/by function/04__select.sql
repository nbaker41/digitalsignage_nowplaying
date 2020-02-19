-- Customers & Users ---------------------------------------------------------------------------------------------------


-- show all accounts - user, company, and admin status
SELECT customers.customer_id, customers.name_short, users.user_id, users.name_first, users.name_last, users.ddst_admin, customers_users.admin
FROM customers_users
JOIN customers
ON customers_users.customer_id = customers.customer_id
JOIN users
ON customers_users.user_id = users.user_id;



-- Schools & Departments ---------------------------------------------------------------------------------------------------


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



-- Buildings & Floors ---------------------------------------------------------------------------------------------------


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



-- Buildings & Floors ---------------------------------------------------------------------------------------------------




-- show all 


-- show all players by floor/building

SELECT
     floors.floor_id as ``,
     floors.name as `floor`,
     players.player_id as ``,
     players.name_short `player`,
     players.name_long as `player name`,
     buildings.name_long as `building`
FROM floors
LEFT JOIN players
ON floors.floor_id = players.floor_id
JOIN buildings
ON floors.building_id = buildings.building_id;

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



-- Playlists ---------------------------------------------------------------------------------------------------


-- SELECT
--      players.player_id as ``,
--      players.name_long as `player`,
--      playlists.playlist_id as ``,
--      playlists.playlist_id `playlist`
-- FROM playlists
-- JOIN players_playlists
-- ON playlists.playlist_id = players_playlists.playlist_id
-- JOIN players
-- ON players_playlists.playlist_id = players.player_id
SELECT
     players.player_id as ``,
     players.name_short as `player`,
     playlists.playlist_id as ``,
     playlists.name `playlist`,
     playlists.type `type`
FROM playlists
LEFT JOIN players_playlists
ON playlists.playlist_id = players_playlists.playlist_id
LEFT JOIN players
ON players_playlists.playlist_id = players.player_id;



-- Media & Directories ---------------------------------------------------------------------------------------------------


CREATE
