<?php
	include 'connect.php';
	$ses = "";
	if(!empty($_POST['savoirEtre'])) {
	    foreach($_POST['savoirEtre'] as $se) {
	    		$ses = $ses . $se . ', ';
	    	}
		}
	$sql = "INSERT INTO Jeunes (firstname, lastname, birthdate, password, reseausocial, reseausocial1, reseausocial2, email, engagement, duree, message,se) VALUES ('".$_POST['prenom']."', '".$_POST['nom']."', '".$_POST['datedenaissance']."', '".$_POST['motdepasse']."', '".$_POST['reseausocial']."', '".$_POST['reseausocial1']."',
'".$_POST['reseausocial2']."', '".$_POST['email']."', '".$_POST['engagement']."', '".$_POST['duree']."', '".$_POST['message']."', '".$ses."')";

	if ($conn->query($sql) === TRUE) {
		echo "Nouveau utilisateur est ajouté avec succès";
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}


	$conn->close();
	header('Location: http://gursoyege.github.io/#/'); 

?>
