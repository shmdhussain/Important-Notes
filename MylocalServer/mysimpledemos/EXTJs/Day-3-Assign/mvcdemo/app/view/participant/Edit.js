/*
The second view to edit the record in grid. Will populate the record in a window
*/
Ext.define('MVCD.view.participant.Edit', {
    extend: 'Ext.window.Window',
    alias : 'widget.participantedit', 
    title : 'Edit Participant',
    layout: 'fit',
    autoShow: true, 
    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'empID',
                        fieldLabel: 'EmpID'
                    },
                    {
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: 'Name'
                    }
                ]
            }
        ];
 
        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];
        this.callParent(arguments);
    }
});