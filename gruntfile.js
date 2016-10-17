module.exports = function (grunt) {

	grunt.initConfig({
		imagemin: {
			dist: { // name of the task
				options: {
					optimizationLevel: 7 // maximum optimization level
		    },
		    files: [{
					expand: true,
					cwd: 'img/', // src folder
					src: ['**/*.{png,jpg,gif}'],
					dest: 'dist/' // destination folder
		    },{
		    	expand: true,
		    	cwd: 'views/images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'dist/'
		   	}]
		  }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default', ['imagemin']);

}