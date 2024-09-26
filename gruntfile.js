module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        sass:{
            dist: {
                options:{
                    style:'compressed'
                },
                files: {
                    './dist/styles/style.css': './src/styles/style.scss'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'src/index.html'
                }
            }
        },
        uglify:{
            target:{
                files:{
                    'dist/scripts/main.js': 'src/scripts/main.js'
                }
            }
        },
        concurrent:{
            target:['sass', 'htmlmin', 'uglify']
        }
    })
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-htmlmin')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.registerTask('default', ['concurrent'])
}