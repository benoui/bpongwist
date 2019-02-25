import CleanPlugin from "clean-webpack-plugin";
// import DotenvPlugin from "dotenv-webpack";
import path from "path";
import * as config from "./config.json";

export default (env = {}) => {
  if (process.env.NODE_ENV === undefined) {
    process.env.NODE_ENV = env.production ? "production" : "development";
  }

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

  const commonPlugins = [
    new CleanPlugin(cleanPaths, cleanOptions),
    // new DotenvPlugin()
  ];

  const developmentPlugins = [...commonPlugins];
  if (config.browserSync && !env.isProduction) {
    new CleanPlugin(cleanPaths, cleanOptions);
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
      contentBase: config.paths.public,
      proxy: config.proxy && config.proxy.length > 0 ? config.proxy : undefined
    },
    devtool: env.production ? "source-map" : "cheap-module-eval-source-map",
    entry: config.entry,
    externals: config.externals,
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.html$/,
          loader: "html-loader"
        },
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
      extensions: [".js"]
    },
    target: "node",
  };
};
