<?php
	include 'connect.php';
	$ses = "";
	if(!empty($_POST['savoirEtre'])) {
	    foreach($_POST['savoirEtre'] as $se) {
	    		$ses = $ses . $se . ', ';
	    	}
		}
	$mail = $_POST['email'];

	echo $mail;
	echo '<br>';
	$sql = "UPDATE Jeunes SET (firstname='".$_POST['prenom']."', lastname='".$_POST['nom']."', birthdate='".$_POST['datenaissance']."', reseausocial='".$_POST['reseausocial']."', reseausocial1='".$_POST['reseausocial1']."', 
reseausocial2='".$_POST['reseausocial2']."', email='".$_POST['email']."', engagement='".$_POST['engagement']."', duree='".$_POST['duree']."', message='".$_POST['message']."', se='".$ses."') WHERE email='".$mail."'";
	
	echo $sql;
	echo "<br>";
	if ($conn->query($sql) === TRUE) {
	    echo "Record updated successfully";
	} else {
	    echo "Error updating record: " . $conn->error;
	}

	$conn->close();
?>