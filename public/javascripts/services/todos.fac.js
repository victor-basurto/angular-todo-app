(function() {
	'use strict';
	TodoApp.factory('Todos', [ '$http', function( $http ) {

		/**
		 * [Get data from DB]
		 * @return {Data} [get data from DB]
		 */
		function get() {
			return $http.get( '/api/todos' );	
		}

		/**
		 * [Create new TODO]
		 * @param  {Object} todoData [current value]
		 * @return {Post}          [post object]
		 */
		function create( todoData ) {
			return $http.post( '/api/todos', todoData );
		}

		/**
		 * [Delete a TODO]
		 * @param  {Key} id [item to be deleted]
		 * @return {Delete}    [item deleted]
		 */
		function deleteTodoData( id ) {
			return $http.delete( '/api/todos/' + id );
		}

		return {
			get: get,
			create: create,
			deleteTodoData: deleteTodoData
		}

		
	}]);
})();