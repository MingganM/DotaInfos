const webpackCommon = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(webpackCommon, {
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/heroes.html",
            filename: "heroes"
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i, //either sass or scss
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    },
                ]
            }
        ]
    }
});