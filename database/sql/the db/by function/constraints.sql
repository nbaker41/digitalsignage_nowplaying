-- Customers & Users ---------------------------------------------------------------------------------------------------


ALTER TABLE `customers_users`
  ADD CONSTRAINT `customers_users_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`);
ALTER TABLE `customers_users`
  ADD CONSTRAINT `customers_users_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;