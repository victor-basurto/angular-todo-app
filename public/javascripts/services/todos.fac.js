(function() {
	'use strict';
	TodoApp.factory('Todos', [ '$http', '$mdToast', function( $http, $mdToast ) {

		function get() {
			return $http.get( '/api/todos' );	
		}

		function create( todoData ) {
			return $http.post( '/api/todos', todoData );
		}

		function deleteTodoData( id ) {
			return $http.delete( '/api/todos/' + id );
		}

		function showToast( content, delay ) {
			$mdToast.show(
				$mdToast.simple()
					.textContent( content )
					.position( 'top right' )
					.hideDelay( delay )
			);
		}

		return {
			get: get,
			create: create,
			deleteTodoData: deleteTodoData,
			showToast: showToast
		}

		
	}]);
})();


// return  {
// 	get: function() {
// 		return $http.get( '/api/todos' );
// 	},
// 	create: function( todoData ) {
// 		return $http.post( '/api/todos', todoData );
// 	},
// 	delete: function( id ) {
// 		return $http.delete( '/api/todos/' + id );
// 	}
// }