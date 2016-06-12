<?php
	include 'connect.php';
	$jeune_id = $_GET['jeune_id'];
	$sql = "SELECT * FROM Jeunes WHERE SHA1(password) = '".$jeune_id."'";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
	    // output data of each row
	    while($row = $result->fetch_assoc()) {
	    	$user = (array('prenom' => $row['firstname'],
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
	     header('Location: http://gursoyege.github.io/');      
	}


	$sql = "SELECT * FROM Referents WHERE jeune_id = '".$jeune_id."' AND etat='confirme'";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
	    // output data of each row
	    $referents = array();
	    while($row = $result->fetch_assoc()) {
	    	array_push($referents,array('prenom' => $row['prenom'],
	    					   'nom' => $row['nom'],
	    					   'password' => $row['password'],
	    					   'datedenaissance' => $row['datedenaissance'],
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
	}
?>
<link rel="stylesheet" href="/styles.css">
<header>
	<div class="menu">
		<div class="logo" ng-click="go('home');"></div>
</header>
<hr>

<div class="pageContent" style="margin-left : 3%;">
	<div id="profile">
		Profile
	</div>
	<div class="coteGauche">
			<label for="nom" class="signUpFormElement">Nom</label>
			<?php echo $user['nom'] ?>
			<label for="prenom" class="signUpFormElement">Prénom</label>
			<?php echo $user['prenom'] ?>
			<label for="datenaissance" class="signUpFormElement">Date de naissance</label>
			<?php echo $user['datedenaissance'] ?>
			<label for="reseausocial" class="signUpFormElement">Réseaux sociaux</label>
						<?php echo $user['reseausocial'] ?>

						<?php echo $user['reseausocial1'] ?>

						<?php echo $user['reseausocial2'] ?>

		</div>
		<div class="coteMilieu">
			<label for="email" class="signUpFormElement" >E-mail</label>
						<?php echo $user['email'] ?>

			<label for="engagement" class="signUpFormElement">Mon engagement</label>
						<?php echo $user['engagement'] ?>

			<label for="duree" class="signUpFormElement">Durée</label>
						<?php echo $user['duree'] ?>

			<label for="message" class="signUpFormElement">Message</label>
						<?php echo $user['message'] ?>

		</div>
		<div class="coteDroit">
			<label for="savoirEtre" class="signUpFormElement">Compétences</label><br>
						<?php echo $user['se'] ?>

		</div>
	<div id="referent">
		Ses référents
	</div>
	<div class="referentList">
		<div class="userReferent">
		<div class="refPrenom profilTitle">Prénom</div>
		<div class="refNom profilTitle">Nom</div>
		<div class="refdate profilTitle">Date de naissance</div>
		<div class="refReseau profilTitle">Réseaux social</div>
		<div class="refReseau1 profilTitle">Réseaux social1</div>
		<div class="refReseau2 profilTitle">Réseaux social2</div>
		<div class="refMail profilTitle">E-mail</div>
		<div class="refPresentation profilTitle">Presentation</div>
		<div class="refDuree profilTitle">Duree</div>
		<div class="refCommentaire profilTitle">Commentaire</div>
		<div class="refSe profilTitle">Savoir être</div>
		</div>
		<?php
			foreach ($referents as $value) {
				echo '<div class="userReferent">';
				echo '<div class="refPrenom">'.$value['prenom'].'</div>';
				echo '<div class="refNom">'.$value['nom'].'</div>';
				echo '<div class="refdate">'.$value['datedenaissance'].'</div>';
				echo '<div class="refReseau">'.$value['reseausocial'].'</div>';
				echo '<div class="refReseau1">'.$value['reseausocial1'].'</div>';
				echo '<div class="refReseau2">'.$value['reseausocial2'].'</div>';
				echo '<div class="refMail">'.$value['email'].'</div>';
				echo '<div class="refPresentation">'.$value['presentation'].'</div>';
				echo '<div class="refDuree">'.$value['duree'].'</div>';
				echo '<div class="refCommentaire">'.$value['commentaire'].'</div>';
				echo '<div class="refSe">'.$value['se'].'</div>';
				echo '</div>';
			}
		?>
	</div>

</div>
