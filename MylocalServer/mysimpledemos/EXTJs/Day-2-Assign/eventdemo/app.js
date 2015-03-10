Ext.onReady(function(){

	function findChange(fld, newVal,oldVal){
		alert("Value changed from: "+oldVal+"To: "+newVal);
	}

	Ext.create('Ext.panel.Panel',{
			title: 'Event Demo',
			height:100,
			width: 300,
			
			renderTo: Ext.getBody(),
			items: [{
					xtype: 'textfield',
					width: '50%',
					id: 'empName',
					fieldLabel: 'Employee Name',
					listeners: {
						change: findChange,
						delay: 5000,
						buffer: 0
					}
				}]
			});
				
});