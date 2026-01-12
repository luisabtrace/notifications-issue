import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 1212;

export default {
  mode: "production",

  target: "web",

  devtool: "cheap-source-map",

  entry: [import.meta.resolve("./src/index.tsx")],

  output: {
    path: path.join(__dirname, "dist"),
    publicPath: `http://localhost:${port}/dist/`,
    filename: "renderer.dev.js",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: [".mjs", ".js", ".jsx", ".json", ".ts", ".tsx"],
    modules: [path.join(__dirname, "node_modules")],
    symlinks: false,
  },

  performance: {
    hints: false,
  },

  devServer: {
    port,
    compress: true,
    hot: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    static: {
      directory: path.join(__dirname, "dist"),
      watch: {
        ignored: /node_modules/,
      },
    },
    devMiddleware: {
      stats: "minimal",
    },
    allowedHosts: "all",
  },
};
