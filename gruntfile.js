module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      my_target: {
        files: [
          {
            expand: true,
            cwd: 'js',
            src: '**/*.js',
            dest: 'dist/js'
          },
          {
            expand: true,
            cwd: 'views/js',
            src: '**/*.js',
            dest: 'dist/views/js'
          },
          {
            expand: true, // for inline
            cwd: 'views/js',
            src: '**/*.js',
            dest: 'views/js'
          },
        ]
      }
    },
    imagemin: {
      dynamic: {                         // Another target
        options: {                       // Target options
          optimizationLevel: 7,
          progressive: true,
          interlaced: true
        },
        files: [
        {
          expand: true,                  // Enable dynamic expansion
          cwd: 'views/images',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'dist/views/images'                  // Destination path prefix
        },
        {
          expand: true,                  // Enable dynamic expansion
          cwd: 'img',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'dist/img'
        }
        ]
      }
    },
    cssmin: {
      target: {
        files: [
        {
          expand: true,
          cwd: 'views/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/views/css',
          ext: '.min.css'
        },
        {
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        },
        {
          expand: true, // for inline
          cwd: 'views/css',
          src: ['*.css', '!*.min.css'],
          dest: 'views/css',
          ext: '.min.css'
        }
        ]
      }
    },
    htmlmin: {                                     // Task
      dist: {    
          options: {                                 // Target options
            removeComments: true,
            collapseWhitespace: true
          },                                   // Another target
          files: [
          {
            expand: true,
            cwd: './',
            src: ['*.html'],
            dest: './'
          },
          {
            expand: true,
            cwd: './views',
            src: ['*.html'],
            dest: './views'
          }
          ]
      }
    },
    responsive_images: {
      dist: {
        options: {
          engine: 'im',
          sizes: [
          {
            name: 'xsmall',
            width: '10%',
            suffix: '_xsmall',
            quality: 10
          },
          {
            name: 'small',
            width: '20%',
            suffix: '_small',
            quality: 10
          },
          {
            name: 'medium',
            width: '50%',
            suffix: '_medium',
            quality: 40
          },
          {
            name: 'large',
            width: '100%',
            suffix: '_large',
            quality: 40
          }]
        },
        files: [
        {
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'views/images',
          dest: 'dist/views/images'
        },
        {
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img',
          dest: 'dist/img'
        }
        ]
      }
    },
    inline: {
      dist: {
        files: [
          {
            src: 'views/pizza.html',
            dest: 'views/pizza.html'
          },
          {
            src: ['*.html'],
            cwd: './',
            dest: './'
          }
        ]
      }
    },
    // uncss: {
    //   dist: {
    //     files: {
    //       'views/css/bootstrap-grid.min.css': ['views/pizza.html']
    //     }
    //   }
    // }
  });
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-inline');

  grunt.registerTask('default', ['uglify', 'imagemin', 'cssmin', 'inline', 'htmlmin', 'responsive_images']);

};