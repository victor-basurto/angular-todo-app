var gulp = require( 'gulp' ),
	sass = require( 'gulp-sass' );

/**
 * Task for SCSS
 */
gulp.task( 'app-styles', function() {
	gulp.src( './public/stylesheets/sass/default.scss' )
		.pipe( sass({
			sourceComments: false,
			outputStyle: 'compressed',
			errLogToConsole: true
		}))
		.pipe( gulp.dest( './public/stylesheets/css/' ) );
});

// watch for changes
gulp.task( 'watch', function() {
	gulp.watch( 'sass/**/*.scss', [ 'app-styles' ] );
});

gulp.task( 'default', ['app-styles', 'watch'] );