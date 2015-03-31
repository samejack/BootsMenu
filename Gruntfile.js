module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      js: {
        files: {
          './js/jquery.bootsMenu.min.js': [
            './js/jquery.bootsMenu.js'
          ]
        }
      }
    },
    cssmin: {
      target: {
        files: {
          './css/jquery.bootsMenu.min.css': ['./css/jquery.bootsMenu.css']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "cssmin" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin']);


};