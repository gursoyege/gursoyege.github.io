app.controller('ProfilEditController', ['$scope','$rootScope','$location','$routeParams', function($scope,$rootScope,$location,$routeParams){
	
	$scope.dd = true;
	if (($rootScope.user == undefined) || ($rootScope.userReferents == undefined))
	{
		$location.path('/profil/'+$routeParams.id);
	}
	var competences = $rootScope.user.se.split(', ');
	for (var i=0;i<(competences.length-1);i++)
	{
		$("#"+competences[i]).prop("checked", true);
	}
	var limit = 4;
	$('input.competence').on('change', function(evt) {
		if($(this).siblings(':checked').length >= limit) {
		    this.checked = false;
		}
	});

	$scope.unique_id = $routeParams.id;
	
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