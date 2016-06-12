app.controller('ProfilReferentsController', ['$scope','$routeParams','$rootScope','$location', function($scope,$routeParams,$rootScope,$location){

	if (($rootScope.user == undefined) || ($rootScope.userReferents == undefined))
	{
		$location.path('/profil/'+$routeParams.id);
	}

	$scope.unique_id = $routeParams.id;

	$scope.nouveauRef = function () {
		if (($scope.referentMail != '') && ($scope.referentMail != undefined))
		{
			$.post( "/pages/newReferent.php", { "email": $scope.referentMail, "jeune_id": $routeParams.id }, function( data ) {
		  		 if (JSON.parse(data).unique_id)
		  		 {
		  		 	$rootScope.userReferents.push({'email' : $scope.referentMail, 'lien'  : 'http://eisti.kaanyagci.com/#/referent/'+JSON.parse(data).unique_id, 'etat' : "en attente"});
		  		 }
		  		 else
		  		 {
		  		 	alert(JSON.parse(data).error);
		  		 }
		  	});
		}
		else
		{
			alert('Veuillez écrire un adresse mail de référent!');
		}
	}
	$scope.go = function (cle)
		{
			if (cle == 'editProfil')
			{
				$location.path('/profil/'+$routeParams.id+'/edit');
			}
			if (cle == 'home')
			{
				$location.path('/profil/'+$routeParams.id);
			}
			if (cle == 'referents')
			{
				$location.path('/profil/'+$routeParams.id+'/referents');
			}

		}
}])