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

    // Paths
    sanitize: {
      less: (function () {
        var modules = (grunt.option('modules') || 'base display text embed forms tables').split(' ');
        var files = [];
        var i;
        for (i in modules) {
          files.push('src/' + modules[i] + '.less');
        }
        return files;
      })(),
      css: 'dist/sanitize.css',
      cssMin: 'dist/sanitize.min.css'
    },

    // Banner
    banner: '/*!\n' +
            ' * Sanitize.css <%= pkg.version %> (http://git.io/sanitize)\n' +
            ' * Licensed under the <%= pkg.license %> License.\n' +
            ' */\n',

    // Tasks
    clean: {
      dist: 'dist'
    },

    less: {
      dist: {
        src: '<%= sanitize.less %>',
        dest: '<%= sanitize.css %>'
      },
      distMin: {
        options: {
          cleancss: true
        },
        src: '<%= sanitize.css %>',
        dest: '<%= sanitize.cssMin %>'
      }
    },

    csscomb: {
      dist: {
        options: {
          config: '.csscomb.json'
        },
        src: '<%= sanitize.css %>',
        dest: '<%= sanitize.css %>'
      }
    },

    usebanner: {
      dist: {
        options: {
          banner: '<%= banner %>'
        },
        src: 'dist/*.css'
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
