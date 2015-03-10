Ext.onReady(function(){
var model= Ext.define('piechart',{
	extend: 'Ext.data.Model',
	fields: ['name','data']
});

var store= Ext.create('Ext.data.Store',{
	model: 'piechart',
	data: [
				{ 'name': 'metric one',   'data': 10 },
		        { 'name': 'metric two',   'data':  7 },
		        { 'name': 'metric three', 'data':  5 },
		        { 'name': 'metric four',  'data':  2 },
		        { 'name': 'metric five',  'data': 27 }
	]
});

var chart= Ext.create('Ext.chart.Chart',{
	renderTo: Ext.getBody(),
	width: 500,
	height: 500,
	animate: true,
	store: store,
	theme: 'Base: gradients',
	series: [{
		type: 'pie',
		angleField: 'data',
		showInLegend: true,
		tips: {
			trackMouse: true,
			width: 140,
			height: 28,
			renderer: function(storeItem,item){
				var total = 0;
				store.each(function(rec){
					total+=rec.get('data');
				});
				this.setTitle(storeItem.get('name') + ':' + Math.round(storeItem.get('data')/total*100) + '%');
			}
		},
		highlight: {
			segment: {
				margin: 10
			}
		},
		label: {
			field: 'name',
			display: 'rotate',
			contrast: true,
			font: '12px cursive'
		}
	}]
});


});