var gulp = require( 'gulp' ),
	sass = require( 'gulp-sass' ),
	autoPrefixer = require( 'gulp-autoprefixer' );

/**
 * Task for SCSS
 */
gulp.task( 'app-styles', function() {
	gulp.src( 'public/stylesheets/sass/default.scss' )
		.pipe( sass({
			sourceComments: false,
			outputStyle: 'compressed',
			errLogToConsole: true
		}))
		.pipe( autoPrefixer({borwsers: ['last 2 version']}) )
		.pipe( gulp.dest( 'public/stylesheets/css/' ) );
});

// watch for changes
gulp.task( 'watch', function() {
	gulp.watch( 'public/stylesheets/sass/**/*.scss', [ 'app-styles' ] );
});

gulp.task( 'default', ['app-styles', 'watch'] );