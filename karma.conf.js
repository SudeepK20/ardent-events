// Karma configuration
// Generated on Wed Oct 28 2015 10:21:04 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'src/assets/lib/bower_components/angular/angular.js',
      'src/assets/lib/bower_components/angular-mocks/angular-mocks.js',
      'src/assets/lib/bower_components/angular-ui-router/release/angular-ui-router.js',
      'src/assets/lib/bower_components/angular-scroll/angular-scroll.js',
      'src/assets/lib/bower_components/ngclipboard/dist/ngclipboard.js',
      'src/assets/lib/bower_components/angular-sanitize/angular-sanitize.js',
      'src/assets/lib/bower_components/angular-bootstrap/ui-bootstrap.js',
      'src/assets/lib/bower_components/angular-scroll/angular-scroll.js',
      'src/assets/lib/bower_components/angular-file-upload/dist/angular-file-upload.min.js',

      'src/app.js',
      'src/components/**/*-module.js',
      'src/components/**/*-routes.js',
      'src/components/**/*-filters.js',
      'src/components/**/*-service.js',
      'src/components/**/*-directive.js',
      'src/components/**/*-controller.js' ,

      'src/**/*.html',
      'src/index.html',
      'src/components/**/views/*.html',

      'src/test/*.js',
      'src/test/**/*.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    preprocessors: {
      'src/**/*.html' : 'ng-html2js'
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: "src/.*/",
      prependPrefix: "views/",
      moduleName    : 'templates'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 8080,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
