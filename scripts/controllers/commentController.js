app.controller('CommentController', ['$scope','$location', function($scope,$location){
		 $scope.connect = false;
	$scope.titles = [
		{ 
		  title : 'De quoi s\'agit il?',
		  contenu : ['D\'une opportunité : celle qu\'un engagement quel qu\'il soit puisse être considérer à sa juste valeur! Tout expérience est source d\'enrichissement et doit d\'être reconnu largement. Elle révèle un potentiel, l\'expression d\'un savoir-être à concrétiser']
		},
		{
		  title : "A qui s’adresse-t’il?",
		  contenu : [
		  			 "A vous, jeunes entre 16 et 30 ans, qui vous êtes investis spontanément dans une association ou dans tout type d’action formelle ou informelle, et qui avez partagé de votre temps, de votre énergie, pour apporter un soutien, une aide, une compétence.",
		  			 "A vous, responsables de structures ou référents d’un jour, qui avez croisé la route de ces jeunes et avez bénéficié même ponctuellement de cette implication citoyenne ! C’est l’occasion de vous engager à votre tour pour ces jeunes en confirmant leur richesse pour en avoir été un temps les témoins mais bénéficiaires !",
		  			 "A vous, employeurs, recruteurs en ressources humaines, représentants d’organismes de formation, qui recevez ces jeunes, pour un emploi, un stage, un cursus de qualification, pour qui le savoir-être constitue le premier fondement de toute capacité humaine."
		  			]
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
			if (cle == 'inscription')
			{
				$location.path('/jeune/');
			}

		}

}]);