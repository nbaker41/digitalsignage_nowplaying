<?php

     class DB_Connection{
     // define db parameters
          // private $DB_NAME = "digitalsignage_files";
          private $DB_NAME = "crdunsto_ddst_files";
          private $USERNAME = "crdunsto_ddst";
          private $PASSWORD = "digital!!";
     // the work computer didn't allow wampserver to
     // use the default port... thus, I use port 81,
     // giving us the ":8081" suffix.
          private $SERVER_NAME = "localhost";
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
     // insert into images.
          public function save($image){
          // create connection to a db.
               $conn = $this->db->connect();
          // write SQL query
               $query = "INSERT INTO example (image_name) VALUES ('$image')";
               $result = $conn->query($query) or die($conn->error.__LINE__);
          // close connection
               $conn->close();
               return $result;
          }
     // retrieve from db.
          public function get(){
          // create connection to a db.
               $conn = $this->db->connect();
          // write SQL query
               $query = "SELECT * FROM example";
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