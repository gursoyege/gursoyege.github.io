<?php
	include 'connect.php';
	$sql = "SELECT * FROM Jeunes WHERE SHA1(password) = '".$_POST['parameter']."'";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
	    // les données de sortie de chaque rangée
	    while($row = $result->fetch_assoc()) {
	    	echo json_encode(array('prenom' => $row['firstname'],
	    					   'nom' => $row['lastname'],
	    					   'password' => $row['password'],
	    					   'datedenaissance' => $row['birthdate'],
	    					   'reseausocial' => $row['reseausocial'],
	    					   'reseausocial1' => $row['reseausocial1'],
	    					   'reseausocial2' => $row['reseausocial2'],
	    					   'email' => $row['email'],
	    					   'engagement' => $row['engagement'],
	    					   'duree' => $row['duree'],
	    					   'message' => $row['message'],
	    					   'se' => $row['se']
	    					   ));
	    }
	} else {
	    echo json_encode(array());
	}
	$conn->close();
?>
