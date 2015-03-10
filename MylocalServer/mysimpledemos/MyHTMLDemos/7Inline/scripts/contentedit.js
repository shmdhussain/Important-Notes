$(fnDomReady);

function fnDomReady(){
	if(typeof(Storage)!=="undefined")
	  {
	  // Yes! localStorage and sessionStorage support!
	  // Some code.....
		console.log("supported");
		fnGetList();
		//$('.myEditList').focus(fnSaveList);
		$('#editable').live('blur',function(){
			//console.log('calling save');
			fnSaveList();
		});
	  }
	else
	  {
		alert("storage not supported")
		
	  }
}

function fnSaveList(){
	console.log("set");
	var Listarray=[];
	$('.myEditList li').each(function(i){
		 Listarray[i]= $(this).html();
	});
	var myvaluesinstring=Listarray.toString();
	localStorage.myarr=myvaluesinstring;
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