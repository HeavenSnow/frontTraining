jade = require 'jade'
module.exports = (grunt) ->

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-less'
  grunt.loadNpmTasks 'grunt-contrib-jade'

  grunt.initConfig
    coffee:
      development:
        options:
          sourceMap: false
        files: [
          expand: true
          cwd: "demo/"
          dest: "demo/"
          src: ["*.coffee"]
          ext: ".js"
        ]

    less:
      development:
        options:
          sourceMap: false
        files: [
          expand: true
          cwd: "demo/"
          dest: "demo/"
          src: ["*.less"]
          ext: ".css"
        ]

    jade:
      development:
        options:
          pretty: true
          data:
            debug: false
        files:
          "demo/result.html": ["demo/*.jade"]

  grunt.registerTask 'default', [
    'coffee:development'
    'less:development'
    'jade:development'
  ]