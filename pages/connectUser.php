<?php
	include 'connect.php';
	 $result = $conn->query("SELECT * FROM Jeunes WHERE (email='".$_POST['email']."' AND password='".$_POST['password']."') LIMIT 1");

     // chercher tableau associatif
     $row = $result->fetch_assoc();

     if (count($row) == 0)
     {
     	header('Location: http://gursoyege.github.io/#/');
     }
     else
     {
          header('Location: http://gursoyege.github.io/#/profil/'.sha1($row['password']));
     }
?>
