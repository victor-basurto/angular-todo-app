(function() {
	'use strict';
	TodoApp.factory( 'DefaultService', [ '$mdToast', '$mdSidenav', function( $mdToast, $mdSidenav ) {

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

		/**
		 * openNav
		 * @param  {String} `side` -  [direction of sidenav to be open]
		 * @return {Callback}      [notify via console.log]
		 */
		function openNav( side ) {
			$mdSidenav( side ).open()
				.then( function() {
					console.log( 'Side Nav opened succesfully' );
				});
		}

		/**
		 * closeNav
		 * @param  {String} `side` -  [direction of sidenav to be close]
		 * @return {Callback}      [notify via console.log]
		 */
		function closeNav( side ) {
			$mdSidenav( side ).close()
				.then( function() {
					console.log( 'Side Nav closed succesfully' );
				});
		}

		return {
			showToast: showToast,
			openNav: openNav,
			closeNav: closeNav
		}

		
	}]);
})();