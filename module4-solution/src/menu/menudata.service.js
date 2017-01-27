(function(){
	'use strict';
	angular.module('Data')
	.service('MenuDataService',MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com"); 


MenuDataService.$inject=['$http','ApiBasePath','$q', '$timeout'];
function MenuDataService($http,ApiBasePath,$q, $timeout){
	var service=this;
	var categories=[];
    var menuItems=[];
	service.getAllCategories=function(){
		var deferred=$q.defer();
		var response=$http({
			method:"GET",
			url:(ApiBasePath+"/categories.json")
		})	
	.then(function (response) {
		console.log("categories: ");
	console.log(response.data); 
    categories= response.data; 
   }); 
	
	$timeout(function () {
		deferred.resolve(categories);
	},800);	
	return deferred.promise;
};
	service.getItemsForCategory=function(categoryShortName){
		var deferred=$q.defer();
		var response=$http({
			method:"GET",
			url:(ApiBasePath +"/menu_items.json"),
			params:{
				category:categoryShortName
			}
		})
		.then(function(response) {
			console.log('menuItems: ');
			console.log(response.data);
			console.log('params_category: '+categoryShortName) ;
            menuItems= response.data; 		
	});
		$timeout(function () {
			deferred.resolve(menuItems);
		},500);
		return deferred.promise;
};
}
})();