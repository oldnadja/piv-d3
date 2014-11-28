module.exports = {

    dirs: {
        base:   'js',
        app:    'js/modules',
        images: 'js/images',
        less:   'js/less',
        fonts:  'js/fonts',
        test:   'js/test',
        vendors:'js/vendors'
    },

    app_files: {
        js: [
            'js/modules/**/*.js',
            '!js/modules/**/*.spec.js'
        ],
        less: 'less/main.less'
    },

    path: {
        baseUrl: './js/modules'
    }
};