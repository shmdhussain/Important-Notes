Ext.onReady(function() {
		Ext.define('Employee', {
			extend: 'Ext.form.Panel',
	initComponent: function(){
		Employee.superclass.initComponent.apply(this,arguments);
		this.addEvents('assigned','dismissed');
	},
	assign: function(employee,position){
	this.fireEvent('assigned',this,employee,position);
	},
	dismiss: function(employee,position){
	this.fireEvent('dismissed',this,employee,position);
	}
	});
var panel = new Employee({
				id:'employee-panel',
				title: 'Event Example',
				renderTo: Ext.getBody(),
				frame: true,
				height: 400,
				width: 600,
				items:[{
					xtype: 'textfield',
					id: 'employee-name',
					width:350,
					fieldLabel: 'my Employee Name',
					},
					{
					xtype: 'textfield',
					id: 'employee-position',
					width:710,
					fieldLabel: 'my Position'
					}],
				buttons: [{
						text:'Assign',
						handler: function(){
							 var employee = Ext.getCmp('employee-name').getValue();
							 var position = Ext.getCmp('employee-position').getValue();
							 panel.assign(employee,position);
					    }
					},
					{
						text:'Dismiss',
						handler: function(){
							 var employee = Ext.getCmp('employee-name').getValue();
							 var position = Ext.getCmp('employee-position').getValue();
							 panel.dismiss(employee,position);
						}
					}],
				listeners:{
						assigned:function(thisCmp,employee,position){
							alert("Assigned Employee "+employee+" to the position "+position);
					    },
					    
					    	dismissed:function(thisCmp,employee,position){
							alert("Dismissed Employee from "+employee+" from the position of "+position);
					    }
					    }
					    
					});	
	
	
	
		
});

