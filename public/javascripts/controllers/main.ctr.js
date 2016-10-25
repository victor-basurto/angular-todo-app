(function() {
	'use strict';
	TodoApp.controller('MainCtrl', [ 
		'$scope', 
		'$http', 
		'Todos',
		'DefaultService', 
		function( $scope, $http, Todos, DefaultService ) {

			$scope.formData = {};
			/**
			 * Get data from server
			 * @param  {Object} `data` - object to be populated
			 * @return {Callback} - on success, populate object data from server, on error print error
			 */
			Todos.get().then( function( res ) {
				$scope.todos = res;

				// set default value if there's no data on MongoDB
				if ( isEmpty( $scope.todos ) ) {
					var res = {
						text: 'Default text - Add a TODO',
						isChecked: true
					}
					$scope.todos.push(res);
				}
				console.log( 'This is the data: ', res );
			}, function( err ) {
				console.log( 'Error:' + err );
			});

			/**
			 * Submit data to server
			 * @return {Callback} - on success, clear form and populate data, on error print error
			 */
			$scope.createTodo = function() {
				if ( !angular.equals( {}, $scope.formData ) ) {
					Todos.create( $scope.formData )
						.then( function( res ) {
							// clear the form
							$scope.formData = {};

							$scope.todos = res;
							var cnt = 'added: ' + res[ res.length - 1 ].text;

							/**
							 * @param {String} `cnt` [String contains text from last item of array
							 * @param {Number} [delay parameter]
							 */
							DefaultService.showToast( cnt, 2000  );
						}, function( err ) {
							console.log( 'Error: ' +  err );
						});
				}
			}

			/**
			 * Update Todo Value
			 * @param  {Key} `id` - item to be updated
			 * @param  {Boolean} `item` - flag
			 * @return {Object} `$scope.item` - new updated object
			 */
			$scope.updateDone = function( id, item ) {
				$scope.formData.done = item;
				
				Todos.updateTodo( id, $scope.formData )
					.then( function (res) {
						$scope.item = res;
					}, function( err ) {
						console.log( 'Error ' + err );
					});
			}

			/**
			 * Delete a Todo
			 * @param  {Value} `id` - id to be deleted
			 * @return {Callback} - on success get data, on error print error
			 */
			$scope.deleteTodo = function( id ) {
				Todos.deleteTodoData( id )
					.then( function( res ) {
						$scope.todos = res;
						DefaultService.showToast( 'Item deleted', 2000 );
					}, function( err ) {
						console.log( 'Error: ' + err );
					});
			}

			/**
			 * Check if object is empty
			 * @param  {Object} `obj` - [object to be compared]
			 * @return {Boolean}  if empty object return false, otherwise return true
			 */
			function isEmpty( obj ) {
				for ( var prop in obj ) {
					if ( obj.hasOwnProperty( prop ) ) {
						return false;
					}
				}
				return true;
			}
	}]);
})();