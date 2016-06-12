app.controller('JeunesController', ['$scope','$location', function($scope,$location){
		$scope.connect = false;
		
		$scope.go = function (cle)
		{
			if (cle == 'comment')
			{
				$location.path('/comment/');
			}
			if (cle == 'home')
			{
				$location.path('/');
			}
			if (cle == 'inscription')
			{
				$location.path('/jeune/');
			}
		}

		$scope.error = false;
		
		$scope.errorMessage = 'Ceci est un message d\'erreur';

		$scope.jeune = {
			name: '',
			surname: '',
			birthdate : '',
			reseau1 : '',
			reseau2 : '',
			reseau3 : '',
			email : '',
			engagement : '',
			duree : '',
			message : '',
			competence1 : '',
			competence2 : '',
			competence3 : '',
			competence4 : ''
		};

		$scope.showJeune = function () {
			alert($scope.jeune.name);
		}
		
		/* Limite 4 competence */
		var limit = 4;
		$('input.competence').on('change', function(evt) {
		   if($(this).siblings(':checked').length >= limit) {
		       this.checked = false;
		   }
		});


		
}]);