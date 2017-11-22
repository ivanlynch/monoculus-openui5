var gulp = require('gulp');

gulp.task('OpenUI5 Resources', function () {
    gulp.src(["" +
        /* Aca tienen que agregar las rutas de las dependencias que se generaron en bower.json */
        "bower_components/openui5-sap.ui.core/resources/**/*",
        "bower_components/openui5-sap.m/resources/**/*",
        "bower_components/openui5-sap.ui.layout/resources/**/*",
        "bower_components/openui5-sap.ui.unified/resources/**/*",
        "bower_components/openui5-themelib_sap_belize/resources/**/*"

    ])
        .pipe(gulp.dest("frontend/resources"));
});

var ui5preload = require('gulp-ui5-preload');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');

gulp.task('OpenUI5 Preload', function(){
    return gulp.src([
        'frontend/**/**.+(js|xml)','!frontend/Component-preload.js', '!frontend/gulpfile.js', '!frontend/model/metadata.xml'
    ])
    .pipe(gulpif('frontend/**/*.js', uglify()))
    .pipe(ui5preload({
        base : '.',
        namespace : 'frontend/monoculus'
    }))
    .pipe(gulp.dest('frontend'))
});


gulp.task('default', ["OpenUI5 Resources", "OpenUI5 Preload"]);