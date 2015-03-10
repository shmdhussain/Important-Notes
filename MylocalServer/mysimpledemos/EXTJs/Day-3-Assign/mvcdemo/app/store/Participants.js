/*
Though we cna have an inline store, if need to implement the edit functionality and
refer it elsewhere we need an external store.
*/
Ext.define('MVCD.store.Participants', {
    extend: 'Ext.data.Store',
	model: 'MVCD.model.Participant',
	//connecting to data store using ajax
	autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'data/participants.json',
        reader: {
            type: 'json',
            root: 'participants',
            successProperty: 'success'
        }
    }
   // fields: ['empID', 'name'],	//not required if a model is specified
   /* data  : [						//not required if connecting through ajax
		{empID: '160088', name: 'Sandeep Pande'},
		{empID: '118342', name: 'Rakesh Kumar'},
		{empID: '602512', name: 'Vishal Sawant'},
		{empID: '602736', name: 'Shilpa'},
		{empID: '602706', name: 'Aruna Narayanan'},
		{empID: '620081', name: 'Amit Dhiman'},
		{empID: '185375', name: 'Kavya Narayana'},
		{empID: '608588', name: 'Nayyar Armani'},
		{empID: '186289', name: 'Amit Chakraborty'},
		{empID: '609213', name: 'Ishani Ghosh'},
		{empID: '629743', name: 'Ajay Suresh'},
		{empID: '136633', name: 'Mahaveer'},
		{empID: '156833', name: 'Prasad Premkumar'}
    ]*/
});

/*
You can mention two urls for read and write in the following way. Automatically a POST request will be 
generated for you 
proxy: {
    type: 'ajax',
    api: {
        read: 'data/participants.json',
        update: 'data/updateParticipants.json'
    },
    reader: {
        type: 'json',
        root: 'participants',
        successProperty: 'success'
    }
}

Store needs to synchronize itself after editing has been completed. Add
 this.getUsersStore().sync();
 to the updateParticipant method as after win.close()
*/