
var babel                         = require("gulp-babel");
var gulp                          = require('gulp');
const {src,dest,parallel,watch,}  = require('gulp');
const brouserSync                 = require('browser-sync').create();
const sass                        = require('gulp-sass');

function brousersync() {
  brouserSync.init({
    server:  {
      baseDir: "app/"
    },
    notify: false
  })
}

function compileSass() {
  return src(['app/app.scss'])
  .pipe(sass())
  .pipe(dest('app/dist/'))
}

function watching() {
  watch(['app/app.js'],compileBabel)
  watch(['app/app.scss'],compileSass)
  watch('app/index.html').on('change',brouserSync.reload)
}

function compileBabel() {
  return src('app/app.js')
  .pipe(babel({
    presets: ["@babel/preset-env"]
  }))
  .pipe(gulp.dest("app/dist"))
  .pipe(brouserSync.stream())
}
exports.brousersync   = brousersync;
exports.compilebabel  = compileBabel;
exports.compileSass   = compileSass 
exports.default       = parallel(compileBabel,watching,compileSass,brousersync)