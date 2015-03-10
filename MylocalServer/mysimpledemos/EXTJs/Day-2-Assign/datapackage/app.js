Ext.onReady(function(){
	Ext.define('Users',{
		extend: 'Ext.data.Model',
		fields: ['id','name']
	});
	
	var userStore = Ext.create('Ext.data.Store',{
			model: 'Users',
			proxy: {
				type: 'ajax',
				url: 'http://localhost:88/ext-folder/day-2-assign/datapackage/users.json',
				reader: {
					type:'json',
					root:'products',
					successProperty: 'success'
				}
			},
			autoLoad: true,
	});
	
	Ext.create('Ext.grid.Panel',{
			renderTo: Ext.getBody(),
			store: userStore,
			width: 400,
			height: 200,
			title: 'Application Users',
			columns: [
				{
					text: 'ID',
					width: 100,
					//sortable: true,
					//hideable: false,
					dataIndex: 'id'
				},
				{
					text: 'Name',
					width: 300,
					dataIndex: 'name'
				}
			]
	});
});