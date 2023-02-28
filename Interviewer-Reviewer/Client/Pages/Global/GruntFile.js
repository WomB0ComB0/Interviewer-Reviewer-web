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
                files: ['./global.css'],
                tasks: ['autoprefixer']
                // Add other styles later (if needed)
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
};