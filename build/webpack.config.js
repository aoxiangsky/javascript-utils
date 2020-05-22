const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const webpackJsConfig = {
    mode: "production",
    entry:"../src/index.ts",
    devtool: "cheap-module-source-map",
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"]
    },
    module:{
        rules:[
          { test: /\.tsx?$/, loader: "ts-loader" ,options: {
            // disable type checker - we will use it in fork plugin
            transpileOnly: true
          }},
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: [
                  // { loader: "thread-loader" },
                  {
                    loader: "babel-loader",
                  },
                ],
              },
        ]
    },
    optimization:{
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                exclude: /node_modules/,
                include: path.resolve(__dirname, "../src"),
                parallel: true,
                cache: true,
                sourceMap: true,
                terserOptions: {
                  compress: {
                    warnings: false,
                    drop_console: true,
                    drop_debugger: true,
                  },
                },
              }),
        ]
    },
    plugins:[
      new ForkTsCheckerWebpackPlugin(),
        new CompressionWebpackPlugin({
            filename: "[path].gz[query]",
            algorithm: "gzip",
            cache: true,
            test: /\.tsx?$/,
            threshold: 10240,
            minRatio: 0.8,
          })
    ],
    output:{
        library:"libarary"
    }
}

module.exports = webpackJsConfig
