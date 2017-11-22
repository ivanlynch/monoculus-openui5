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

gulp.task('default', ["OpenUI5 Resources"]);