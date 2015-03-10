var myid;
Detail = function() {
	var id;
	var firstName;
	var lastName;
	var emailId;
	var dateOfBirth;
	var gender;
	var homePage;
};

checkLocalStorage = function(){
	return (window.openDatabase)?true:false;
};

printStorageDetails = function() {
	if(checkLocalStorage){
		$('#status').html('Local storage facility availabile');
		$('#submitForm').attr('disabled', false);
		$('#clearDatabase').attr('disabled', false);
		$('#status').removeClass('invalid');
		$('#status').addClass('valid');
	}
	else{
		$('#status').html('Your browser does not support local storage');
		$('#submitForm').attr('disabled', true);
		$('#clearDatabase').attr('disabled', true);
		$('#status').removeClass('valid');
		$('#status').addClass('invalid');
	}
};

createTableRow = function(detail){
	var row = '<tr>';
	row += ('<td><a class="reclink" id="link' + detail.id +'">' + detail.id + '</a></td>');
	console.log(detail.id);
	row += ('<td>' + detail.firstName + '</td>');				
	row += ('<td>' + detail.lastName + '</td>');
	row += ('<td>' + detail.emailId + '</td>');				
	row += ('<td>' + detail.dateOfBirth + '</td>');
	row += ('<td>' + detail.gender + '</td>');								
	row += ('<td>' + detail.homePage + '</td>');								
	row += '</tr>';
	var table = $('#personal');
	table.html(table.html() + row);
}
handleSuccess = function(txn, result){
	console.log('DB Operation Succeded...' + result);
	if(myid=='0'){
		console.log('addition and myid is zero' + myid);
		$("#key").val(1);
	}
	else{
		//console.log("AFTER :"+(eval(myid))+1);
		var id=(eval(myid));
		//localStorage.index4=id;
		//console.log("length "+ result.rows.length);
		//$("#personalDetails")[0].reset();
		console.log("after: "+id);
		myid=id+1;
		$("#key").val(myid);
	}
	
	
};

handleFailure = function(txn, result){
	console.log('DB Operation Failed...' + result);
};

addDetails = function() {
	var detail = new Detail();
	detail.id = $('#key').val();
	detail.firstName = $('#firstName').val();
	detail.lastName = $('#lastName').val();
	detail.emailId = $('#emailId').val();
	detail.dateOfBirth = $('#dateOfBirth').val();
	detail.gender = $('#gender').val();
	detail.homePage = $('#homePage').val();
	createTableRow(detail);
	
	db8.transaction(function(txn){
		var sql = 'INSERT INTO details(id, firstName, lastName, emailId, dateOfBirth, gender, homePage) values(?,?,?,?,?,?,?)';
		var params = [detail.id, detail.firstName, detail.lastName, detail.emailId, detail.dateOfBirth, detail.gender, detail.homePage];
		txn.executeSql(sql, params, handleSuccess, handleFailure);
	});
}

clearDetails = function() {
	localStorage.clear();
	$('#personal').html('');
}

addLinkListener = function() {
	$('a.reclink').each(function(){
		console.log('adding listener')
		$(this).attr('onclick', 'showRecord('+$(this).text()+')');
	});
}

storageEvent = function(key, oldValue, newValue, url){
	console.log('Value Stored ' + key + ' ' + oldValue + ' ' + newValue + ' ' + url);
	addLinkListener();
}

showRecord = function(val) {
	console.log(val);
	var id = val;
	db8.transaction(function(tx){
		var sql = 'SELECT * FROM details WHERE id=?';
		var params = [id];
		tx.executeSql(sql, params, handleSuccess, handleFailure);
	});
	//var rec = JSON.parse(localStorage.getItem(id));
	/*$('#firstName').val(rec.firstName);
	$('#lastName').val(rec.lastName);
	$('#emailId').val(rec.emailId);
	$('#dateOfBirth').val(rec.dateOfBirth);
	$('#gender').val(rec.gender);
	$('#homePage').val(rec.homePage)*/
}

handlePopulateData = function(txn, result){
	console.log('DB Operation Succeded...' + result);
	myid='0';
	if(result.rows.length > 0) {
		for(var idx=0;idx<result.rows.length;idx++) {
			createTableRow(result.rows.item(idx));
			myid=result.rows.length;
			
		}
	}
	
	if(myid=='0'){
		console.log("handle populate data myid value is zero");
		$("#key").val(1);
		myid=1;
	}
	else{
		console.log("handle populate data "+myid);
		myid+=1;
		$("#key").val(myid);
		//myid=1;
	}
};
populateExistingData = function(){
	console.log('hi');
	db8.transaction(function(tx){
		var sql = 'SELECT * FROM details';
		var params = [];
		tx.executeSql(sql, params, handlePopulateData, handleFailure);
	});
}

