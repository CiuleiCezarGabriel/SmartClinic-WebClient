const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                ],
            },
            { 
                test: /\.s[ac]ss$/i, 
                use:[ 
                    'style-loader', 
                    'css-loader', 
                    'sass-loader', 
                ]
            }, 
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "./index.html"
        })
    ],
    devServer: {
        historyApiFallback: true
    }
}; 
