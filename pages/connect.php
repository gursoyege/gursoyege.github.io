<?php
	$servername = "localhost";
	$username = "gursoyege";
	$password = "yKyO1Ek6fa";
	$dbname = "gursoyege";
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 
?>
