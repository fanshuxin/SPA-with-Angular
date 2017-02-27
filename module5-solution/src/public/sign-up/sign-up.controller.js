(function(){
"use strict";

angular.module("public")
.controller("SignUpController",SignUpController);

SignUpController.$inject=['MenuService'];
function SignUpController(MenuService) {
  var reg = this;
  reg.service=MenuService;
  reg.submit = function (short_name) {
    reg.completed = true;
    
    var promise=MenuService.getMenuItem(short_name);
    
    promise.then(function(response){

      var usr={favorite_name:response.name,favorite_descript:response.description,complete:reg.completed,favorite:short_name,first_name:reg.user.firstName,last_name:reg.user.lastName,email:reg.user.email,phone:reg.user.phone};
      
      reg.service.setUsr(usr);
     
    	reg.message='Your information has been saved';
      console.log(response);
      console.log('signup '+response.description);
    },
    function(response) {
        reg.message='No such menu number exists';
    });
  
    
  };

};
})();