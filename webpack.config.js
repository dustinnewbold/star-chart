const path = require('path');

const mode = process.env.NODE_ENV || 'development';
console.log(`Running in ${mode} mode.`);

module.exports = {
    mode,
    entry: './src/starchart.ts',
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'starchart.js',
        path: path.resolve(__dirname, 'dist'),
    },
};