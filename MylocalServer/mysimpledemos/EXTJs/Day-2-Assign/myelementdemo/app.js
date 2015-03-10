Ext.onReady(function()
		{
			
			var html = '<div class="ff">{text}</div>';
			var tpl = new Ext.DomHelper.createTemplate(html);
			tpl.append('mydiv', {
				id: 'link1',
				url: 'http://www.edspencer.net/',
				text: "Ed's Site"
			});
			tpl.append('mydiv', {
				id: 'link2',
				url: 'http://www.dustindiaz.com/',
				text: "Dustin's Site"
			});

		}
	);