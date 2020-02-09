-- Warning: You can generate script only for two tables at a time in your Free plan 
-- 
-- ****************** SqlDBM: MySQL ******************;
-- ***************************************************;


-- ************************************** `albums`

CREATE TABLE `albums`
(
 `album_id`    int NOT NULL ,
 `name`        varchar(250) NOT NULL ,
 `description` mediumtext NULL ,
 `created`     datetime NOT NULL ,
 `type`        varchar(250) NOT NULL ,
 `customer_id` int NOT NULL ,
 `user_id`     int NOT NULL ,

PRIMARY KEY (`album_id`),
KEY `fkIdx_147` (`customer_id`),
CONSTRAINT `FK_147` FOREIGN KEY `fkIdx_147` (`customer_id`) REFERENCES `customers` (`customer_id`),
KEY `fkIdx_150` (`user_id`),
CONSTRAINT `FK_150` FOREIGN KEY `fkIdx_150` (`user_id`) REFERENCES `users` (`user_id`)
);






-- ************************************** `albums-directories`

CREATE TABLE `albums-directories`
(
 `album_id`     int NOT NULL ,
 `directory_id` int NOT NULL ,
 `created`      datetime NOT NULL ,
 `user_id`      int NOT NULL ,
 `order`        int NOT NULL ,

PRIMARY KEY (`album_id`, `directory_id`),
KEY `fkIdx_161` (`album_id`),
CONSTRAINT `FK_161` FOREIGN KEY `fkIdx_161` (`album_id`) REFERENCES `albums` (`album_id`),
KEY `fkIdx_165` (`directory_id`),
CONSTRAINT `FK_165` FOREIGN KEY `fkIdx_165` (`directory_id`) REFERENCES `directories` (`directory_id`),
KEY `fkIdx_169` (`user_id`),
CONSTRAINT `FK_169` FOREIGN KEY `fkIdx_169` (`user_id`) REFERENCES `users` (`user_id`)
);





-- ************************************** `albums_media`

CREATE TABLE `albums_media`
(
 `album_id` int NOT NULL ,
 `media_id` int NOT NULL ,
 `user_id`  int NOT NULL ,
 `created`  datetime NOT NULL ,
 `order`    int NOT NULL ,

PRIMARY KEY (`album_id`, `media_id`),
KEY `fkIdx_198` (`album_id`),
CONSTRAINT `FK_198` FOREIGN KEY `fkIdx_198` (`album_id`) REFERENCES `albums` (`album_id`),
KEY `fkIdx_202` (`media_id`),
CONSTRAINT `FK_202` FOREIGN KEY `fkIdx_202` (`media_id`) REFERENCES `media` (`media_id`),
KEY `fkIdx_205` (`user_id`),
CONSTRAINT `FK_205` FOREIGN KEY `fkIdx_205` (`user_id`) REFERENCES `users` (`user_id`)
);





-- ****************** SqlDBM: MySQL ******************;
-- ***************************************************;


-- ************************************** `buildings`

CREATE TABLE `buildings`
(
 `building_id`    int NOT NULL ,
 `name_short`     varchar(250) NOT NULL ,
 `name_long`      varchar(250) NOT NULL ,
 `geo_latitude`   decimal(16,8) NULL ,
 `geo_longitude`  decimal(16,8) NULL ,
 `address_number` int NULL ,
 `address_street` varchar(250) NULL ,
 `location_city`  varchar(250) NOT NULL ,
 `location_state` varchar(250) NOT NULL ,
 `location_zip`   varchar(250) NOT NULL ,

PRIMARY KEY (`building_id`)
);




-- Warning: You can generate script only for two tables at a time in your Free plan 
-- 
-- ****************** SqlDBM: MySQL ******************;
-- ***************************************************;


-- ************************************** `customers`

CREATE TABLE `customers`
(
 `customer_id` int NOT NULL ,
 `name_short`  varchar(250) NOT NULL ,
 `name_long`   varchar(250) NOT NULL ,

PRIMARY KEY (`customer_id`)
);






-- ****************** SqlDBM: MySQL ******************;
-- ***************************************************;


-- ************************************** `customers_departments`

CREATE TABLE `customers_departments`
(
 `customer_id`   int NOT NULL ,
 `created`       datetime NOT NULL ,
 `department_id` int NOT NULL ,

PRIMARY KEY (`customer_id`, `department_id`),
KEY `fkIdx_66` (`customer_id`),
CONSTRAINT `FK_66` FOREIGN KEY `fkIdx_66` (`customer_id`) REFERENCES `customers` (`customer_id`),
KEY `fkIdx_72` (`department_id`),
CONSTRAINT `FK_71` FOREIGN KEY `fkIdx_72` (`department_id`) REFERENCES `departments` (`department_id`)
);






-- ************************************** `customers_buildings`

CREATE TABLE `customers_buildings`
(
 `customer_id` int NOT NULL ,
 `created`     datetime NOT NULL ,
 `building_id` int NOT NULL ,

PRIMARY KEY (`customer_id`, `building_id`),
KEY `fkIdx_79` (`customer_id`),
CONSTRAINT `FK_79` FOREIGN KEY `fkIdx_79` (`customer_id`) REFERENCES `customers` (`customer_id`),
KEY `fkIdx_85` (`building_id`),
CONSTRAINT `FK_84` FOREIGN KEY `fkIdx_85` (`building_id`) REFERENCES `buildings` (`building_id`)
);





-- ****************** SqlDBM: MySQL ******************;
-- ***************************************************;


-- ************************************** `customers_users`

CREATE TABLE `customers_users`
(
 `customer_id` int NOT NULL ,
 `user_id`     int NOT NULL ,
 `lastlogin`   datetime NOT NULL ,
 `admin`       bit(1) NOT NULL ,
 `created`     datetime NOT NULL ,

PRIMARY KEY (`customer_id`, `user_id`),
KEY `fkIdx_27` (`customer_id`),
CONSTRAINT `FK_27` FOREIGN KEY `fkIdx_27` (`customer_id`) REFERENCES `customers` (`customer_id`),
KEY `fkIdx_33` (`user_id`),
CONSTRAINT `FK_32` FOREIGN KEY `fkIdx_33` (`user_id`) REFERENCES `users` (`user_id`)
);






-- ************************************** `customers_schools`

CREATE TABLE `customers_schools`
(
 `customer_id` int NOT NULL ,
 `created`     datetime NOT NULL ,
 `school_id`   int NOT NULL ,

PRIMARY KEY (`customer_id`, `school_id`),
KEY `fkIdx_50` (`customer_id`),
CONSTRAINT `FK_50` FOREIGN KEY `fkIdx_50` (`customer_id`) REFERENCES `customers` (`customer_id`),
KEY `fkIdx_59` (`school_id`),
CONSTRAINT `FK_59` FOREIGN KEY `fkIdx_59` (`school_id`) REFERENCES `schools` (`school_id`)
);





-- ****************** SqlDBM: MySQL ******************;
-- ***************************************************;


-- ************************************** `departments`

CREATE TABLE `departments`
(
 `department_id` int NOT NULL ,
 `name_short`    varchar(250) NOT NULL ,
 `name_long`     varchar(250) NOT NULL ,

PRIMARY KEY (`department_id`)
);






-- ************************************** `directories`

CREATE TABLE `directories`
(
 `directory_id` int NOT NULL ,
 `name`         varchar(250) NOT NULL ,
 `description`  mediumtext NULL ,
 `contents`     longtext NOT NULL ,
 `created`      datetime NOT NULL ,
 `customer_id`  int NOT NULL ,
 `user_id`      int NOT NULL ,

PRIMARY KEY (`directory_id`),
KEY `fkIdx_172` (`customer_id`),
CONSTRAINT `FK_172` FOREIGN KEY `fkIdx_172` (`customer_id`) REFERENCES `customers` (`customer_id`),
KEY `fkIdx_178` (`user_id`),
CONSTRAINT `FK_178` FOREIGN KEY `fkIdx_178` (`user_id`) REFERENCES `users` (`user_id`)
);





-- ****************** SqlDBM: MySQL ******************;
-- ***************************************************;


-- ************************************** `media`

CREATE TABLE `media`
(
 `media_id`          int NOT NULL ,
 `user_id`           int NOT NULL ,
 `customer_id`       int NOT NULL ,
 `name`              varchar(250) NULL ,
 `file_name`         varchar(250) NOT NULL ,
 `created`           datetime NOT NULL ,
 `file_size`         int NOT NULL ,
 `description`       mediumtext NULL ,
 `file_type`         varchar(250) NOT NULL ,
 `dimensions_height` int NULL ,
 `dimensions_width`  int NULL ,

PRIMARY KEY (`media_id`),
KEY `fkIdx_181` (`user_id`),
CONSTRAINT `FK_181` FOREIGN KEY `fkIdx_181` (`user_id`) REFERENCES `users` (`user_id`),
KEY `fkIdx_184` (`customer_id`),
CONSTRAINT `FK_184` FOREIGN KEY `fkIdx_184` (`customer_id`) REFERENCES `customers` (`customer_id`)
);






-- ****************** SqlDBM: MySQL ******************;
-- ***************************************************;


-- ************************************** `floors`

CREATE TABLE `floors`
(
 `floor_id`    int NOT NULL ,
 `building_id` int NOT NULL ,
 `name`        varchar(250) NOT NULL ,
 `order`       int NOT NULL ,
 `notes`       mediumtext NULL ,
 `layout`      varchar(250) NULL ,

PRIMARY KEY (`floor_id`),
KEY `fkIdx_123` (`building_id`),
CONSTRAINT `FK_123` FOREIGN KEY `fkIdx_123` (`building_id`) REFERENCES `buildings` (`building_id`)
);







-- ****************** SqlDBM: MySQL ******************;
-- ***************************************************;


-- ************************************** `players`

CREATE TABLE `players`
(
 `player_id`     int NOT NULL ,
 `touch_enabled` bit(1) NOT NULL ,
 `name_short`    varchar(250) NOT NULL ,
 `name_long`     varchar(250) NOT NULL ,
 `customer_id`   int NOT NULL ,
 `floor_id`      int NOT NULL ,

PRIMARY KEY (`player_id`),
KEY `fkIdx_108` (`customer_id`),
CONSTRAINT `FK_108` FOREIGN KEY `fkIdx_108` (`customer_id`) REFERENCES `customers` (`customer_id`),
KEY `fkIdx_120` (`floor_id`),
CONSTRAINT `FK_120` FOREIGN KEY `fkIdx_120` (`floor_id`) REFERENCES `floors` (`floor_id`)
);






-- ************************************** `players_albums`

CREATE TABLE `players_albums`
(
 `player_id` int NOT NULL ,
 `album_id`  int NOT NULL ,
 `user_id`   int NOT NULL ,
 `created`   datetime NOT NULL ,
 `order`     int NOT NULL ,

PRIMARY KEY (`player_id`, `album_id`),
KEY `fkIdx_136` (`player_id`),
CONSTRAINT `FK_136` FOREIGN KEY `fkIdx_136` (`player_id`) REFERENCES `players` (`player_id`),
KEY `fkIdx_140` (`album_id`),
CONSTRAINT `FK_140` FOREIGN KEY `fkIdx_140` (`album_id`) REFERENCES `albums` (`album_id`),
KEY `fkIdx_143` (`user_id`),
CONSTRAINT `FK_143` FOREIGN KEY `fkIdx_143` (`user_id`) REFERENCES `users` (`user_id`)
);





-- ****************** SqlDBM: MySQL ******************;
-- ***************************************************;


-- ************************************** `users`

CREATE TABLE `users`
(
 `user_id`                int NOT NULL ,
 `name_first`             varchar(100) NOT NULL ,
 `name_last`              varchar(100) NOT NULL ,
 `username`               varchar(100) NOT NULL ,
 `password`               varchar(100) NOT NULL ,
 `gt_id`                  varchar(100) NULL ,
 `avatar`                 varchar(100) NULL ,
 `contact_phone_areacode` int NULL ,
 `contact_phone_number`   int NULL ,
 `contact_email`          varchar(100) NULL ,
 `created`                datetime NOT NULL ,

PRIMARY KEY (`user_id`)
);






-- ************************************** `schools`

CREATE TABLE `schools`
(
 `school_id`  int NOT NULL ,
 `name_short` varchar(250) NOT NULL ,
 `name_long`  varchar(250) NOT NULL ,

PRIMARY KEY (`school_id`)
);





