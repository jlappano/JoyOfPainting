module.exports = {
    entry : {
        'main': [
            "./src/app.js"
        ]
    },
    output: {
        filename: "app.js",
        path : './',
        publicPath : '/'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel']},
            { test: /\.json$/, loader: 'json'},
            { test: /\.scss$/, loaders: ["style", "css", "sass"]},
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    resolve: {
        modulesDirectories: [
            'node_modules',
            'src'
        ],
        extensions: ['', '.json', '.js', '.jsx']
    }
};