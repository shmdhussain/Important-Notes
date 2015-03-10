Ext.require(['*']);

Ext.onReady(function(){
    var myData = [
        { name: "Amitabh", email: "Big_B@Bollywood.com", phone: "555-111-1224" },
        { name: "Aiswarya", email: "Lady_B@Bollywood", phone: "555--222-1234" },
        { name: "Aaradhya", email: "Beti_B@Bollywood.com", phone: "555-222-1244" },
        { name: "Abhishek", email: "Wanna_B@Bollywood.com", phone: "555-222-1254" }
    ];

    // Generic fields array to use in both store defs.
    Ext.define('DataObject', {
        extend: 'Ext.data.Model',
        fields: [
            {name: 'name', mapping : 'name'},
            {name: 'email', mapping : 'mail'},
            {name: 'phone', mapping : 'phone'}
        ]
    });

    // create the data store
    var gridStore = Ext.create('Ext.data.Store', {
        model  : 'DataObject',
        data   : myData
    });

    // Column Model shortcut array
    var columns = [
        { id : 'name',      flex:  1,  header: "Name", sortable: true, dataIndex: 'name'},
        {header: "Email", width: 200, sortable: true, dataIndex: 'email'},
        {header: "Phone", width: 100, sortable: true, dataIndex: 'phone'}
    ];

    // declare the source Grid
    var grid = Ext.create('Ext.grid.Panel', {
        viewConfig: {
            plugins: {
                ddGroup: 'GridExample',
                ptype: 'gridviewdragdrop',
                enableDrop: false
            }
        },
        store            : gridStore,
        columns          : columns,
        enableDragDrop   : true,
        stripeRows       : true,
        width            : 500,
        margins          : '0 2 0 0',
        region           : 'west',
        title            : 'Data Grid',
        selModel         : Ext.create('Ext.selection.RowModel', {singleSelect : true})
    });

    // Declare the text fields.  This could have been done inline, is easier to read
    // for folks learning :)
    var textField1 = Ext.create('Ext.form.field.Text', {
        fieldLabel : 'Name',
        name       : 'name'
    });

    var textField2 = Ext.create('Ext.form.field.Text', {
        fieldLabel : 'Email',
        name       : 'email'
    });

    var textField3 = Ext.create('Ext.form.field.Text', {
        fieldLabel : 'Phone',
        name       : 'phone'
    });

    // Setup the form panel
    var formPanel = Ext.create('Ext.form.Panel', {
        region     : 'center',
        title      : 'Information Panel',
        bodyStyle  : 'padding: 10px; background-color: #DFE8F6',
        labelWidth : 100,
        margins    : '0 0 0 3',
        items      : [
            textField1,
            textField2,
            textField3
        ]
    });

    //Simple 'border layout' panel to house both grids
    var displayPanel = Ext.create('Ext.Panel', {
        width    : 820,
        height   : 300,
        layout   : 'border',
        renderTo : 'panel',
        bodyPadding: 5,
        items    : [
            grid,
            formPanel
        ],
        bbar    : [
            '->', // Fill
            {
                text    : 'Reset Example',
                handler : function() {
                    //refresh source grid
                    gridStore.loadData(myData);
                    formPanel.getForm().reset();
                }
            }
        ]
    });

    /****
    * Setup Drop Targets
    ***/

    // This will make sure we only drop to the view container
    var formPanelDropTargetEl =  formPanel.body.dom;

    var formPanelDropTarget = Ext.create('Ext.dd.DropTarget', formPanelDropTargetEl, {
        ddGroup: 'GridExample',
        notifyEnter: function(ddSource, e, data) {

            //Add some flare to invite drop.
            formPanel.body.stopAnimation();
            formPanel.body.highlight();
        },
        notifyDrop  : function(ddSource, e, data){

            // Reference the record (single selection) for readability
            var selectedRecord = ddSource.dragData.records[0];

            // Load the record into the form
            formPanel.getForm().loadRecord(selectedRecord);

            // Delete record from the source store.  not really required.
           // ddSource.view.store.remove(selectedRecord);

            return true;
        }
    });
});
