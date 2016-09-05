(function() {
	'use strict';
	TodoApp.controller('MainCtrl', [ '$scope', '$http', function( $scope, $http ) {

		$scope.formData = {};

		/**
		 * Get data from server
		 * @param  {Object} `data` - object to be populated
		 * @return {Callback} - on success, populate object data from server, on error print error
		 */
		$http.get( '/api/todos' ).success( function( data ) {
			$scope.todos = data;
			console.log( data );
		}).error( function( data ) {
			console.log( 'Error:' + data );
		});

		/**
		 * Submit data to server
		 * @return {Callback} - on success, clear form and populate data, on error print error
		 */
		$scope.createTodo = function() {
			$http.post( '/api/todos', $scope.formData )
				.success( function( data ) {
					// clear the form
					$scope.formData = {};
					$scope.todos = data;
					console.log( data );
				}).error( function( data ) {
					console.log( 'Error: ' +  data );
				});
		}

		/**
		 * Delete a Todo
		 * @param  {Value} `id` - id to be deleted
		 * @return {Callback} - on success get data, on error print error
		 */
		$scope.deleteTodo = function( id ) {
			$http.delete( '/api/todos/' + id )
				.success( function( data ) {
					$scope.todos = data;
					console.log( 'Error: ' + data );
				}).error( function( data ) {
					console.log( 'Error: ' + data );
				});
		}

	}]);
})();