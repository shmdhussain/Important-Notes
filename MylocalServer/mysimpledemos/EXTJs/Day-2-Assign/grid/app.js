Ext.require([
		'Ext.grid.*',
		'Ext.data.*',
		'Ext.util.*',
		'Ext.state.*'
	]);
Ext.define('Trainee',{
		extend: 'Ext.data.Model',
		fields:[
			{name: 'traineeName'},
			{name: 'taineeId', type: 'float', defaultValue: undefined},
			{name: 'stream'},
			{name: 'contactNumber', type: 'float', defaultValue: undefined}
		       ],
		idProperty: 'trainee'
});

Ext.onReady(function() {
	Ext.QuickTips.init();
	var myData = [
			['Amit Dhiman', 620081, 'Apple',     9620051943],
			['Ajay Sharma', 625412, 'Apple',     6321452547],
			['Rajat Kumar', 521454, 'Java',      5241236547],
			['Shruti',      254123, 'Microsoft', 2312365421],
			['Gurpreet',    620177, 'Apple',     9916224487],
			['Shama',       625412, 'Mobility',  9654214587],
			['Srishti',	625478,	'Cloud',     9874563214],
			['Sheenam', 	625321,	'Cloud',     9874213256],
			['Amandeep',	620145,	'Cloud',     9564789562],
			['Ashok',	632145,	'Cloud',     9787456523],
			['Ashish',	620187,	'Cloud',     8054123654],
			['Chetna',	620857,	'Cloud',     8021456987],
			['Haskiran',	620498,	'Cloud',     8032145698]
		];

		function change(val) {
				if(val=='Apple'){
					return '<span style="color:green;">'+val +'</span>';
				}
				else if(val=='Mobility') {
					return '<span style="color:red;">'+val+'</span>';
				}						
				return val;
			}

		var store = Ext.create('Ext.data.ArrayStore', {
			model: 'Trainee',
			data: myData
			});

		var grid = Ext.create('Ext.grid.Panel', {
				store: store,
				stateful: true,
				collapsible: true,
				multiselect: true,
				stateId: 'stateGrid',
				columns: [
						{
							text: 'Trainee',
							flex: 1,
							sortable: false,
							dataIndex: 'traineeName'
						},
						{
							text: 'Trainee ID',
							width: 75,
							sortable: true,
							dataIndex:'traineeId'
						},
						{
							text: 'Stream',
							width: 75,
							sortable:false,
							dataIndex: 'stream'
						},
						{
							text: 'Contact Number',
							width:85,
							sortable: false,
							dataIndex: 'contactNumber'
						}
					],
					height: 600,
					width: 800,
					title: 'Array Grid',
       					 renderTo: 'grid-example',
        				viewConfig: {
            					stripeRows: true,
            					enableTextSelection: true
        					}
    				});
		});
				
					
		