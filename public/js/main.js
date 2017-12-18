function removeContact(id) {
	// window.location = "/";
	$.ajax({
		url: '/delete/'+id,
		type: 'DELETE',
		success: function(data) {
			window.location = "/";
		}
	});
}
angular.module('API', [])
.controller('Main',
	function($scope,$http) {
		$http.get("/api/getjson/").then(function(response) {
            	$scope.contact = response.data;

            });
	});