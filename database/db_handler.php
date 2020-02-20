<?php

     class DB_Connection{
     // define db parameters -- plesk server
          // private $DB_NAME = "digitalsign_platform";
          // private $USERNAME = "ddst_user";
          // private $PASSWORD = "digital!!";
          // private $SERVER_NAME = "localhost";
     // define db parameters -- wampserver
          private $DB_NAME = "digitalsign_platform";
          private $USERNAME = "root";
          private $PASSWORD = "";
          // mysql runs on port 3306.
          private $SERVER_NAME = "localhost:3306";
     // create connection based on above.
          public function connect(){
               $conn = new mysqli($this->SERVER_NAME, $this->USERNAME, $this->PASSWORD, $this->DB_NAME);
               return $conn;
          }
     };

     class DB_Handler{
     // attach a new DB_Connection instance to this class.
          private $db = null;
          public function __construct(){
               $this->db = new DB_Connection();
          }
     // on page load, retrieve all customers..
          public function getCustomers(){
          // create connection to a db.
               $conn = $this->db->connect();
          // write SQL query
               $query = "SELECT * FROM customers";
               $result = $conn->query($query) or die($conn->error.__LINE__);
          // create array container
               $data = array();
          // fill array with result data
               if($result->num_rows > 0){
                    while($row = $result->fetch_assoc()){
                         $data[] = $row;
                    }
               }
          // close connection
               $conn->close();
               return $data;
          }
     };

?>