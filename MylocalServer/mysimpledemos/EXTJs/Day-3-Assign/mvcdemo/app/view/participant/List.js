Ext.define('MVCD.view.participant.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.participantlist',  //alias name specified so that we can use it for xtype
    title : 'All Participants',
	store: 'Participants',			//store referred by the view
    initComponent: function() {
        /*this.store = {
            fields: ['empID','name'],
            data  : [
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
            ]
        };*/
 
        this.columns = [
            {header: 'EmpID',  dataIndex: 'empID',  flex: 1},
            {header: 'Name', dataIndex: 'name', flex: 1}
        ];
        this.callParent(arguments);
	}
});