module.exports = function(grunt) {

  grunt.initConfig({

    concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['js/work/*.js'],
      dest: 'js/dist/script.main.js',
    },
  },


  uglify: {
      my_target: {
        files: {
          'js/dist/script.main.min.js': ['js/dist/script.main.js']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat','uglify']);

};
