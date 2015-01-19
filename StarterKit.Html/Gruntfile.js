/// <vs BeforeBuild='default' />

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
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
      useminPrepare: {
          html: 'index.html',
          options: {
              dest: 'dist'
          }
      },
      usemin: {
          html: 'index.html',
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
  //grunt.registerTask('default', ['clean', 'copy:html', 'copy:css', 'concat:lib', 'uglify', 'filerev:lib', 'usemin', 'copy:wwwToRoot']);
  //grunt.registerTask('build', ['useminPrepare', 'usemin']);
  //grunt.registerTask('cleanPrecheckin', ['clean:rootWww']);

};
