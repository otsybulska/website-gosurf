const gulp = require('gulp')

const concat = require('gulp-concat')
const terser = require('gulp-terser')

module.exports = function copyDependencies() {
  return gulp.src([
      'node_modules/slick-carousel/slick/slick.js',
      'node_modules/wow.js/dist/wow.min.js',
      'node_modules/svg4everybody/dist/svg4everybody.legacy.min.js',
    ])
    .pipe(concat('libs.min.js'))
    .pipe(terser())
    .pipe(gulp.dest('./dist/scripts/'))
}
