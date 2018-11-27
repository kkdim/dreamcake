//Required

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");

//Style Task
gulp.task("sass", function(){
	gulp.src("app/sass/**/*.scss")
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest("app/assets/css"))
});


//Watch Task
gulp.task("watch",function(){
  gulp.watch("app/sass/**/*.scss",['sass']);
  gulp.task("default",['sass' , 'watch']);
});

//Default
gulp.task("default",['scripts' , 'styles', 'html', 'browser-sync', 'watch']);
