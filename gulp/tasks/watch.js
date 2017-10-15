var gulp = require("gulp"),
    watch = require("gulp-watch"),
    browserSync = require("browser-sync").create();

gulp.task('watch', function(){

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		} 	
	});

	watch('./app/index.html', { usePolling: true }, function(){
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', { usePolling: true }, function(){
		gulp.start('cssInject');
	});
})

gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./app/temp/styles/styles.css')
			.pipe(browserSync.stream());
})