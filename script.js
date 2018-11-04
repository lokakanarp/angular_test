(function(){

var app = angular.module('myApp', ['ngAnimate']);
	

app.controller('myCtrl', function($scope) {
	$scope.onFocus = function (){ 
		$scope.focus = true; 
		$scope.placeholder = "Skriv in ditt förnamn";
	};
	$scope.onBlur = function () {
		$scope.blur = true;
	}
	$scope.toggleVisibility = function () {
		$scope.visiblePassword = !$scope.visiblePassword;
	}
	
  	$scope.userFirstName = "";
});

    app.directive("mydirective", function() {
        return {
            template : "<h1>Made by a directive!</h1>"
        };
    });
	
})();