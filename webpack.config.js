
var wepack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry : './feeds/controller/index.js',
    output : {
        path:  "/dist",
        filename: "app.bundle.js"
    },
    module : {
        loaders : [
            {
                
            }
        ],
    },
    resolve : {
            extensions : [ '' , '.js'  ]
        },
        plugins : [
            
        
        ]
}