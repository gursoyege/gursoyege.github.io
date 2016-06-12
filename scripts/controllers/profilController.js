app.controller('ProfilController', ['$scope','$location','$routeParams','$http','$rootScope', function($scope,$location,$routeParams,$http,$rootScope){
	$rootScope.user = {};

	$.post( "/pages/getUserInfo.php", { "parameter": $routeParams.id }, function( data ) {
  		$rootScope.user = JSON.parse(data);
  	});

	$.post( "/pages/getUserReferents.php", { "parameter": $routeParams.id }, function( data ) {
  		$rootScope.userReferents = JSON.parse(data);
  	});

	alert("Ne partagez ce lien avec personne");
	if ($rootScope.user.prenom === undefined)
	{
			alert("Vous n'êtes pas inscrit");
			$location.path('/jeune/');
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

}]);