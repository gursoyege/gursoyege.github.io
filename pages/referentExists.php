<?php
	include 'connect.php';
	$sql = "SELECT * FROM Referents WHERE unique_id = '".$_POST['parameter']."'";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
	   		echo json_encode(array('response' => 'true'));
	    } else {
	   		echo json_encode(array('response' => 'false'));
	}
	$conn->close();
?>
