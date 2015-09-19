module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		copy: {
			main: {
				files: [
					{
						cwd: 'Source/',
						src: ['**/*min.js', '!**/*sizzle*', '**/angular.js'],
						dest: 'Deploy/js/vendor/',
						expand: true,
						flatten: true
					},
					{
						cwd: 'Source/',
						src: ['js/*'],
						dest: 'Deploy/js',
						expand: true,
						flatten: true
					},
					{
						cwd: 'Source/',
						src: ['**/*.html'],
						dest: 'Deploy/',
						expand: true
					}
				]
			}
		},

		sass: {
			dist: {
				files: [{
					cwd: 'Source/',
					src: ['sass/*.scss'],
					dest: 'Deploy/css',
					ext: '.css',
					expand: true,
					flatten: true
				}]
			}
		},
		
		watch: {
			options: {
				livereload: true
			},
			
			scripts: {
				files: ['Source/js/*', 'Source/*.html'],
				tasks: ['copy'],
				options: {
					spawn: false
				}
			},
			
			css: {
				files: ['Source/sass/*'],
				tasks: ['sass'],
				options: {
					spawn: false
				}
			}		
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['copy', 'sass']);
		
}