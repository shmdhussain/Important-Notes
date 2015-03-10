Ext.onReady(function()
		{
var drawComponent = Ext.create('Ext.draw.Component', {
    viewBox: true,
    items: [{
        type: 'circle',
        fill: '#ffc',
        radius: 20,
        x: 50,
        y: 50
    }]
});

Ext.create('Ext.Window', {
    width: 100,
    height: 100,
    layout: 'fit',
    items: [drawComponent]
}).show();

});