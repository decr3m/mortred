const path = require("path");
const { PanoramaManifestPlugin } = require("webpack-panorama");
/** @type {import('webpack').Configuration} */
module.exports = {
    mode: "development",
    context: path.resolve(__dirname, "src"),
    output: {
        path: path.resolve(__dirname, "layout/custom_game"),
        publicPath: "file://{resources}/layout/custom_game/",
    },

    resolve: {
        // Required because of reverse symlinking
        symlinks: false,
    },
    module: {
        rules: [
            { test: /\.xml$/, loader: "webpack-panorama/lib/layout-loader" },
            {
                test: /\.js$/,
                issuer: /\.xml$/,
                loader: "webpack-panorama/lib/entry-loader",
            },
            {
                test: /\.(css|s[ac]ss)$/,
                issuer: /\.xml$/,
                loader: "file-loader",
                options: { name: "[path][name].css", esModule: false },
            },
            { test: /\.s[ac]ss$/, loader: "sass-loader" },
        ],
    },
    plugins: [
        new PanoramaManifestPlugin({
            entries: [
                { import: "./manifest.js" },
                { import: "./hud/layout.xml", type: "Hud" },
            ],
        }),
    ],
};
