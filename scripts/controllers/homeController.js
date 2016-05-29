app.controller('HomeController', ['$scope', function($scope){
	
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

	$scope.openClose = function ($index)
	{
		if ($scope.titles[$index].selected == false)
		{
			$scope.titles[$index].selected = true;
		}
		else 
		{
			$scope.titles[$index].selected = false;
		}
	}

	$scope.menuItems = [
							{
								content : 'JEUNE',
								href : '/#/jeune/',
								color : '#ff375a',
								link : '/images/jeunes.svg',
								style : {'color': '#ff375a',
		 								 'border' : '1px solid '+ '#ff375a'
		 								},
								selected : false
							},
							{
								content : 'REFERENT',
								href : '/#/referent',
								color: '#00ff00',
								selected : false
							},
							{
								content : 'CONSULTANT',
								href : '/#/consultant',
								color : '#0000ff',
								selected : false
							},
							{
								content : 'PARTENAIRES',
								href : '/#/partenaires',
								color : '#333333',
								selected : false
							}
					   ];

	$scope.changeBG = function($index,idx) {
		if (idx == 0)
		{
			$scope.menuItems[$index].style.border = '1px solid ' + scope.menuItems[$index].color;
		}
		else
		{
			$scope.menuItems[$index].style.border = '1px solid #FFFFFF';
			$scope.menuItem[$index].style['border-bottom'] = "1px solid "+ scope.menuItems[$index].color;
		}
	}

}]);