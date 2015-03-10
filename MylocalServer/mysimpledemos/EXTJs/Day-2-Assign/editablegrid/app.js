Ext.onReady(function(){
	
	Ext.define('User',{
		extend: 'Ext.data.Model',
		fields: ['name','email','phone']
	});
	
	var userStore = Ext.create('Ext.data.Store', {
    model: 'User',
	proxy: {
		type: 'ajax',
		url: 'http://localhost:88/ext-folder/day-2-assign/editablegrid/users.json',
		reader: {
			type:'json',
			root:'products',
			successProperty: 'success'
		},
		writer: {
			type:'json',
			root:'products',
			successProperty: 'success'
		}
	},
	autoLoad: true,
    
});
	
	Ext.create('Ext.grid.Panel', {
		renderTo: Ext.getBody(),
		store: userStore,
		width: 400,
		height: 200,
		
		title: 'Application Users',
		columns: [
			{
				text: 'Name',
				width: 100,
				sortable: false,
				hideable: false,
				dataIndex: 'name',
				editor: {
					xtype: 'textfield',
					allowBlank: false
				}
			},
			{
				text: 'Email Address',
				width: 150,
				dataIndex: 'email',
				hidden: false,
				renderer: function(value) {
					return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
				},
				editor: {
					xtype: 'textfield',
					allowBlank: false
				}
			},
			{
				text: 'Phone Number',
				flex: 1,
				dataIndex: 'phone',
				editor: {
					xtype: 'textfield',
					allowBlank: false
				}
			}
		],
		selType: 'rowmodel',
		plugins: [
			Ext.create('Ext.grid.plugin.RowEditing',{
				clicksToEdit: 2
			})
		]
	});

});