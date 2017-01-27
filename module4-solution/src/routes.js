(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menu/templates/home.template.html'
  })

  // Display all categories
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menu/templates/categories.template.html',
    controller: 'CategoriesController as categories',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Show all of the menu items for a particular category
  .state('categories.items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/menu/templates/items.template.html',
    controller: 'CategoryController as category',      
    resolve: {
      menuItems: ['MenuDataService','$stateParams',function(MenuDataService,$stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
   
  });

}

})();
