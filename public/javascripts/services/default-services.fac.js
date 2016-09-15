(function() {
	'use strict';
	TodoApp.factory( 'DefaultService', [ '$mdToast', function( $mdToast ) {

		/**
		 * Show toast
		 * @param  {String} `content` [toast information]
		 * @param  {Number} `delay`   [delay time]
		 */
		function showToast( content, delay ) {
			$mdToast.show(
				$mdToast.simple()
					.textContent( content )
					.position( 'top right' )
					.hideDelay( delay )
			);
		}

		return {
			showToast: showToast
		}

		
	}]);
})();