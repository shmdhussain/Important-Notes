/*
Controllers are the glue that binds an application together. They listen for events (usually from views) 
and take some actions.
*/
Ext.define('MVCD.controller.Participants', {
    extend: 'Ext.app.Controller',
    
	//The data store referred by the view
	stores: ['Participants'],
	
	models:['Participant'],
	
	//Views bound to controller
	views: [
        'participant.List',
		'participant.Edit'
    ],
	
	init: function() {
        this.control({
			//control function is used to listen to events on view classes and take  
			//action with a handler function
            'viewport > panel': {
                render: this.onPanelRendered
            },
			'participantlist': {
                itemdblclick: this.editParticipant
            },
			'participantedit button[action=save]': {
                click: this.updateParticipant
            }
        });
    },
 
	//Panel event handlers
    onPanelRendered: function() {
        console.log('The panel was rendered');
	},
	editParticipant: function(grid, record) {
        console.log('Double clicked on ' + record.get('name'));
		//accessing the edit  participant view
		var view = Ext.widget('participantedit');
		//rendering and passing the record to the editparticipant view
		//down() is used to quickly serach the DOM of the selected component
        view.down('form').loadRecord(record);
    },
	updateParticipant: function(button) {
        console.log('clicked the Save');
		//accessing the window
		var win    = button.up('window'),
        //accessing the form in the window
		form   = win.down('form'),
        //accessing the records in the form
		record = form.getRecord(),
        //accessing the values in form
		values = form.getValues();
		
		//updating values in record
		record.set(values);
		//closing the window
		win.close();
    }
});