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
          private $SERVER_NAME = "localhost:3306"; // mysql runs on port 3306.
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

     // all customers..
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

     // players by customer..
          public function getPlayers($customer_id){
          // create connection to a db.
               $conn = $this->db->connect();
          // write SQL query
		if ($customer_id == null){
			$query = "               
				SELECT
				     *
				FROM players
			";
		} else {
			$query = "               
				SELECT
					*
				FROM players
				WHERE customer_id = 
			".$customer_id;
		}
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

     // playlists by player..
          public function getPlaylists($player_id){
          // create connection to a db.
               $conn = $this->db->connect();
          // write SQL query
               $query = "               
                    SELECT
                         players_playlists.player_id,
                         players_playlists.playlist_id,
                         players_playlists.order,
                         playlists.name,
                         playlists.type,
                         playlists.description
                    FROM players_playlists
                    JOIN playlists
                    ON playlists.playlist_id = players_playlists.playlist_id
                    WHERE players_playlists.player_id = 
               "
               .$player_id
               ." ORDER BY players_playlists.order ASC;";
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

     // media or directories by playlist..
          public function getPlaylistItems($playlist_id, $playlist_type){
          // create connection to a db.
               $conn = $this->db->connect();
          // write SQL query
               if ($playlist_type == "media"){
                    $query = '               
                         SELECT
                              playlists_media.playlist_id as "playlist_id",
                              playlists_media.order as "order",
                              media.media_id as "media_id",
                              media.file_name as "file_name",
                              media.file_size as "file_size",
                              media.title as "title",
                              media.description as "description",
                              media.dimensions_width as "dimensions_width",
                              media.dimensions_height as "dimensions_height"
                         FROM playlists_media
                         JOIN media
                         ON media.media_id = playlists_media.media_id
                         WHERE playlists_media.playlist_id = 
                    '
                    .$playlist_id
                    ." ORDER BY playlists_media.order ASC;";
               } else {
                    $query = '               
                         SELECT
                              playlists_directories.playlist_id as "playlist_id",
                              playlists_directories.order as "order",
                              directories.directory_id as "directory_id",
                              directories.title as "title",
                              directories.file_contents as "file_contents",
                              directories.description as "description"
                         FROM playlists_directories
                         JOIN directories
                         ON directories.directory_id = playlists_directories.directory_id
                         WHERE playlists_directories.playlist_id = 
                    '
                    .$playlist_id
                    ." ORDER BY playlists_directories.order ASC;";
               }
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