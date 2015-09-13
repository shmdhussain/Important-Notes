module.exports = function(grunt) {
 
    grunt.initConfig({
 
        
		
		connect: {
		server: {
		  options: {
			port: 8082,
			base: 'MylocalServer',
			keepalive:true
		  }
		}
	  }
		
		
    });
 
    //load our tasks
    
	grunt.loadNpmTasks('grunt-contrib-connect');
	
	
	//default tasks to run
    grunt.registerTask('default', ['connect']);
    
}