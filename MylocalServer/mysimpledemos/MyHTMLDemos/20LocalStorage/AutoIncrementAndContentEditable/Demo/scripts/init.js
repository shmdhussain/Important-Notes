var db2;
$(this).ready(function(){
	printStorageDetails();
	$('#submitForm').click(addDetails);
	$('#clearDatabase').click(clearDetails);

	window.addEventListener("storage", storageEvent, true);
	addLinkListener();
	createDatabase();
	populateExistingData();
});

createDatabase = function() {
	db2 = openDatabase('detailsDb2', '0.0', 'Personal Details2', 2048);
	db2.transaction(function(tx){
		tx.executeSql("create table if not exists details(id integer primary key asc, firstName string, lastName string, emailId string, dateOfBirth string, gender string, homePage string)", [], function(){ console.log('Database Initialized Successfully...')}, function() { console.log('Database creation failed...')});
	});
/*	db2.transaction(function(tx){
		tx.executeSql("DELETE FROM details", [], function(){ console.log('Database Initialized Successfully...')}, function() { console.log('Database creation failed...')});
	});*/
};