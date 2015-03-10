module.exports = function(grunt) {
 
    grunt.initConfig({
        //grunt tasks go here
		
		//our JSHint options
        jshint: {
            all: ['build/GruntDemo/js/app.js'] //files to lint
        },
		
		connect: {
			server: {
			  options: {
				port: 9001,
				base: 'build',
				keepalive:true
			  }
			}
		}
		
		
    });
	
	
	//load our tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
}
