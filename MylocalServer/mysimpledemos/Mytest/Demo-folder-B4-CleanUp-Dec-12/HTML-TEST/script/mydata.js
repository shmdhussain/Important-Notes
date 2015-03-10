

(function($) {
	
	$.Poshytip = function(elm) {
		console.log("insde poshytip poseudo functionm");
		this.$elm = $(elm);
		this.init();
	};

	$.Poshytip.prototype = {
		init:function() {
			this.$elm.data('mydata', this);
			this.$elm.bind({
				'mouseenter.poshytip': $.proxy(this.mouseenter, this),
				'mouseleave.poshytip': $.proxy(this.mouseleave, this),
				
				/* Fix for help icon click starts*/
				click: function(e) {
					return false;		
				}
				/* Fix for help icon click ends */	
			});
		
		},
		
		mouseenter: function(e) {
			console.log("insde enter");
			this.$elm.css('background-color', 'red');
		},
		mouseleave: function(e) {
			console.log("insde leave");
			this.$elm.css('background-color', 'blue');
		}
		
	};

	$.fn.poshytip = function(){
		console.log("hi inside poshytip plugin definition");
		return this.each(function() {
			new $.Poshytip(this);
		});
	}

	
})(jQuery);