'use strict';
/**
* TodoApp Module
*
* Description
*/
var TodoApp = angular.module('TodoApp', ['ngMaterial', 'ui.router']);

/**
 * Configuration
 */
TodoApp.config([
	'$mdThemingProvider', 
	'$stateProvider',
	function( $mdThemingProvider, $stateProvider ) {
		$mdThemingProvider.theme( 'default' )
			.primaryPalette( 'teal' )
			.accentPalette( 'orange' );

	// routing
	$stateProvider
		.state( 'todos', {
			url: '/todos',
			templateUrl: './templates/todos.tpl.html',
			controller: 'MainCtrl'
		});
}]);