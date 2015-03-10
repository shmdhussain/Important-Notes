function fnMyvp(){
	Ext.create('Ext.container.Viewport', {
		layout: 'border',
		//renderTo:Ext.getBody(),
		items: [{
			region: 'north',
			html: '<h1 class="x-panel-header">Page Title</h1>',
			autoHeight: true,
			border: false,
			margins: '0 0 5 0'
		}, {
			region: 'west',
			collapsible: false,
			border: false,
			title: 'Navigation',
			width: 150
			// could use a TreePanel or AccordionLayout for navigational items
		}, {
			region: 'south',
			title: 'South Panel',
			collapsible: true,
			html: 'Information goes here',
			split: true,//split means the inbetween center collapsible button
			height: 100,
			minHeight: 100
		},  {
			region: 'center',
			xtype: 'tabpanel', // TabPanel itself has no title
			activeTab: 0,      // First tab active by default
			border: false,
			items: {
				title: 'Default Tab',
				html: 'The first tab\'s content. Others may be added dynamically'
			}
			/*items: {
				title: 'sec Tab',
				html: 'The first tab\'s content. Others may be added dynamically'
			},
			items: {
				title: '3 Tab',
				html: 'The first tab\'s content. Others may be added dynamically'
			},
			items: {
				title: '4 Tab',
				html: 'The first tab\'s content. Others may be added dynamically'
			},
			items: {
				title: '5 Tab',
				html: 'The first tab\'s content. Others may be added dynamically'
			},
			items: {
				title: '6 Tab',
				html: 'The first tab\'s content. Others may be added dynamically'
			},
			items: {
				title: '7 Tab',
				html: 'The first tab\'s content. Others may be added dynamically'
			},
			items: {
				title: '8 Tab',
				html: 'The first tab\'s content. Others may be added dynamically'
			},
			items: {
				title: '9 Tab',
				html: 'The first tab\'s content. Others may be added dynamically'
			},
			items: {
				title: '10 Tab',
				html: 'The first tab\'s content. Others may be added dynamically'
			}*/
		}]
	});
}

Ext.onReady(fnMyvp);
