'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    var userConfig = require('./build.config.js');

    var taskConfig = {

        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            allFiles: [
                '<%= app_files.js %>'
            ]
        },

        less: {
            production: {
                options: {
                    cleancss: true
                },
                files: {
                    "css/main.css": "less/main.less"
                }
            }
        },

        clean: {
            build: ['build']
        },

        requirejs: {
            compile: {
                options: {
                    baseUrl: '<%= path.baseUrl %>',
                    mainConfigFile: '<%= path.baseUrl %>/require.config.js',
                    include: 'main',
                    dir: 'build',
                    useStrict: true,
                    preserveLicenseComments: true,
                    skipDirOptimize: true,
                    inlineText: false,
                    skipModuleInsertion: false,
                    optimize: 'uglify2',
                    uglify2: {
                        mangle: false,
                        output: {
                            beautify: true
                        }
                    },
                    modules: [
                        {
                            name: 'main'
                        }
                    ]
                }
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['build/main.js'],
                dest: 'js/main.min.js'
            }
        }

    };


    grunt.initConfig(grunt.util._.extend(taskConfig, userConfig));

    grunt.registerTask('build', ['clean', 'requirejs', 'concat']);



};