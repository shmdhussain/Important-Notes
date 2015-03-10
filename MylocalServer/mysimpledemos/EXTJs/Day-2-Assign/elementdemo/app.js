Ext.onReady(function()
		{
			var dh=Ext.core.DomHelper;

			var spec={
				id:'my-ul',
				tag:'ul',
			children: [
				{tag: 'li',id:'item0',html:'List Item 0'},
				{tag: 'li',id:'item1',html:'List Item 1'},
				{tag: 'li',id:'item2',html:'List Item 2'}
				]
			};
		var list=dh.append('mydiv',spec);

		}
	);