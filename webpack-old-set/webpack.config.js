const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    //entry: "./js/main.js",
    entry: {
        //phaser: './js/phaser-2.13.3.min.js',
        bundle: './root/root.js'
    },
    output: {
        filename: "./js-prod/[name].js",
        path: path.resolve(__dirname, "./prod")
    },
    watch: false,
    // mode: "development",
    // devtool: "source-map",
    optimization: {
        runtimeChunk: true,
        minimizer: [
            new UglifyJsPlugin({
                include: /\/includes/,
                // exclude: /\/excludes/,
            }),
        ],
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.m?js$/,
    //             exclude: /(node_modules|bower_components)/,
    //             use: {
    //                 loader: "babel-loader",
    //                 options: {
    //                     presets: ["@babel/preset-env"]
    //                     //compact: false    // or false during development
    //                 }
    //             }
    //         },
    //         {
    //             test: /\.s[ac]ss$/i,
    //             use: [
    //                 'style-loader',
    //                 'css-loader',
    //                 {
    //                     loader: 'sass-loader',
    //                     options: {
    //                         implementation: require('sass'), // Prefer `dart-sass`
    //                     },
    //                 },
    //             ],
    //         }
    //     ]
    // }
}