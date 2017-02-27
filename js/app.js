
var slides = '';
var app = angular.module('myApp', []);
app.controller('Mycontrol', function($scope, $http) {
  $http.get("https://api.hermo.my/test/banner")
  .then(function(response) {
      $scope.myWelcome = response.data;
   
	   $.each(response.data, function(ky,valu) {                    
		var img = valu.image;
		
		slides = slides+ '<li><img src="'+img.desktop+'"'+'></li>';
		
		
	 });
	 document.getElementById("slides").innerHTML = slides;
	 
	$('.flexslider').flexslider({
						animation: "fade",
						slideshowSpeed: 4000,
						animationSpeed: 600,
						controlNav: false,
						directionNav: true,
						controlsContainer: ".flex-container" // the container that holds the flexslider
					});
	
  });
});



var bsel = '';
var app = angular.module('gopz', []);
app.controller('banner', function($scope, $http) {
  $http.get("https://api.hermo.my/test/best-selling")
  .then(function(response) {
      $scope.test = response.data;
   
   angular.forEach(response.data, function(value, key) {
    
    var img = value.image;
    var id= value.id;
    
     bsel = bsel+ '<span class ="pro"><li class ="span3" id="bestselling_"'+value.id+'><img alt="'+value.display_name+'" src="'+img.large+'"'+'><span>'+value.display_name+'</span> </li></span>';

    
   console.log(key + ': ' + value);
 });

document.getElementById("rep-product").innerHTML = bsel;
                 
});
});


