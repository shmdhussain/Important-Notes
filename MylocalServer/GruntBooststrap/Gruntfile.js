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
		},
		
		//our LESS options
		less: {
		  development: {
			files: {
			  "build/GruntDemo/lib/custom/myBootstrap.css": "build/GruntDemo/lib/custom/custom-bootstrap.less"
			}
		  }
		 },
		
		watch: {
			files: ['build/GruntDemo/lib/custom/*.less'],
			tasks: ["less"]
		}
    });
	
	
	//load our tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
}
