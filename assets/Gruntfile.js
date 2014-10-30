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

        karma: {
            unit: {
                configFile: 'js/test/karma.conf.js',
                singleRun: true
            }
        },

        protractor: {
            options: {
                configFile: "js/test/protractor.conf.js", // Default config file
                keepAlive: true, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
                args: {
                    // Arguments passed to the command
                }
            },
            e2e: {
                options: {
                    configFile: "build/protractor-e2e.conf.js", // Target-specific config file
                    args: {
                        baseUrl: 'http://localhost:8100'
                    }
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

        html2js: {
            options: {
                base: './',
                module: 'templates',
                htmlmin: {
                    collapseWhitespace: true,
                    removeComments: true
                }
            },
            main: {
                src: ['js/app/**/*.html'],
                dest: 'build/templates.min.js'
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['build/main.js', 'build/templates.min.js', 'build/constants.js'],
                dest: 'js/main.min.js'
            }
        }

    };


    grunt.initConfig(grunt.util._.extend(taskConfig, userConfig));

    grunt.registerTask('build', ['clean', 'requirejs', 'html2js', 'concat']);

    grunt.registerTask('test', ['karma']);

    grunt.registerTask('release:dev', []);
    grunt.registerTask('release:stage', ['clean', 'less', 'requirejs', 'html2js', 'concat']);

    grunt.registerTask('teamcity:release:prod:linux', [
        'clean',
        'less',
        'requirejs',
        'html2js',
        'concat'
    ]);


    grunt.registerTask('create-version', function() {

        var versionObject = {
            name: taskConfig.pkg.name,
            version: taskConfig.pkg.version
        };

        grunt.file.write('version.json', JSON.stringify(versionObject));
    });


};