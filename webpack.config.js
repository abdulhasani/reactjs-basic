/**
 * Created by Hasani on 3/7/2017.
 */
var path = require("path");

var DIST_DIR = path.resolve(__dirname,"dist");
var SRC_DIR = path.resolve(__dirname,"src");

var config = {
    entry: SRC_DIR+"/app/index.js",
    output:{
        path: DIST_DIR+"/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module:{
        loaders:[
            {
                test: /\.js?/, //Reguler Expression
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react","es2015","stage-2"]
                }//end json object query
            }//end json object array index 0 loaders
        ]//end array loaders
    }//end json object modules
};//end json object config

module.exports = config;

