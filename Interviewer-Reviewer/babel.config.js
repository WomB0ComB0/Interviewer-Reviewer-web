module.exports = {
    presets: [
        "@babel/preset-env",
        ["@babel/preset-react", "@babel/preset-typescript", {runtime: "automatic"}]
    ],
    plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-runtime",
    ],
    env: {  
        test: {
            plugins: ["@babel/plugin-transform-modules-commonjs"],
        },
    },
    ignore: ["node_modules","build","dist","coverage","public","src","tests","test","scripts","config","docs","examples","assets","images","img","icons","fonts","font","styles","style","css","scss","sass","less","styl","html","htm","json",
            {targets: {node: "current",},
        },
    ],
};