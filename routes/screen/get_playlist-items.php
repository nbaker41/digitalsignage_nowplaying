<?php

// who's the customer?
     $playlist_id = $_GET['playlist_id'];
     $playlist_type = $_GET['playlist_type'];

// include database handler
     include("../../database/db_handler.php");

// create new dbhandler object, attach its get() to the result.
     $db = new DB_Handler();
     $result = $db->getPlaylistItems($playlist_id, $playlist_type);
     unset($db);

// return results
     echo json_encode($result);

?>