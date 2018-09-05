import serve from "rollup-plugin-serve";

export default {
    input: "./src/main.js",
    output: {
        file: "./dist/js/game.js",
        format: "iife"
    },
    
    plugins: [
        serve('dist')
    ]
}