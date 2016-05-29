app.controller('AccueilController', ['$scope','$location','$route', function($scope,$location,$route){
		$scope.connect = false;

		$scope.partenaires = [
			{
				name : 'Assises de la jeunesse Pyrénées-Atlantiques',
				bg : '/images/logo/ADLJPA.png'
			},
			{
				name : 'CAF',
				bg : '/images/logo/CAF.png'
			},
			{
				name : 'MSA l\'Assurance Maladie',
				bg : '/images/logo/MSA.png'
			},
			{
				name : 'Pyrénées Atlantiques Conseil Général',
				bg : '/images/logo/PACG.png'
			},
			{
				name : 'Région Aquitaine',
				bg : '/images/logo/RA.png'
			},
			{
				name : 'République Française',
				bg : '/images/logo/RF.png'
			},
			{
				name : 'Université de Pau et Des Pays De L\'Adour',
				bg : '/images/logo/UPPA.png'
			}
		];

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

			$route.reload();

		}

		function shuffle(array) {
  			var currentIndex = array.length, temporaryValue, randomIndex;

			 while (0 !== currentIndex) {

    		randomIndex = Math.floor(Math.random() * currentIndex);
    		currentIndex -= 1;

    		temporaryValue = array[currentIndex];
    		array[currentIndex] = array[randomIndex];
    		array[randomIndex] = temporaryValue;
  		}

  		$scope.partenaires = shuffle($scope.partenaires);

  		return array;
		}
}]);