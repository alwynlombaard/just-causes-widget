var generatorApp = angular.module("generatorApp", []); 

generatorApp.factory('guid', function() {
  return {
    generate: function(){
		var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
			return v.toString(16);
		});     
		return guid;
	}
  };
});

generatorApp.controller("AppCtrl", function ($scope, $window, $http, guid){
	$scope.jgAccount = "";
	$scope.jgAccount64 = function(){return $window.btoa($scope.jgAccount);};
	$scope.guid = guid.generate();
	$scope.notification = "";
	$scope.accountExists = false;
	
	$scope.preview = function(){
		var $ = angular.element;
		window.JustCauses = null;
		$("[src*='just-causes-1.0.0.js']").remove();
		$(".just-causes-widget").remove();
		var s=document.createElement('script');
		s.type='text/javascript';
		s.async=true;
		s.src="https://just-causes.azurewebsites.net/just-causes-1.0.0.js?jgaccount=" + $scope.jgAccount64();
		var embedder = document.getElementById('previewWidget');
		embedder.parentNode.insertBefore(s, embedder);
	};
	
	$scope.checkAccount = function() {
		$http.jsonp("https://api.justgiving.com/4066ece8/v1/account/" + $scope.jgAccount + "/pages?callback=JSON_CALLBACK&format=json")
		.success(function(data, status, headers, config){
			$scope.notification = "";
			$scope.accountExists = true;
			$scope.preview();
		})
		.error(function(data, status, headers, config) {
			$scope.notification = "Sorry, we were unable to retrieve your details from JustGiving. Are you sure " + $scope.jgAccount + " is registered with JustGiving?";
			$scope.accountExists = false;
		});
		
		$scope.hello = function(){};
		
	};
});




