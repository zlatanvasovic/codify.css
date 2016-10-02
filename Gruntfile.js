/*!
 * Codify.css gruntfile (https://github.com/zdroid/codify.css)
 * Licensed under the MIT License.
 */

module.exports = (grunt) => {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  // Configuration
  grunt.initConfig({
    // Meta data
    pkg: grunt.file.readJSON('package.json'),

    // Paths
    codify: {
      less: (() => {
        let modules = (grunt.option('modules') ||
          'base display text embed forms tables').split(' ');
        let files = [];
        modules.forEach((value) => {
          files.push('src/' + value + '.less');
        });
        return files;
      })(),
      css: 'dist/codify.css',
      cssMin: 'dist/codify.min.css'
    },

    // Tasks
    clean: {
      dist: 'dist'
    },

    less: {
      dist: {
        options: {
          banner: '/*!\n' +
                  ' * Codify.css <%= pkg.version %> (https://github.com/zdroid/codify.css)\n' +
                  ' * Licensed under the <%= pkg.license %> License.\n' +
                  ' */\n'
        },
        src: '<%= codify.less %>',
        dest: '<%= codify.css %>'
      },
      distMin: {
        options: {
          compress: true,
          banner: '/*! Codify.css <%= pkg.version %> | <%= pkg.license %> License | https://github.com/zdroid/codify.css */'
        },
        src: '<%= codify.less %>',
        dest: '<%= codify.cssMin %>'
      }
    },

    csscomb: {
      dist: {
        options: {
          config: '.csscomb.json'
        },
        src: '<%= codify.css %>',
        dest: '<%= codify.css %>'
      }
    },

    watch: {
      src: {
        files: '<%= codify.less %>',
        tasks: ['less', 'csscomb']
      }
    }
  });

  // Load plugins
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
  require('time-grunt')(grunt);

  // Default task
  grunt.registerTask('default', ['clean', 'less', 'csscomb']);
};
