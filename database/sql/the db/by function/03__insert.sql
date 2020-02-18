-- Customers & Users ---------------------------------------------------------------------------------------------------


-- create customers
insert into customers
     (name_short, name_long)
values 
     ("admissions", "The Office of Admissions"),
     ("arch", "The School of Architecture");

-- create users
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



-- Schools & Departments ---------------------------------------------------------------------------------------------------


-- create a school
insert into schools
     (name_short, name_long, logo, url)
values 
     ("arch", "The School of Architecture", "arch-logo.png", "http://arch.gatech.edu");

-- create a department
insert into departments
     (name_short, name_long, logo, url)
values 
     ("admissions", "The Office of Admissions", "logo.jpeg", NULL);

-- match admissions and crc to school of architecture.
insert into customers_schools
     (customer_id, school_id)
values 
     (1, 1),
     (2, 1);

-- match admissions to office of admissions.
insert into customers_departments
     (customer_id, department_id)
values 
     (1, 1);



-- Buildings & Floors ---------------------------------------------------------------------------------------------------


-- create two buildings
insert into buildings
     (
          name_short, 
          name_long, 
          location_city, 
          location_state, 
          location_zip, 
          floors_underground,
          address_number,
          address_street,
          geo_latitude,
          geo_longitude,
          image
     )
values 
     (
          "student_success_center",
          "Bill Moore Student Success Center",
          "Atlanta",
          "GA",
          "30332",
          0,
          "219",
          "Uncle Heinie Way",
          33.772565,
          -84.393945,
          "bill-moore-center.jpg"
     ),
     (
          "arch_east",
          "Architecture Building (East)",
          "Atlanta",
          "GA",
          "30332",
          2,
          "245",
          "4th Street, NW, Suite 351",
          33.776109,
          -84.395456,
          "arch_east.png"
     );

-- create four floors for two buildings.
insert into floors
     (`building_id`, `name`, `order`, `notes`, `floorplan`)
values
     -- Bill More Student Success Center - 1 floor.
     (1, "Main Lobby", 0, null, null),
     -- Architecture East - 3 floors.
     (2, "Architecture Lobby", 0, null, null),
     (2, "Floor 1", 1, null, null),
     (2, "Second Floor", 2, null, null);

-- match customers and buildings.
insert into customers_buildings
     (customer_id, building_id)
values 
     -- arch -> arch_east
     (2, 2),
     -- admissions -> arch_east
     (1, 2),
     -- admissions -> bill_moore
     (1, 1);



-- Buildings & Floors ---------------------------------------------------------------------------------------------------


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



-- Playlists ---------------------------------------------------------------------------------------------------


drop table if exists playlists;

