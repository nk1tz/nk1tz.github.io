var grunt = require('grunt');
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks 
 
grunt.initConfig({
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'css/main.css': 'sass/main.scss'
            }
        }
    },
    watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
});

grunt.loadNpmTasks('grunt-contrib-watch');
 
grunt.registerTask('default', ['watch']);