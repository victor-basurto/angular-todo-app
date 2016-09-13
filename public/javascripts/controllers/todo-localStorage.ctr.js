(function() {
	'use strict';
	TodoApp.controller( 'LocalTodo', ['$scope', '$timeout', function( $scope, $timeout ) {
		$scope.title = 'LocalStorage';

		$scope.formData = {};



		$scope.saved = localStorage.getItem( 'todos' );
		$scope.todos = 
			( localStorage.getItem( 'todos' ) !== null ) ? JSON.parse( $scope.saved ) : [{
				text: 'My Text',
				done: false
			}];


		$scope.checkbox = function() {
			angular.forEach( $scope.todos, function( todo ) {
				console.log(todo);
			});	
		}
		/**
		 * Add a TODO
		 */
		$scope.createTodo = function() {
			$scope.todos.push({
				text: $scope.formData.text,
				done: false
			});
			console.log($scope.formData.text);
			$scope.formData.text = '';



			localStorage.setItem( 'todos', JSON.stringify( $scope.todos ) );
		}
	}]);
})();