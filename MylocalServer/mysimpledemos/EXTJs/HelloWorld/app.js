Ext.application({
	name:'HelloWorld',
	launch:function(){
		Ext.create('Ext.container.Viewport',{
			layout:'fit',
			items: [
				{
					title:'hello world Title',
					html:'this is hello world\'s applications page content in html'
				}
			]
		});
	
	}
});

