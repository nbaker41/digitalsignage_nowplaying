-- Customers & Users ---------------------------------------------------------------------------------------------------


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



-- Schools & Departments ---------------------------------------------------------------------------------------------------


ALTER TABLE `customers_schools`
  ADD CONSTRAINT `customers_schools_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`);
ALTER TABLE `customers_schools`
  ADD CONSTRAINT `customers_schools_ibfk_2` FOREIGN KEY (`school_id`) REFERENCES `schools` (`school_id`);

ALTER TABLE `customers_departments`
  ADD CONSTRAINT `customers_departments_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`);
ALTER TABLE `customers_departments`
  ADD CONSTRAINT `customers_departments_ibfk_2` FOREIGN KEY (`department_id`) REFERENCES `departments` (`department_id`);



-- Schools & Departments ---------------------------------------------------------------------------------------------------


ALTER TABLE `customers_schools`
