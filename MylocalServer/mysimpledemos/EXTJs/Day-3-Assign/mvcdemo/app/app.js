/*
Every Ext JS 4 application starts with an instance of Application class. The Application 
contains global settings for your application (such as the app's name), as well as maintains
references to all of the models, views and controllers used by the app. An Application also 
contains a launch function, which is run automatically when everything is loaded
*/
Ext.application({
    name: 'MVCD',	//global namespace for the application. The namespace is registered to Ext.Loader, with the path of 'app'
    appFolder: 'app',
	controllers: [	//adding controllers to the application. The init() of the controller will be called
        'Participants'
    ],	
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'participantlist',
                    title: 'Participants',
                    html : 'List of participants will be loaded here'
                }
            ]
        });
    }	
});