module.exports = {

    dirs: {
        base:   'js',
        app:    'js/app',
        images: 'js/images',
        less:   'js/less',
        fonts:  'js/fonts',
        test:   'js/test',
        vendors:'js/vendors'
    },

    app_files: {
        js: [
            'js/app/**/*.js',
            '!js/app/**/*.spec.js'
        ],
        less: 'less/main.less'
    },

    path: {
        baseUrl: './js/app'
    }
};