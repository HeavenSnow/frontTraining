jade = require 'jade'
module.exports = (grunt) ->

  grunt.loadNpmTasks 'grunt-contrib-coffee'

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

  grunt.registerTask 'default', [
    'coffee:development'
  ]