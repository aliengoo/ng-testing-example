module.exports = function (grunt) {

  var vendorLibs = [
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js',
    'bower_components/angular/angular.min.js',
    'bower_components/angular-animate/angular-animate.min.js',
    'bower_components/ui-router/release/angular-ui-router.min.js'
  ];

  var appLibs = [
    'app/infrastructure/**/*.module.js',
    'app/infrastructure/**/*.js',
    'app/features/**/*.module.js',
    'app/features/**/*.js',
    'app/*.module.js',
    'app/*.js'
  ];

  var css = [
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    'bower_components/font-awesome/css/font-awesome.min.css',
    'bower_components/animate.css/animate.min.css'
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        stripBanners : true
      },
      vendor: {
        // the files to concatenate
        src: vendorLibs,
        // the location of the resulting JS file
        dest: 'public/js/vendor.js',
        options : {
          separator: ';\n'
        }
      },
      app: {
        // the files to concatenate
        src: appLibs,
        // the location of the resulting JS file
        dest: 'public/js/app.js'
      },
      "app.templates" : {
        // the files to concatenate
        src: ['app/build/*.templates.js'],
        // the location of the resulting JS file
        dest: 'public/js/app.templates.js'
      },
      styles : {
        src : css,
        dest : 'public/styles/vendor.css'

      }
    },
    copy: {
      maps: {
        files: [
          {
            expand: true,
            cwd: 'bower_components',
            src: ['**/*.js.map', '**/*.min.map'],
            flatten: true,
            dest: 'public/js/',
            filter: 'isFile'
          }]
      },
      fonts: {
        files : [
          {
            expand: true,
            cwd: 'bower_components',
            src: ['bootstrap/dist/fonts/*'],
            flatten: true,
            dest: 'public/fonts',
            filter: 'isFile'
          },
          {
            expand: true,
            cwd: 'bower_components',
            src: ['font-awesome/fonts/*'],
            flatten: true,
            dest: 'public/fonts',
            filter: 'isFile'
          }
        ]
      }
    },
    ngtemplates : {
      options: {
        htmlmin: { collapseWhitespace: true, collapseBooleanAttributes: true }
      },
      app: {
        src: [
          'app/*.html'
        ],
        dest: 'app/build/app.templates.js'
      },
      "app.customer": {
        cwd : 'app/features',
        src: [
          'customer/*.html'
        ],
        dest: 'app/build/app.customer.templates.js'
      },
      "app.index": {
        cwd : 'app/features',
        src: [
          'index/*.html'
        ],
        dest: 'app/build/app.index.templates.js'
      },
      "app.login": {
        cwd : 'app/features',
        src: [
          'login/*.html'
        ],
        dest: 'app/build/app.login.templates.js'
      }
    },
    clean: {
      vendor: ['public/js/vendor.js', 'public/js/*.map'],
      build : ['app/build/*']
    },
    less: {
      app: {
        options: {
          paths: ["styles"]
        },
        files: {
          "public/styles/app.css": "styles/app.less"
        }
      }
    },
    watch: {
      styles : {
        files : ['styles/*.less'],
        tasks : ['less:app']
      },
      html : {
        files: [
          'app/*.html',
          'app/**/*.html',
          'app/**/**/*.html',
          'app/**/**/**/*.html'
        ],
        tasks: ['ngtemplates', 'concat:app.templates', 'clean:build'],
        options: {
          interrupt: true
        }
      },
      app: {
        files: appLibs,
        tasks: ['concat:app'],
        options: {
          interrupt: true,
          livereload: true
        }
      },
      grunt: {
        files: 'Gruntfile.js',
        tasks: ['clean:vendor', 'concat:styles', 'concat:vendor', 'copy:fonts', 'copy:maps', 'ngtemplates', 'concat:app.templates', 'concat:app', 'less', 'clean:build', 'watch'],
        options: {
          interrupt: true,
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['ngtemplates', 'concat:styles', 'concat:app.templates', 'concat:app', 'less', 'clean:build', 'watch']);
  grunt.registerTask('vendor', ['clean:vendor', 'concat:styles', 'concat:vendor', 'copy:fonts', 'copy:maps']);
};