module.exports = function (grunt) {
  grunt.initConfig({
    autoprefixer: {
      dist: {
        files: {
          "build/style.css": "style.css" // Fix this later
        }
      }
    },
    watch: {
      styles: {
        files: ["./global.css"],// Add other styles later (if needed)
        tasks: ["autoprefixer"]
      }
    }
  });
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks("grunt-contrib-watch");
};