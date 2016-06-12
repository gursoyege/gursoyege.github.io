app.controller('NewReferentController', ['$scope','$routeParams','$location', function($scope,$routeParams,$location){
	$scope.unique_id = $routeParams.id;
	$.post( "/pages/referentExists.php", { "parameter": $routeParams.id }, function( data ) {
  		if ((JSON.parse(data).response) == 'false')
  		{
  			$location.path('/');
  		}
  	});
	var limit = 4;
		$('input.competence').on('change', function(evt) {
		   if($(this).siblings(':checked').length >= limit) {
		       this.checked = false;
		   }
		});
	
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