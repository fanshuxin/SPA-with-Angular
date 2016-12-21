(function(){
'use strict';
angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',FoundItemsDirective)
.constant('ApiBasePath',"https://davids-restaurant.herokuapp.com");

function FoundItemsDirective(){
	var ddo={
    templateUrl: 'menuList.html',
    scope:{
       items:'<', 
       count:'<',             
       onRemove:'&'
    },
  controller:foundItemsDirectiveController,
  controllerAs:'list',
  bindToController:true
	};
	return ddo;
}

function foundItemsDirectiveController(){
 var list=this;
}

NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
	var list=this;
  
  list.items=[];
  list.count=0;
//list.items=MenuSearchService.getItems();
	list.found=function(){
 list.count=1;
 MenuSearchService.getMatchedMenuItems(list.searchTerm)
.then(function(foundItems){

list.items=foundItems;
})
.catch(function(error){
  console.log(error);
})
   

	};
  

  list.removeItem=function(itemIndex){
MenuSearchService.removeItem(itemIndex);
  };


}

MenuSearchService.$inject=['$http','ApiBasePath']
function MenuSearchService($http,ApiBasePath){
	var service=this;
  var foundItems
	service.getMatchedMenuItems=function(searchTerm){
   
    return $http({
    	method:"GET",
    	url:(ApiBasePath+"/menu_items.json")  

    })
    .then (function(result){
      var menuItems=result.data.menu_items;  
     foundItems=[];
for(var i=0;i<menuItems.length;i++)
{
  if(searchTerm!==undefined && searchTerm.trim()!=""&&menuItems[i].description.indexOf(searchTerm.toLowerCase())!==-1)
    {
      foundItems.push(menuItems[i]);}
}

    return foundItems;
    });
   
	};

  service.removeItem=function(itemIndex){
    foundItems.splice(itemIndex,1);
  };
   
}
})();