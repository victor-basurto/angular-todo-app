(function() {
	'use strict';
	TodoApp.factory( 'LocalTodos', [function() {

		/**
		 * if there's no data then apply one example data
		 * @param  {Object} `currentValues` - [current values obtained from localstorage]
		 * @return {Object}    [if data is available, returned, otherwise send default data]
		 */
		function getLocalTodos( currentValues ) {
			return ( localStorage.getItem( 'todos' ) !== null ) ? JSON.parse( currentValues ) : [{
				text: 'My Text',
				done: false
			}];
		}

		/**
		 * [Push data to new array]
		 * @param  {Object} `data`     [current data displayed]
		 * @param  {String} `userText` [user input]
		 * @return {Object} [new object]
		 */
		function createLocalTodo( data, userText ) {
			return data.push({
				text: userText,
				done: false
			});
		}

		/**
		 * Delete Todo from LocalStorage
		 * @param  {Object} `currentData` [current data displayed]
		 * @param  {Key} `index`  [object to be deleted]
		 * @return {Array} [return new array of obejcts]
		 */
		function deleteLocalTodo( currentData, index ) {
			// delete locally item
			currentData.splice(index, 1);

			// set currentTodos to currentData
			var localTodos = currentData;
			currentData = [];

			// push items to object with new values
			return angular.forEach( localTodos, function( todo ) {	
				currentData.push( todo );
			});

		}

		return {
			getLocalTodos: getLocalTodos,
			createLocalTodo: createLocalTodo,
			deleteLocalTodo: deleteLocalTodo
		}
	}]);
})();