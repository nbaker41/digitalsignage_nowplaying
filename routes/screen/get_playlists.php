<?php

// who's the customer?

$player_id = $_GET['player_id'];

if ($player_id == "null"){
	$player_id = null;
}

// include database handler
     include("../../database/db_handler.php");

// create new dbhandler object, attach its get() to the result.
     $db = new DB_Handler();
     $result = $db->getPlaylists($player_id);
     unset($db);

// return results
//      echo json_encode($player_id);
     echo json_encode($result);

?>