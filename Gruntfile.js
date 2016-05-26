module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    transform: [
                        ["babelify", {
                            plugins: ["transform-react-jsx", "transform-es2015-arrow-functions"],
                            presets: ["es2015", "react"]
                        }]
                    ]
                },
                files: {
                    "./build/bundle.js": ["./app/**/*.js"]
                }
            }
        },
        watch: {
            scripts: {
                files: ["./app/**/*.js"],
                tasks: ["browserify"]
            }
        },

        clean: ['build']

    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    
    grunt.registerTask("default", ["clean", "watch"]);
    grunt.registerTask("build", ["clean", "browserify"]);
}
