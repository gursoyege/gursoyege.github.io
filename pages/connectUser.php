<?php
	include 'connect.php';
	 $result = $conn->query("SELECT * FROM Jeunes WHERE (email='".$_POST['email']."' AND password='".$_POST['password']."') LIMIT 1");

     /* fetch associative array */
     $row = $result->fetch_assoc();

     if (count($row) == 0)
     {
     	header('Location: http://eisti.kaanyagci.com/#/'); 
     }
     else
     {
          header('Location: http://eisti.kaanyagci.com/#/profil/'.sha1($row['password']));      
     }
?>