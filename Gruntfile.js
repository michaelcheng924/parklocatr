module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.initConfig({
    useminPrepare: {
      html: 'client/index.html',
      options: {
        dest: 'dist'
      }
    }
  });

  grunt.registerTask('build', [
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
  ]);
};