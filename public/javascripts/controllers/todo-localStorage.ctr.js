(function() {
	'use strict';
	TodoApp.controller( 'LocalTodo', [
		'$scope', 
		'$rootScope',
		'$timeout', 
		'LocalTodos',
		'DefaultService',
		function( $scope, $rootScope, $timeout, LocalTodos, DefaultService ) {
			
			$scope.title = 'LocalStorage';
			$scope.formData = {};

			// initialized and retrieving data from localStorage in case there is data available
			$scope.saved = localStorage.getItem( 'todos' );

			// if there's no data then apply one example data
			$scope.todos = LocalTodos.getLocalTodos( $scope.saved );

			localStorage.setItem( 'todos', JSON.stringify( $scope.todos ) );

			/**
			 * Add a TODO
			 * @return {Object} insert user input into object
			 */
			$scope.createTodo = function() {
				// if there's no data, showToast()
				if ( !$scope.formData.text ) {
					DefaultService.showToast( 'Enter Value', 1000 );
				} else {
					LocalTodos.createLocalTodo( $scope.todos, $scope.formData.text );
					DefaultService.showToast( $scope.formData.text + ' Added', 2000 );
				}

				// clean the form
				$scope.formData.text = '';

				// set new item
				localStorage.setItem( 'todos', JSON.stringify( $scope.todos ) );
			}

			/**
			 * Delete a Todo
			 * @return {Object} `$scope.todos` - now it holds new values
			 */
			$scope.deleteTodo = function(index) {
				LocalTodos.deleteLocalTodo( $scope.todos, index );

				// show toast
				DefaultService.showToast( 'Item Deleted', 1000 );
				// set new values to todos object
				localStorage.setItem( 'todos', JSON.stringify( $scope.todos ) );
			}

			$rootScope.openSidenav = function() {
				DefaultService.openNav( 'left' );
			}

			$rootScope.closeSidenav = function() {
				DefaultService.closeNav( 'left' );
			}
	}]);
})();