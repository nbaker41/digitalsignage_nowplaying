<?php  

// check to see if the "upload" option is available
    if(isset($_POST['upload'])) {

    // define the filepath for the new file
        $target = "../images/".basename($_FILES['image']['name']);

    // establish a database connection (server, un, pw, db)
        $db = mysqli_connect("localhost", "ddst_user", "DIGITAL!!", "digitalsign_files");

        $image = $_FILES['image']['name'];
        $file = $_FILES['image'];
        $text = $_POST['text'];

        $sql = "INSERT INTO images (image, text, file) VALUES ('$image', '$text', '$file')";
        mysqli_query($db, $sql);

    // move uploaded files to the images folder
        if (move_uploaded_file($_FILES['image']['tmp_name'], $target)){
            $msg = "Image uploaded successfully.";
        } else {
            $msg = "There was a problem uploading.";
        }

        echo $msg;

    }

?>