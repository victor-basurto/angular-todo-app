(function() {
	'use strict';
	/*TodoApp.directive('todoForm', [function() {
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			scope: {
				formDataText: '=',
				create: '&'
			}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'AE',
			// template: '',
			templateUrl: 'templates/directives/todo-form.dir.html',
			replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {}
		};
	}]);*/
	TodoApp.component( 'todoForm', {
		bindings: {
			formDataText: '=',
			create: '&'
		},
		templateUrl: 'templates/component/todo-form.com.html',
		restrict: 'E',
		replace: true
	});
})();