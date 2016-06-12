<?php
	include 'connect.php';
	$ses = "";
	if(!empty($_POST['savoirEtre'])) {
	    foreach($_POST['savoirEtre'] as $se) {
	    		$ses = $ses . $se . ', ';
	    	}
		}
	$uid = $_POST['unique_id'];

	echo $mail;
	echo '<br>';
	$sql = "UPDATE Jeunes SET (prenom='".$_POST['prenom']."', nom='".$_POST['nom']."', datedenaissance='".$_POST['datenaissance']."', reseausocial='".$_POST['reseausocial']."', reseausocial1='".$_POST['reseausocial1']."',
reseausocial2='".$_POST['reseausocial2']."',  presentation='".$_POST['engagement']."', duree='".$_POST['duree']."', commentaire='".$_POST['message']."', se='".$ses."', etat='valide') WHERE unique_id='".$uid."'";

	echo $sql;
	echo "<br>";
	if ($conn->query($sql) === TRUE) {
	    echo "Record updated successfully";
	} else {
	    echo "Error updating record: " . $conn->error;
	}

	$conn->close();
?>
