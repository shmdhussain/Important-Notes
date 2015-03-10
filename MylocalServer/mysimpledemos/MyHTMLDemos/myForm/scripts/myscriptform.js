$(fnDomReady);

function user(){
	this.fn;
	this.ln;
	this.mn;
	this.dob;
	this.gender;
	this.addr;
	this.occu;
	this.accttype;
	this.amount;
	this.email;
	this.phone;
	this.url;
}

var userObj;
function fnDomReady(){
	if(typeof(Storage)!=="undefined"){
		console.log("supported");
		$('.save').click(fnSave);
		$('.load').click(fnLoad);
		$('.clearmem').click(fnClearMem);
		$('.clearform').click(fnClearForm);
		$('.submit').click(fnSubmit);
		
	 }
	else{
		alert("storage not supported")
	}
	fnDisplayValues();
}
function fnDisplayValues(){
	if(localStorage.user1){
		console.log("load button is clicked");
		var retrievedJsonObjFromStorage=JSON.parse(localStorage.user1);
		fnDisplayInDivValues(retrievedJsonObjFromStorage);
	}
	else{
		console.log("no stored value so unable to load");
	}
}
function fnClearMem(){
		localStorage.clear();
}
function fnClearForm(){
	$('#myform')[0].reset();
}
function fnSave(){
	if(userObj){
		fnSetValues(userObj);
	}
	else{
		console.log("save button is clicked");
		userObj=new user();
		fnSetValues(userObj);
	}
}
function fnLoad(){
	if(localStorage.user1){
		console.log("load button is clicked");
		var retrievedJsonObjFromStorage=JSON.parse(localStorage.user1);
		fnGetValues(retrievedJsonObjFromStorage);
	}
	else{
		console.log("no stored value so unable to load");
	}
}
function fnSubmit(){
	fnSave();
	window.open("http://localhost:88/myform/success.html",'_self',true)
}
function fnSetValues(userObj){
		userObj.fn=$('#fn').val();
		userObj.mn=$('#mn').val();
		userObj.ln=$('#ln').val();
		userObj.dob=$('#dob').val();
		userObj.gender=$('input[name="gend"]').val();
		userObj.addr=$('#addr').val();
		userObj.occu=$('#occu').val();
		userObj.accttype=$('#accttype').val();
		userObj.amount=$('#amount').val();
		userObj.email=$('#email').val();
		userObj.phone=$('#phone').val();
		userObj.url=$('#url').val();
		console.log("saved obj is"+userObj);
		var jsonUserObjString=JSON.stringify(userObj);
		localStorage.user1=jsonUserObjString;
		console.log("OBJECT IS :"+ jsonUserObjString);
}


function fnGetValues(userObj){
		
		$('#fn').val(userObj.fn);
		$('#mn').val(userObj.mn);
		$('#ln').val(userObj.ln);
		$('#dob').val(userObj.dob);
		$('input[name="gend"]').val(userObj.gender);
		$('#addr').val(userObj.addr);
		$('#occu').val(userObj.occu);
		$('#accttype').val(userObj.accttype);
		$('#amount').val(userObj.amount);
		$('#email').val(userObj.email);
		$('#phone').val(userObj.phone);
		$('#url').val(userObj.url);
		//console.log("get obj is"+userObj);
		//var jsonUserObjString=JSON.stringify(userObj);
		//localStorage.user1=jsonUserObjString;
		//console.log("OBJECT IS :"+ jsonUserObjString);
}

function fnGetList(){
	if(typeof(localStorage.myarr)!='undefined'){
		console.log("local  set");
		var GetListarray=[];
		var listForm="";
		GetListarray=localStorage.myarr.split(',');
		for(i=0;i<GetListarray.length;i++){
			listForm+="<li>"+GetListarray[i]+"</li>";
		}
		$('.myEditList').html(listForm);
	}
	else{
		console.log("local not set");
	}
}

function fnDisplayInDivValues(userObj){
		$('#fn').html(userObj.fn);
		$('#mn').html(userObj.mn);
		$('#ln').html(userObj.ln);
		$('#dob').html(userObj.dob);
		$('#gend').html(userObj.gender);
		$('#addr').html(userObj.addr);
		$('#occu').html(userObj.occu);
		$('#accttype').html(userObj.accttype);
		$('#amount').html(userObj.amount);
		$('#email').html(userObj.email);
		$('#phone').html(userObj.phone);
		$('#url').html(userObj.url);
}
