// подключаем path к конфигу вебпак
const path = require('path');
// плагин для работы с html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// плагин, который будет каждый раз при сборке проекта удалять содержимое папки dist
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    // точка входа
    entry: { main: './src/pages/index.js' },
    // точка выхода
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: ''
    },

    // добавили режим разработчика
    mode: 'development',

    devServer: {
        // путь, куда "смотрит" режим разработчика
        contentBase: path.resolve(__dirname, './dist'),
        // это ускорит загрузку в режиме разработки
        compress: true,
        // порт, чтобы открывать сайт по адресу localhost:8080 (можно поменять порт)
        port: 8080,
        // сайт будет открываться сам при запуске npm run dev
        open: true
    },

    module: {
        rules: [ // rules — это массив правил
            // добавим в него объект правил для бабеля
            {
                // регулярное выражение, которое ищет все js файлы
                test: /\.js$/,
                // при обработке этих файлов нужно использовать babel-loader
                use: 'babel-loader',
                // исключает папку node_modules, файлы в ней обрабатывать не нужно
                exclude: /node_modules/
            },

            // добавили правило для обработки файлов
            {
                // регулярное выражение, которое ищет все файлы с такими расширениями
                test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource'
            },

            {
                // применять это правило только к CSS-файлам
                test: /\.css$/,
                // при обработке этих файлов нужно использовать
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        // добавьте объект options
                        options: {
                            importLoaders: 1
                        }
                    },
                    // Добавьте postcss-loader
                    'postcss-loader',
                ],
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            // путь к файлу index.html
            template: path.resolve(__dirname, 'src', 'index.html')
        }),

        // использовали плагин
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ],

};
