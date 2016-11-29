(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope) {
$scope.textInput = "";
  $scope.CheckLunchList = function () {      
      $scope.message = "";
      $scope.note="";
      $scope.flag=0;
      var messageStyle=document.querySelector("div.form-group.message");
     messageStyle.classList.remove("alert-success");
     messageStyle.classList.remove("alert-danger");
    if($scope.textInput.length==0)
     {
       messageStyle.className+=' alert-danger';      
      $scope.message ="Please enter data first";} 
    else
    {
      var totalLunch = calculateLunchForList($scope.textInput);
    if(totalLunch>3) 
      {   messageStyle.className+=' alert-success';     
        $scope.message="Too much!";  }
    else if(totalLunch>0)      
      { messageStyle.className+=' alert-success'; 
        $scope.message="Enjoy!";
      }
    else {
      messageStyle.className+=' alert-danger';
      $scope.message ="Please enter data first";}
    if($scope.flag==1)
      $scope.note=" you do NOT consider and empty item, i.e., `, ,` as an item towards to the count.";
    };    
  };


  function calculateLunchForList(string) {
    var totalLunchCount = 0;
    var Lunch=string.split(",")
    for (var i = 0; i < Lunch.length; i++) {
      if(Lunch[i].trim().length>0)
        totalLunchCount++;
      else $scope.flag=1;
      if(totalLunchCount>3)
           break;
       }
    return totalLunchCount;
  };
}


})();
