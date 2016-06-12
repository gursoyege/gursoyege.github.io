app.controller('NewReferentController', ['$scope', function($scope){

	var limit = 4;
		$('input.competence').on('change', function(evt) {
		   if($(this).siblings(':checked').length >= limit) {
		       this.checked = false;
		   }
		});
	
}])