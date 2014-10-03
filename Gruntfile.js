module.exports = function( grunt ){
    grunt.initConfig({
        "notify": {
            'requirejs': {
                "options": {
                    "title": 'Build Succeeded',
                    "message": 'RequireJS has finished compiling',
                }
            }
        },
        "bower": {
            "install":{
                "options":{
                    "layout": "byComponent",
                    "targetDir": "./vendor",
                    "cleanBowerDir": true,
                    "verbose": true
                }
            }
        },
        "jshint":{
            "main": {
                "src": ["src/**/*.js"],
            }
        },
        "requirejs":{
            "compile":{
                "options":{
                    "baseUrl": "src/",
                    "paths": {
                        // LIBRARIES
                        "backbone":             "../vendor/backbone/backbone",
                        "underscore":           "../vendor/underscore/underscore",
                        "jquery":               "empty:"
                    },
                    "shim": {
                        "backbone": {
                            "exports": "Backbone"
                        },
                        "underscore": {
                            "exports": "_"
                        }
                    },
                    "optimize": "uglify2",
                    "generateSourceMaps": true,
                    "preserveLicenseComments": false,
                    "name": "layout",
                    "out": "build/ribcage.js"
                }
            }
        },
        "watch": {
            "js": {
                "files": ['src/**/*.js'],
                "tasks": ['code']
            }
        }
    });

    // contrib tasks
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-requirejs' );
    grunt.loadNpmTasks( 'grunt-contrib-jshint' );

    // Non-contrib tasks
    grunt.loadNpmTasks( 'grunt-bower-task' );
    grunt.loadNpmTasks( 'grunt-notify' );

    // Custom tasks
    grunt.registerTask( 'clean', "Wipe the build directory", function(){
        grunt.file.delete( "./build" );
        grunt.file.mkdir( "./build" );
    });

    grunt.registerTask( 'prepare', "Prepare directory structure for anything necessary", function(){
        grunt.task.run( ['clean'] );
        grunt.file.mkdir( "./vendor" );
    });

    grunt.registerTask( 'code', 'Compile the code', function(){
        grunt.task.run(['jshint:main', 'requirejs:compile', 'notify:requirejs']);
    });

    grunt.registerTask( 'build', 'Do a system build', function(){
        grunt.task.run(['code']);
    });



    grunt.registerTask( 'setup', ['prepare', 'bower:install'] );
    grunt.registerTask( 'default', ['build', 'watch'] );
};
