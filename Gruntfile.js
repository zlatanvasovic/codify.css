/*!
 * Sanitize.css gruntfile (http://git.io/sanitize)
 * Licensed under the MIT License.
 */

module.exports = function (grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  // Configuration
  grunt.initConfig({
    // Meta data
    pkg: grunt.file.readJSON('package.json'),

    sanitize: {
      less: (function () {
        var modules = (grunt.option('modules') || 'base display text embed forms tables').split(' ');
        var moduleFiles = (function () {
          var results = [];
          var i;
          for (i in modules) {
            results.push('src/' + modules[i] + '.less');
          }
          return results;
        })();
        return moduleFiles;
      })(),
      css: 'dist/sanitize.css',
      cssMin: 'dist/sanitize.min.css'
    },

    // Tasks
    clean: {
      dist: 'dist'
    },

    less: {
      dist: {
        files: {
          '<%= sanitize.css %>': '<%= sanitize.less %>'
        }
      },
      distMin: {
        options: {
          cleancss: true,
          report: 'min'
        },
        files: {
          '<%= sanitize.cssMin %>': '<%= sanitize.css %>'
        }
      }
    },

    csscomb: {
      dist: {
        options: {
          config: '.csscomb.json'
        },
        files: {
          '<%= sanitize.css %>': '<%= sanitize.css %>'
        }
      }
    },

    usebanner: {
      dist: {
        options: {
          position: 'top',
          banner: '/*!\n' +
                  ' * Sanitize <%= pkg.version %> (http://git.io/sanitize)\n' +
                  ' * Licensed under the <%= pkg.license %> License.\n' +
                  ' */\n'
        },
        files: {
          src: [
            '<%= sanitize.css %>',
            '<%= sanitize.cssMin %>'
          ]
        }
      }
    },

    watch: {
      src: {
        files: '<%= sanitize.less %>',
        tasks: ['less', 'csscomb', 'usebanner']
      }
    }
  });

  // Load plugins
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  // Default task
  grunt.registerTask('default', ['clean', 'less', 'csscomb', 'usebanner']);
};