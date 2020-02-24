<?php

// who's the customer?
     $customer_id = $_GET['customer_id'];

// include database handler
     include("../../database/db_handler.php");

// create new dbhandler object, attach its get() to the result.
     $db = new DB_Handler();
     $result = $db->getPlayers($customer_id);
     unset($db);

// return results
     echo json_encode($result);

?>