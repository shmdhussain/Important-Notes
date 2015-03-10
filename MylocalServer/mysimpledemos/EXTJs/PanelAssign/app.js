function fnDomReady(){
	Ext.create('Ext.container.Viewport', {
			layout: 'border',
			items: [{
				region: 'north',
				title: 'My North Panel',
				//html: 'my north panel content',
				layout:'hbox',
				collapsible: true,
				split:'true',
				items:[
					{xtype:'panel',title:'title 1',html:'my hbox panel in north 1',flex:3},
					{xtype:'panel',title:'title 2',html:'my hbox panel in north 2',flex:1},
					{xtype:'panel',title:'title 3',html:'my hbox panel in north 3',flex:1}
				]
				
			}, {
				region: 'south',
				title: 'My south Panel',
				html: 'my south panel content',
				layout:'vbox',
				
				items:[
					{xtype:'panel',title:'title 1',html:'my hbox panel in north 1',flex:3},
					{xtype:'panel',title:'title 2',html:'my hbox panel in north 2',flex:1},
					{xtype:'panel',title:'title 3',html:'my hbox panel in north 3',flex:1}
				]
			}, {
				region: 'west',
				title: 'My west Panel',
				html: 'my west panel content',
			},  {
				region: 'east',
				title: 'My east Panel',
				html: 'my east panel content',
				
			},
			{
				region: 'center',
				title: 'My center Panel',
				html: 'my center panel content',
				
			}],
			
	});
}
Ext.onReady(fnDomReady);


