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

generatorApp.controller("AppCtrl", function ($scope, $window, guid){
	$scope.jgAccount = "";
	$scope.jgAccount64 = function(){return $window.btoa($scope.jgAccount);};
	$scope.guid = guid.generate();
});




