const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const dev = {
    devtool: 'inline-source-map',
    performance: {
     hints: false
    },
    mode: 'development'
}

const config = {
    entry: './src/index.tsx',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }, 
            {    
                test: /\.(sass|scss)$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }] 
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
        alias: {
            // THIS APP'S CUSTOM PACKAGES:
           'view': path.resolve(__dirname, 'view'),
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve('build')
    },
    devServer: {
        contentBase: false,  
        publicPath: "/",
        historyApiFallback: true,
        https: true,
        open: true,
        port: 4000,
        overlay: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({  
            filename: path.resolve('build', 'index.html'),  
            template: path.resolve('public', 'index.html'),
            inject: false,
            hash: true           
        })
    ]
};

module.exports = env => {
    // Use env.<YOUR VARIABLE> here:  
    return env && env.production ? config : Object.assign(config, dev);
};