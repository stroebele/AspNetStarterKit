/// <vs BeforeBuild='default' />

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    concat: {
      options: {
          separator: grunt.util.linefeed + ';' + grunt.util.linefeed,
          sourceMap: true
      },
      lib: {
          sourceMap: true,
          src: [
                'wwwroot/bower_components/angular/angular.min.js',
                'wwwroot/bower_components/angular-ui-router/release/angular-ui-router.min.js',
                'wwwroot/bower_components/angular-local-storage/dist/angular-local-storage.min.js',
                "wwwroot/bower_components/jquery/dist/jquery.min.js",
                "wwwroot/bower_components/bootstrap/dist/js/bootstrap.min.js",
                "wwwroot/bower_components/toastr/toastr.min.js",
          ],
          dest: 'www/js/lib.js'
      }
    },
    uglify: {
      options: {
          sourceMap: true,
          mangle: false,
          beautify: true,
      },
      app: {
        src: ['wwwroot/js/app/**/*.js', 'wwwroot/templates/**/*.js'],
        dest: 'www/js/app.min.js'
      }
    },
    filerev: {
        lib: { src: ['www/js/lib.js', 'www/js/app.min.js'] }
    },
    useminPrepare: {
        html: 'wwwroot/index.html',
        options: {
            dest: 'www'
        }
    },
    usemin: {
        html: ['www/*.html'],
        css: ['www/css/**/*.css'],
        js: ['www/js/**/*.js'],
        options: {
            dirs: ['www'],
            assetsDirs: ['www'],
            patterns: {
                js: [
                    [/["']([^:"']+\.(?:png|gif|jpe?g))["']/img, 'Image replacement in js files']
                ]
            }
        },
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    copy:{
        html:
            {
                expand: true,
                cwd: 'wwwroot',
                src: ['./**/*.html', '!./bower_components/**'],
                dest: "www/"
            },
        css:
            {
                expand: true,
                flatten: true,
                src: ['./wwwroot/bower_components/bootstrap/dist/css/bootstrap.min.css',
                      './wwwroot/bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
                      './wwwroot/bower_components/bootstrap/dist/css/bootstrap-theme.css.map',
                      './wwwroot/bower_components/bootstrap/dist/css/bootstrap.css.map',
                      './wwwroot/bower_components/toastr/toastr.min.css',

                      './wwwroot/css/**/*.css'
                    ],
                dest: "www/css/"
            },
        wwwToRoot:
            {
                cwd: 'www',
                expand: true,
                src: ['./**/*.*'],
                dest: "."
            }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'qunit']
      }
    },
    clean: {
        www: ["www"],
        rootWww: ['index.html', 'js/', 'css/', 'templates/']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-filerev');

  // Default task.
    //grunt.registerTask('default', ['clean', 'copy', 'concat:lib', 'filerev:lib', 'jshint', 'qunit', 'concat', 'uglify']);
  grunt.registerTask('default', ['clean', 'copy:html', 'copy:css', 'concat:lib', 'uglify', 'filerev:lib', 'usemin', 'copy:wwwToRoot']);
  grunt.registerTask('cleanPrecheckin', ['clean:rootWww']);

};
