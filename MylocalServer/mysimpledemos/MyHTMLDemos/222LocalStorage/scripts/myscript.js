$(fnDomReady);

function fnDomReady(){
	if(typeof(Storage)!=="undefined")
	  {
	  // Yes! localStorage and sessionStorage support!
	  // Some code.....
		console.log("supported");
		//fnAutoIndex();
	  }
	else
	  {
		alert("storage not supported")
		
	  }
}

function fnAutoIndex(){
	if(typeof(localStorage.index4)!='undefined'){
		//console.log("local  set");
		//localStorage.index3=eval(localStorage.index3)+1;
	}
	else{
		localStorage.index4=1;
	}
	$("#key").val(localStorage.index4);
}