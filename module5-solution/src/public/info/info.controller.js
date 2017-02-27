(function(){
"use strict";

angular.module('public')
.controller("InfoController",InfoController);

InfoController.$inject=['MenuService','ApiPath'];

function InfoController(MenuService,ApiPath){
   var info=this;
   info.service=MenuService;
   info.usr=info.service.getUsr();
   console.log(info.usr);
   if(info.usr!=null)
   {
   	info.completed=info.usr.complete;
   	info.firstName=MenuService.usr.first_name;
    info.lastName=MenuService.usr.last_name;
    info.email=MenuService.usr.email;
    info.phone=MenuService.usr.phone;
    info.favorite=MenuService.usr.favorite;
    info.favorite_item_name=MenuService.usr.favorite_item_name;
    info.favorite_descript=MenuService.usr.favorite_descript;
    info.basePath=ApiPath;
    console.log( 'favorite:' +info.favorite_descript);
    console.log(info.favorite_item);
   }    
}
})();