(function (){
'use strict';

angular.module('Data')
.component('categories',{
	templateUrl:'src/menu/templates/category.template.html',
	bindings:{
		items:'<'
	}
});
})();