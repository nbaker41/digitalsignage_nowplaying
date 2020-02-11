<?php

// include database handler
     include("db_handler.php");

// create new dbhandler object, attach its get() to the result.
     $db = new DB_Handler();
     $result = $db->get();
     unset($db);

// return results
     echo json_encode($result);

?>