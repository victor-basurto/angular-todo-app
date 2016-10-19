(function() {
	'use strict';
	TodoApp.component( 'developerCard', {
		bindings: {
			developerObject: '=',
			devInfo: '&'
		},
		templateUrl: 'templates/component/developer-card.com.html',
		restrict: 'E',
		replace: true
	});
})();