module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
            dist: {
                files: {
                    // Fix this later
                    'build/style.css': 'style.css'
                }
            }
        },
        watch: {
            styles: {
                files: ['./global.css','./index.css'],
                tasks: ['autoprefixer']
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
};