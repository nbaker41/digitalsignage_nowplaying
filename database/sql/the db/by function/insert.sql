-- Customers & Users ---------------------------------------------------------------------------------------------------


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


-- Customers & Users ---------------------------------------------------------------------------------------------------


