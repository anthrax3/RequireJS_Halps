require.config({
    baseUrl: '/public/js',
    paths: {
        jquery : 'lib/jquery',
        jqMigrate: 'lib/jquery-migrate'
    },
    shim: {
        'jqMigrate': ['jquery']
    },
    waitSeconds: 10
});

require(['jquery', 'jqMigrate'], function($){
    'use strict';

    console.log('jquery version: ' + $().jquery);
    console.log('jquery migrate' + ($.migrateWarnings ? ' is available' : ' is NOT available'));
});
