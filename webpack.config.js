const path = require("path");

module.exports = {
  entry: "./src/index.js", // Archivo de entrada principal
  output: {
    filename: "bundle.js", // Archivo de salida
    path: path.resolve(__dirname, "public/js"), // Carpeta de salida
  },
  mode: "development", // Usa 'production' para producción
  module: {
    rules: [
      {
        test: /\.js$/, // Aplica la configuración a archivos .js
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Usa Babel para transpilar ES6+
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
