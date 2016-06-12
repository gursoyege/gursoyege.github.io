<?php
	include 'connect.php';
	include 'functions.php';
	$randomstr = generateRandomString();
	$sql = "INSERT INTO Referents (email, unique_id, etat, jeune_id) VALUES ('".$_POST['email']."', '".$randomstr."', '".'en attente'."', '".$_POST['jeune_id']."')";

	if ($conn->query($sql) === TRUE) {
		echo json_encode(array('unique_id' => $randomstr));
	} else {
		echo json_encode(array('error' => ''. $sql . $conn->error)); 
	}


	$conn->close();
?>
