(function() {
	'use strict';
	TodoApp.controller( 'AboutCtrl', ['$scope', '$rootScope', '$mdDialog', 'About', 'DefaultService', function( $scope, $rootScope, $mdDialog, About, DefaultService ) {
		/**
		 * get data from backend
		 * @param {Object} `res` - response from backend
		 */
		About.getDevelopers()
			.then( function (res) {
				$scope.contributors = res;
			}, function( err, status ) {
				console.log( 'Err: ' + err + '\nStatus: ' + status );
			});

		/**
		 * Open dialog onclick to show detail information about developer
		 * @param  {String} `id` - [developer name]
		 * @param  {Event} `ev` - [event]
		 * @param  {Object} `res` - [response from backend]
		 * @return  {Method} `mdDialog` - [are where info is going to be displayed]
		 */
		$scope.moreInfo = function(id, ev) {
			About.developerInfo( id )
				.then( function (res) {
					$scope.programmer = res;
					$mdDialog.show({
						controller: DialogCtrl,
						locals: { programmer: res },
						templateUrl: 'templates/developer/developer-dialog-info.tpl.html',
						parent: angular.element( document.body ),
						targetEvent: ev,
						clickOutsideToClose: true,
						fullscren: $scope.customFullscreen
					});
				}, function( err ) {
					console.log( 'Err: ' + err  );
				});
		}

		/**
		 * Dialog Controller
		 * data to be shown on dialog
		 */
		function DialogCtrl( $scope, $mdDialog, programmer ) {
			// data from each programmer/developer
			$scope.programmer = programmer;

			/**
			 * [hide mdDialog when click]
			 */
			$scope.hide = function() {
				$mdDialog.hide();
			}

			/**
			 * [cancel mdDialog when click]
			 */
			$scope.cancel = function() {
				$mdDialog.cancel();
			}
		}

		$rootScope.openSidenav = function() {
			DefaultService.openNav( 'left' );
		}

		$rootScope.closeSidenav = function() {
			DefaultService.closeNav( 'left' );
		}
	}]);
})();