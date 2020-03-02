<?php

// who's the customer?
// $customer_id = null;
// $customer_id = $_GET['customer_id'];
// if (empty($customer_id)){
// 	$customer_id = null;
// } else {
// 	$customer_id = $_GET['customer_id'];
// }

$customer_id = $_GET['customer_id'];

if ($customer_id == "null"){
	$customer_id = null;
}



// include database handler
     include("../../database/db_handler.php");

// create new dbhandler object, attach its get() to the result.
     $db = new DB_Handler();
     $result = $db->getPlayers($customer_id);
     unset($db);

// return results
     echo json_encode($result);

?>