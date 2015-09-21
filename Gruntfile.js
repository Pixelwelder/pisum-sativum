module.exports = function(grunt) {
	
	// TODO Concatenation and uglification.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		// Variables.
		config: {
			src: 'Source',
			dest: 'Deploy'
		},
		
		clean: {
			build: {
				src: '<%= config.dest %>'
			}
		},
		
		copy: {
			main: {
				files: [
					{	// Copy JS.
						cwd: '<%= config.src %>/',
						src: [
							'**/*min.js', '!**/*sizzle*', 
							'**/angular.js', // TODO Remove for production.
							'js/model.js' // TODO Remove.
						],
						dest: '<%= config.dest %>/js/',
						expand: true,
						flatten: true
					},
					{	// Copy application HTML.
						cwd: '<%= config.src %>/',
						src: ['**/*.html'],
						dest: '<%= config.dest %>/',
						expand: true
					},
					{	// Copy fonts.
						cwd: '<%= config.src %>/',
						src: ['bower_components/fontawesome/fonts/*'],
						dest: '<%= config.dest %>/fonts/',
						expand: true,
						flatten: true
					}
				]
			}
		},
		
		concat: {
			dist: {
				src: [
					'<%= config.src %>/js/controllers.js',
					'<%= config.src %>/js/filters.js'
				],
				dest: '<%= config.dest %>/js/app.js'
			}
		},

		sass: {
			dist: {
				files: [
					{	// Compile SCSS.
						cwd: '<%= config.src %>/',
						src: [
							'bower_components/fontawesome/scss/font-awesome.scss',
							'sass/*.scss'
						],
						dest: '<%= config.dest %>/css/',
						ext: '.css',
						expand: true,
						flatten: true
					}
				]
			}
		},
		
		watch: {
			options: {
				livereload: true
			},
			
			scripts: {
				files: ['<%= config.src %>/js/*', '<%= config.src %>/*.html'],
				tasks: ['copy', 'concat'],
				options: {
					spawn: false
				}
			},
			
			css: {
				files: ['<%= config.src %>/sass/*'],
				tasks: ['sass'],
				options: {
					spawn: false
				}
			}		
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['clean', 'concat', 'copy', 'sass', 'watch']);
		
}