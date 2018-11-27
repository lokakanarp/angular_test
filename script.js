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
	
	$scope.carousel = (function(){
  var box = document.querySelector('.carouselbox');
  var next = box.querySelector('.next');
  var prev = box.querySelector('.prev');
  var items = box.querySelectorAll('.content li');
  var counter = 0;
  var amount = items.length;
  var current = items[0];
  
		
  box.classList.add('active');
  function navigate(direction) {
	current.classList.add('old')
    current.classList.remove('current');
	
    counter = counter + direction;
    if (direction === -1 && 
        counter < 0) { 
      counter = amount - 1; 
    }
    if (direction === 1 && 
        !items[counter]) { 
      counter = 0;
    }
	
    current = items[counter];
	current.classList.remove('old');
    current.classList.add('current');
	  
	
  }
  next.addEventListener('click', function(ev) {
    navigate(1);
  });
  prev.addEventListener('click', function(ev) {
    navigate(-1);
  });
  navigate(0);
})();
});

app.directive("mydirective", function() {
	return {
		template : "<h1>Made by a directive!</h1>"
	};
});
	
})();