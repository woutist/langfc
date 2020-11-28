const gulp = require('gulp');
const sass = require('gulp-sass');
// const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;
//compile scss into css
function style() {
    return gulp.src('root/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest('android-flashcards-en-id/app/src/main/assets/static/css/'))
        .pipe(gulp.dest('android-flashcards-en-pl/app/src/main/assets/static/css/'))
        .pipe(gulp.dest('android-flashcards-pl-en/app/src/main/assets/static/css/'))
}
// function watch() {
//     browserSync.init({
//         server: {
//             baseDir: "./src",
//             index: "index.php"
//         }
//     });
//     gulp.watch('root/*.scss', style);
//     // gulp.watch('./*.php').on('change',browserSync.reload);
//     // gulp.watch('./*.html').on('change',browserSync.reload);
//     // gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
// }
function script() {
    return pipeline(
        gulp.src('root/*.js'),
        uglify(),
        gulp.dest('android-flashcards-en-id/app/src/main/assets/static/js/'),
        gulp.dest('android-flashcards-en-pl/app/src/main/assets/static/js/'),
        gulp.dest('android-flashcards-pl-en/app/src/main/assets/static/js/')
    );
};
exports.style = style;
exports.script = script;
// exports.watch = watch;