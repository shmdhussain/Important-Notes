Ext.onReady(function(){
	Ext.define('WeatherPoint',{
			extend: 'Ext.data.Model',
			fields: ['temperature','date']
			});

	var store = Ext.create('Ext.data.Store',{
				model: 'WeatherPoint',
				data: [
	   { temperature: 58, date: new Date(2011, 1, 1, 8) },
        { temperature: 63, date: new Date(2011, 1, 1, 9) },
        { temperature: 73, date: new Date(2011, 1, 1, 10) },
        { temperature: 78, date: new Date(2011, 1, 1, 11) },
        { temperature: 81, date: new Date(2011, 1, 1, 12) }
					]
			});

	
	var chart = Ext.create('Ext.chart.Chart',{
			theme: 'Blue',
			width: 500,
			renderTo: Ext.getBody(),	
			height: 500,
			store: store,
			
			axes: [{
				type: 'Numeric',
				position: 'left',
				fields: ['temperature'],
				title: 'Temperature',
				minimum: 55,
				maximum: 85,
				minorTickSteps: 10
			        }, 
				{
            		title: 'Time',
           		 type: 'Time',
          			  position: 'bottom',
           		 fields: ['date'],
           		 dateFormat: 'g:i a'
				
        }],
			series: [{
				type: 'line',
				xField: 'date',
				yField: 'temperature'
				}]

	});

});