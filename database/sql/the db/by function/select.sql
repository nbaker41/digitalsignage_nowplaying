-- Customers & Users ---------------------------------------------------------------------------------------------------


-- show all accounts - user, company, and admin status
SELECT customers.customer_id, customers.name_short, users.user_id, users.name_first, users.name_last, users.ddst_admin, customers_users.admin
FROM customers_users
JOIN customers
ON customers_users.customer_id = customers.customer_id
JOIN users
ON customers_users.user_id = users.user_id;