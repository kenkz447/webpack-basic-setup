const path = require('path');
// ExtractTextPlugin sẽ tách các file scss ra và gộp tất cả vào 1 file css duy nhất
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // Webpack sẽ bắt đầu mọi thứ từ đây
    entry: './src/app.js',
    output: {
        // Đây là nơi webpack sẽ xuất tất cả các file sau khi build.
        // các file js sẽ được gộp thành 1 file được đặt tên là bundle.js 
        // và xuất hiện bên trong thư mục dist (distribution).
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};