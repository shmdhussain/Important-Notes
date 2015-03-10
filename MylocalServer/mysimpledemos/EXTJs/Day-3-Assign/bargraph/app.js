Ext.onReady(function(){
var store = Ext.create('Ext.data.JsonStore', {
    fields: ['name', 'data'],
    data: [
        { 'name': 'metric one',   'data':10 },
        { 'name': 'metric two',   'data': 7 },
        { 'name': 'metric three', 'data': 5 },
        { 'name': 'metric four',  'data': 2 },
        { 'name': 'metric five',  'data':27 }
    ]
});

Ext.create('Ext.chart.Chart', {
    renderTo: Ext.getBody(),
    width: 500,
    height: 300,
    animate: true,
    store: store,
    axes: [{
        type: 'Category',
        position: 'bottom',
        fields: ['name'],
        title: 'my Sample Values',
        
       
    }, {
        type: 'Numeric',
        position: 'left',
        fields: ['data'],
        title: 'my Sample Metrics',
		minimum:0,
		maximum:50,
		minorTickSteps: 10,
		grid: true,
    }],
    series: [{
        type: 'column',
        axis: 'left',
        highlight: true,
        tips: {
          trackMouse: true,
          width: 140,
          height: 28,
          renderer: function(storeItem, item) {
            this.setTitle(storeItem.get('name') + ': ' + storeItem.get('data') + ' views');
          }
        },
        label: {
          display: 'insideEnd',
            field: 'data',
            renderer: Ext.util.Format.numberRenderer('0'),
            orientation: 'horizontal',
            color: '#333',
			orientation: 'vertical',
            'text-anchor': 'middle'
        },
        xField: 'name',
        yField: 'data'
    }],
	legend: {
        position: 'bottom'
    }
});
});