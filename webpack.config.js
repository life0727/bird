const path = require('path');

module.exports = {
    mode:'development',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test:/\.(c|sa|sc)ss$/,
                use:['style-loader','css-loader','sass-loader' ]
            }
        ]
    }
}