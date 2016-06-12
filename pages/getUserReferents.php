<?php
	include 'connect.php';
	$sql = "SELECT * FROM Referents WHERE jeune_id = '".$_POST['parameter']."'";
	$result = $conn->query($sql);
	$res = array();
	if ($result->num_rows > 0) {
	    // output data of each row
	    while($row = $result->fetch_assoc()) {
	    	array_push($res,json_encode(array('prenom' => $row['firstname'], 
	    					   'nom' => $row['lastname'],
	    					   'datedenaissance' => $row['birthdate'],
	    					   'reseausocial' => $row['reseausocial'],
	    					   'reseausocial1' => $row['reseausocial1'],
	    					   'reseausocial2' => $row['reseausocial2'],
	    					   'email' => $row['email'],
	    					   'presentation' => $row['presentation'],
	    					   'duree' => $row['duree'],
	    					   'commentaire' => $row['commentaire'],
	    					   'unique_id' => $row['unique_id'],
	    					   'etat' => $row['etat'],
	    					   'se' => $row['se']
	    					   )));
	    }
	   	echo json_encode($res);
	} else {
	    echo json_encode(array());
	}
	$conn->close();
?>