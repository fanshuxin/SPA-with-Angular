(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://fshuxin-spa.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
  console.log('common module starts');
}

})();
