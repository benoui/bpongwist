import CleanPlugin from "clean-webpack-plugin";
import DotenvPlugin from "dotenv-webpack";
import HtmlPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import * as config from "./config.json";

export default (env = {}) => {
  if (process.env.NODE_ENV === undefined) {
    process.env.NODE_ENV = env.production ? "production" : "development";
  }

  // ----------------------
  // postcss-loader Options
  // ----------------------

  /* eslint-disable global-require */
  const postcssLoaderOptions = {
    plugins: [
      require("autoprefixer")(),
      require("cssnano")({
        preset: ["default", { discardComments: { removeAll: true } }]
      })
    ]
  };
  /* eslint-enable global-require */

  // ----------------------
  // Plugins
  // ----------------------

  const cleanPaths = !Array.isArray(config.paths.clean)
    ? []
    : config.paths.clean.map(cleanPath => path.join(process.cwd(), cleanPath));
  const cleanOptions = {
    exclude: config.paths.cleanExclude,
    root: process.cwd(),
    verbose: true
  };
  const htmlOptions = {template: "resources/index.html"};
  const miniCssExtractOptions = {
    filename: "css/[name].css",
    chunkFilename: "css/[id].css"
  };

  const commonPlugins = [
    new CleanPlugin(cleanPaths, cleanOptions),
    new DotenvPlugin(),
    new HtmlPlugin(htmlOptions),
    new MiniCssExtractPlugin(miniCssExtractOptions)
  ];

  const developmentPlugins = [...commonPlugins];
  if (config.browserSync && !env.isProduction) {
    new CleanPlugin(cleanPaths, cleanOptions)
    // TODO add here
    // developmentPlugins.push();
  }
  const productionPlugins = [
    ...developmentPlugins
    // TODO add here
    // productionPlugins.push();
  ];

  // ----------------------
  // Config object
  // ----------------------

  return {
    context: process.cwd(),
    devServer: {
      contentBase: config.paths.dist,
      proxy: config.proxy?.length > 0 ? config.proxy : undefined
    },
    devtool: env.production ? "source-map" : "cheap-module-eval-source-map",
    entry: config.entry,
    externals: config.externals,
    module: {
      rules: [
        {
          test: /\.(eot|otf|svg|ttf)$/,
          loader: "file-loader",
          options: { name: "/fonts/[name].[ext]" }
        },
        {
          test: /\.(gif|jpe?g|png|svg)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name: config.names.fileLoader
              }
            },
            "image-webpack-loader?bypassOnDebug"
          ]
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.html$/,
          loader: "html-loader"
        },
        {
          test: /\.(png|gif|jpg)$/,
          loader: "url-loader",
          options: {
            limit: "25000",
            name: config.names.urlLoader
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: { sourceMap: true }
            },
            "resolve-url-loader",
            {
              loader: "postcss-loader",
              options: postcssLoaderOptions
            },
            {
              loader: "sass-loader",
              options: { sourceMap: true }
            },
            {
              loader: "sass-resources-loader",
              options: {
                resources: config.paths.sassResources
              }
            }
          ]
        },
        {
          test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: "url-loader",
              options: {
                fallback: "file-loader",
                limit: 10000,
                outputPath: config.paths.urlLoader.output,
                publicPath: config.paths.urlLoader.public
              }
            }
          ]
        }
      ]
    },
    output: {
      devtoolModuleFilenameTemplate: "webpack:///[absolute-resource-path]",
      filename: env.production ? "js/[name].[hash].js" : "js/[name].js",
      path: path.join(process.cwd(), config.paths.output),
      publicPath: ""
    },
    plugins: env.production ? productionPlugins : developmentPlugins,
    resolve: {
      extensions: [".js", ".jsx"]
    }
  };
};
