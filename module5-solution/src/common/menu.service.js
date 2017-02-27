(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.usr={};
  
  service.setUsr=function(usr){
           service.usr.first_name=usr.first_name;
           service.usr.last_name=usr.last_name;
            service.usr.phone=usr.phone;
            service.usr.email=usr.email;
            service.usr.favorite=usr.favorite;
            service.usr.complete=usr.complete;
            service.usr.favorite_item_name=usr.favorite_name;
            service.usr.favorite_descript=usr.favorite_descript;
  };
  service.getUsr=function() {
    return service.usr;
  };

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem=function(short_name) {

    return $http.get(ApiPath+'/menu_items/'+short_name+'.json').then(function (response) {
      return response.data;
    });
  }

}



})();
