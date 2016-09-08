(function() {
	'use strict';
	TodoApp.controller('MainCtrl', [ '$scope', '$http', 'Todos', function( $scope, $http, Todos ) {

		$scope.formData = {};


		/**
		 * Get data from server
		 * @param  {Object} `data` - object to be populated
		 * @return {Callback} - on success, populate object data from server, on error print error
		 */
		Todos.get().success( function( data ) {
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
			if ( !angular.equals( {}, $scope.formData ) ) {
				Todos.create( $scope.formData )
					.success( function( data ) {
						// clear the form
						$scope.formData = {};

						$scope.todos = data;
						var cnt = 'added: ' + data[data.length - 1].text;

						/**
						 * @param {String} `cnt` [String contains text from last item of array
						 * @param {Number} [delay parameter]
						 */
						Todos.showToast( cnt, 2000  );
					}).error( function( data ) {
						console.log( 'Error: ' +  data );
					});
			}
		}

		/**
		 * Delete a Todo
		 * @param  {Value} `id` - id to be deleted
		 * @return {Callback} - on success get data, on error print error
		 */
		$scope.deleteTodo = function( id ) {
			Todos.deleteTodoData( id )
				.success( function( data ) {
					$scope.todos = data;
					Todos.showToast( 'Item deleted', 2000 );
				}).error( function( data ) {
					console.log( 'Error: ' + data );
				});
		}
	}]);
})();