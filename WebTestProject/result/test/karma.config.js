module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
        // lib
      'bower_components/angular/angular.js',
      'lib/angular-mocks.js',
      'bower_components/underscore/underscore-min.js',

      // result test
      'demo/result.js',
      'test/resultTest.js'
    ],

    reporters : ['progress', 'coverage','junit'],

    preprocessors : {
      'demo/*.js' : 'coverage'
    },

    singleRun : true,

    coverageReporter : {
      type : 'html',
      dir : 'testReport/'
    },

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-coverage'
    ],

    junitReporter : {
      outputFile: 'karma_report/result.xml',
      suite: 'unit'
    }

  });
};
