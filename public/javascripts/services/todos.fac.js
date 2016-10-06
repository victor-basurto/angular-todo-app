(function() {
	'use strict';
	TodoApp.factory('Todos', [ '$http', '$q', function( $http, $q ) {

		var self = this;
		var todoData = {};
		/**
		 * [Get data from DB]
		 * @return {Data} [get data from DB]
		 */
		function get() {
			var defer = $q.defer();

			$http.get( '/api/todos' )
				.success( function(res) {
					todoData = res;
					defer.resolve(res);
				}).error( function(err, status) {
					defer.reject(err);
				});

			return defer.promise;
		}

		/**
		 * [Create new TODO]
		 * @param  {Object} todoData [current value]
		 * @return {Post}          [post object]
		 */
		function create( todoData ) {

			var defer = $q.defer();

			$http.post( '/api/todos', todoData )
				.success( function(res) {
					defer.resolve( res );
				}).error( function(err, status) {
					defer.reject( err );
				})

			return defer.promise;
		}

		/**
		 * [Update Todo Value]
		 * @param  {Key} `id` - item to be updated
		 * @param  {Object} `todoData` - object that holds value from user
		 * @return {Promise}
		 */
		function updateTodo( id, todoData ) {
			var defer = $q.defer();

			$http.post( '/api/todos/' + id, todoData )
				.success( function (res) {
					defer.resolve( res );
				}).error( function (err, status) {
					defer.reject( err );
				});

			return defer.promise;
		}

		/**
		 * [Delete a TODO]
		 * @param  {Key} id [item to be deleted]
		 * @return {Delete}    [item deleted]
		 */
		function deleteTodoData( id ) {

			var defer = $q.defer();

			$http.delete( '/api/todos/' + id )
				.success( function(res) {
					defer.resolve( res );
				}).error( function(err, status) {
					defer.reject( err )
				});

			return defer.promise;
		}

		return {
			get: get,
			create: create,
			updateTodo: updateTodo,
			deleteTodoData: deleteTodoData
		}

		
	}]);
})();