(function () {
'use strict';

angular.module('Data')
.controller('CategoryController', CategoryController);

// Version with resolving to 1 item based on $stateParams in route config
CategoryController.$inject = ['MenuDataService','menuItems'];
function CategoryController(MenuDataService,menuItems) {
  var categoryCrl = this;
  categoryCrl.categoryName=menuItems.category.name;
  console.log('name: '+categoryCrl.categoryName);
   categoryCrl.items=menuItems.menu_items;
   console.log('CategoryControllerItems: ');
console.log(categoryCrl.items);
}

})();
