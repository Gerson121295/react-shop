const path = require('path'); //saber donde vamos a trabajar, ubicacion del proyecto "nuestra PC o de otra persona"
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', //donde esta el punto de entrada de nuestra App. estará en src/y usara el archivo principal index.js
    output: { //donde va a vivir el proyecto cuando este preparado
        path: path.resolve(__dirname, 'dist'),   //dis, puede ser otro nombre, como main
        filename: 'bundle.js', //nombre del empaquetado que se va a crear
    },
    mode: 'development', //trabajar en modo desarrollador en esta configuracion
    resolve: {
        extensions: ['.js','.jsx'],
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/, //no quiero que lea modules
                use:{
                    loader:'babel-loader',
                } 
            },
            {
                test: /\.html$/, //trabajar directamente con HTML
                use: [
                    {
                        loader: 'html-loader',
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
    ]
}

