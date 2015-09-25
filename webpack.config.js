var ngAnnotatePlugin = require('ng-annotate-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'sourcemap',
    output: {
        filename: 'bundle.js',
        path: __dirname + "/dist"
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'babel?optional[]=runtime&stage=0&cacheDirectory'},
            {test: /\.html$/, loader: 'raw'},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!sass-loader?outputStyle=expanded&sourceMap=map")},
            {test: /\.css$/, loader: 'style!css'}
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        alias: {
            'npm': __dirname + '/node_modules',
            'common': __dirname + '/client/app/common'
        }
    },
    plugins: [
        new ExtractTextPlugin("style.css", {
            allChunks: true
        })
    ]
};
