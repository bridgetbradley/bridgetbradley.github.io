const gulp = require('gulp')

const sass = require('gulp-sass')

const sassPath = 'scss/**/*.scss'

const postcss = require('gulp-postcss')

const autoprefixer = require('autoprefixer')

const cssnano = require('cssnano')

gulp.task('sass', function () {
  const plugins = [
    autoprefixer({ browsers: ['last 2 version'] }),
    cssnano()
  ]

  return gulp

  .src(sassPath)

  .pipe(sass())

  .pipe(postcss(plugins))

  .pipe(gulp.dest('./css/min'))

})

gulp.task('sass', function () {
  return gulp
  .src('scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('css'))
})

gulp.task('default', function () {
  gulp.watch('scss/**/*.scss', ['sass'])
})
