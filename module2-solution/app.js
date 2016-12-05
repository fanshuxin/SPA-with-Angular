(function(){
	'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);


ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
	var itemToBuy=this;
	this.itemToBuyList=ShoppingListCheckOffService.getToBuyItems();
	
	itemToBuy.buyItem=function(itemIdex){
		ShoppingListCheckOffService.buyItem(itemIdex);
	}
}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
var itemBought=this;
this.itemBoughtList=ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService(){
var service=this;
var toBuyItemList=[{ name: "cookies", quantity: 10 },{ name: "chips", quantity: 5 },
{ name: "Linda", quantity: 4 },{ name: "ice creame", quantity: 2},{ name: "pizza", quantity: 4 },
{ name: "cookies", quantity: 10 },{ name: "cookies", quantity: 10 }];;
var boughtItemList=[];
	 
	service.getToBuyItems=function(){

		return toBuyItemList;
	}
	service.buyItem=function(itemIdex){
	var item={
			 name: toBuyItemList[itemIdex].name,
			 quantity:toBuyItemList[itemIdex].quantity
		};		
		
        boughtItemList.push(item);
      
		toBuyItemList.splice(itemIdex,1);		
		return toBuyItemList;		
	};

	service.getBoughtItems=function(){		
     return boughtItemList;
	};
}
})();
