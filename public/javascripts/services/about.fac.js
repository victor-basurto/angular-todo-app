(function() {
	'use strict';
	TodoApp.factory( 'About', ['$http', '$q', function( $http, $q ) {

		/**
		 * @type {Const} `_ALL_DEVELOPERS` - Path to developers data
		 * @type {Const} `_SINGLE_DEVELOPER` - Path to single developer data
		 */
		var _ALL_DEVELOPERS = '../../developers/developers-data.json',
			_SINGLE_DEVELOPER= '../../developers/';

		/**
		 * [getDevelopers data]
		 * @return {Promise} return all developers
		 */
		function getDevelopers() {
			var defer = $q.defer();
			
			$http.get( _ALL_DEVELOPERS )		// get data from json file
				.success( function(res) {
					defer.resolve(res);
				}).error( function(err, status) {
					defer.reject(err, status);
				});

			return defer.promise;
		}

		/**
		 * [get single developer data]
		 * @param  {id} id [developer Id used to request specific data]
		 * @return {Promise}  [return devloper data]
		 */
		function developerInfo( id ) {
			var defer = $q.defer();

			$http.get( _SINGLE_DEVELOPER + id + '.json' )		// concat path, id and extension
				.success( function(res) {
					defer.resolve( res );
				}).error( function(err, status) {
					defer.reject( err, status );
				});

			return defer.promise;
		}
		
		return {
			getDevelopers: getDevelopers,
			developerInfo: developerInfo
		}
	}]);
})();