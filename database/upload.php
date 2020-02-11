<?php

// include database handler
     include("../../database/db_handler.php");

// trying to pass along json from upload.js to upload.php
	$data = json_decode(file_get_contents("php://input"));  


// upload the file.
     if(!empty($_FILES)){
     // gather your variables, determine the file directory...
          $clientName = "admissions"; // eventually need to pass this from javascript
          $fileName = $_FILES['file']['name'];
          // $uploadPath = "../../files/media/".basename($fileName);
          $newUploadPath = "../../files/media/".$clientName."/".basename($fileName);
     // try and move the file
          if(move_uploaded_file($_FILES['file']['tmp_name'], $newUploadPath)){
          // create a new dbhandler object then use its save object to upload.
               $db = new DB_Handler();
               // $result = $db->save($fileName, "this is an image", $_FILES['file']);
               $result = $db->save($fileName);
               $msg = $fileName." uploaded to: ".$newUploadPath;
          } else{
               $msg = "File upload failed.";
          }
     } else{
     // if no file is detectd...
          $msg = "No file detected. :(";
     }

// return results
     echo $msg;

?>