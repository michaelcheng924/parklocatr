module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('bower.json'),
    connect: {
      server: {
        options: {
          port: 8080,
          base: ".",
          keepalive: true
        }
      }
    },

    watch: {
      scripts: {
        files: ["*.js", "*.json"],
        options: {
          livereload: true
        }
      },
      markup: {
        files: ["*.html"],
        options: {
          livereload: true
        }
      },
      stylesheets: {
        files: ["*.css"],
        options: {
          livereload: true
        }
      }
    },

    "bower-install-simple": {
      options: {
        color: true,
        directory: "bower_components"
      },
      prod: {
        options: {
          production: true
        }
      }
    },

    jsdoc2md: {
      main: {
        files: [
          {src: "src/extarray.js", dest: "api/extarray.md"},
          {src: "src/micro-observer.js", dest: "api/micro-observer.md"}
        ]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-bower-install-simple");
  grunt.loadNpmTasks("grunt-contrib-yuidoc");
  grunt.loadNpmTasks("grunt-jsdoc-to-markdown");

  // start a http server and serve at folder "test"
  grunt.registerTask("default", ["bower-install-simple", "connect", "watch"]);
  grunt.registerTask("export-api", ["jsdoc2md"]);
};