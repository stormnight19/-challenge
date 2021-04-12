var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve', function() {
  browserSync.init({
    server: {
      proxy: "http://localhost/gulp"
    }
  });

  gulp.watch("*.html").on("change", reload);
});