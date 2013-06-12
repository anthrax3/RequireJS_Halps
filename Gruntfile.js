module.exports = function( grunt ) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        watch: {},
        connect: {
            server: {
                options: {
                    hostname: null, // should be '*' once this drops: https://github.com/gruntjs/grunt-contrib-connect/issues/21
                    port: 3000,
                    base: '.'
                }
            }
        }
    });

    // Plugins
    grunt.loadNpmTasks( 'grunt-contrib-connect' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );

    // Tasks
    grunt.registerTask( 'default', [ 'connect', 'watch' ] );
};
