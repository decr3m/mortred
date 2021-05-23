const path = require("path");
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: {
        index: "./index.tsx",
    },
    mode: "production",
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(
            __dirname,
            "..",
            "content/panorama/scripts/custom_game"
        ),
    },
    resolve: {
        extensions: [".ts", ".tsx", "..."],
        symlinks: false,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: { transpileOnly: true },
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"],
        // Required because of reverse symlinking
        symlinks: false,
    },
    // plugins: [
    //     new ForkTsCheckerWebpackPlugin({
    //         typescript: {
    //             configFile: path.resolve(__dirname, "tsconfig.json"),
    //         },
    //     }),
    // ],
};
