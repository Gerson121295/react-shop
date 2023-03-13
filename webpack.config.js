
const path = require('path'); //saber donde vamos a trabajar, ubicacion del proyecto "nuestra PC o de otra persona"
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js', //donde esta el punto de entrada de nuestra App. estará en src/y usara el archivo principal index.js
    output: { //donde va a vivir el proyecto cuando este preparado
        path: path.resolve(__dirname, 'dist'),   //dis, puede ser otro nombre, como main
        filename: 'bundle.js', //nombre del empaquetado que se va a crear
        publicPath: '/'  //para las rutas.
    },
    mode: 'development', //trabajar en modo desarrollador en esta configuracion
    resolve: {
        extensions: ['.js','.jsx'],
        alias: { //para imagenes y no agregar la ruta de las carpetas e importarla, si no su alias
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@icons': path.resolve(__dirname, 'src/asset/icons/'),
            '@logos': path.resolve(__dirname, 'src/asset/logos/'),
        }
    },
    module:{
        rules:[
         //     {
         //       test: /\.(png|jpg|svg|jpeg|webp)$/,/* Test agrega la expresion regular para procesar los diferentes tipos de imagenes que tengas */
         //       type:'asset/resource',
         //       generator:{
        //        filename: 'assets/pictures/[hash][ext]',/* Carpeta que guarde las imagenes, [hash] para evitar problemas con el cache, [ext] referencia a la extencion del archivo procesado. */
        //      }
        //     }, 

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
            },
            {
                test: /\.(css|scss)$/,   //dientificar_los_archivos_que_vamos a estar trabajando, se usa una regla para identificarlo CSS u otro
                use:[ //add configuracion para trabajar con los loaders
                    "style-loader",  // Creates `style` nodes from JS strings
                    "css-loader",  // Translates CSS into CommonJS
                    "sass-loader",  // Compiles Sass to CSS
                ],
            },
            {
                test:  /\.(png|svg|jpg|gig|jpeg)$/,  // tipo de archivos que acepta
                type: 'asset'
            }
        ]
    },
    plugins:[ //se agrega los plugins
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
     devServer:{ //configuracion para trabajar en modo desarrollo para que el servidor funcione. funcione el entorno local
        static:{
            directory: path.join(__dirname, 'public'),  //donde trabaja el proyecto
        },
    compress: true,
    port:9000, //puerto  a usar:  entre los permitidos para exponer el proyecto: el 3000 o 3005 
    historyApiFallback: true,
    } 

   /*  devServer: {
		historyApiFallback: true,
	} */

}

