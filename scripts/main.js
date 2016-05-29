/**
*  Module :  eistiProjet
*
* Description : Module contiens les règles générales de routage et tous les éléments de configuration de application eistiApp
*/
var app = angular.module('eistiProjet', ['ngRoute']);


/*
   App route providers -
*/

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when ('/', {
        templateUrl: 'pages/accueil.html',
        controller: 'AccueilController'
      }).
      when('/comment/', {
        templateUrl: 'pages/comment.html',
        controller: 'CommentController'
      }).
      when('/jeune/', {
        templateUrl: 'pages/jeunes.html',
        controller: 'JeunesController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);


/* function changeColor (i)
{
   if (i === 1)
   {
        $('header').css('color','#ff69b4');
   }
    if (i === 2)
   {
        $('header').css('color','#00ff00');
   }
    if (i === 3)
   {
        $('header').css('color','#0000ff');
   }
    if (i === 4)
   {
        $('header').css('color','#333333');
   }
}

function backToBlack () {
    $('header').css('color','#000000');
} */