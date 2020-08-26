const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "bundle.js"
  },
  // mode: 'development',
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        use: {
          loader: "awesome-typescript-loader",
          options: {
            plugins: ["react-hot-loader/babel"]
          }
        }
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(css|less)$/,
        use: ["style-loader",
          {
            loader: "css-loader",
            // options: {
            //   modules: {
            //      mode: "local",
            //     localIdentName: "[path][name]-[local]-[hash:5]",
            //   }
            // }//防止css污染，但是ts引入css less模块有问题，关于css模块解决方案有types-for-css-module等，https://blog.csdn.net/qq_20473985/article/details/79132787?utm_source=blogxgwz1，暂未找到解决less，scss解决方案
          },
          "less-loader"]
      },
      // {
      //   test: /\.bundle\.js$/,
      //   use: {
      //     loader: 'bundle-loader',
      //     options: {
      //       lazy: true,
      //       name: '[name]'
      //     }
      //   }
      // }
    ]
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(process.cwd(), "build/"), path.resolve(process.cwd(), "dist/")]
    }),
    // new ExtractTextPlugin({
    //   filename: "[name][hash].css"
    // }),
         new webpack.DllReferencePlugin({
      context: '.',
      manifest: require("../manifest/bundle_dev.json"),
        }),
  ]
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //     "react": "React",
  //     "react-dom": "ReactDOM"
  // }
};
