function fnDocReady(){
		console.log("Doc Ready");
		var teamchart=[{fn:"rooney",role:'striker'},{fn:"vanpersie",role:'striker'},{fn:"vidic",role:'defender'},{fn:"giggs",role:'midfield'}]
		$('p.name').each(function(i){
			$(this).html(teamchart[i].fn);
		});
}
	
	
function fnDocReady(){
		console.log("Doc Ready");
		var teamchart=[name1:{fn:"rooney",role:'striker'},name2:{fn:"vanpersie",role:'striker'},name1:{fn:"vidic",role:'defender'},name1:{fn:"giggs",role:'midfield'}]
		$('p.name').each(function(i){
			$(this).html(teamchart[i].fn);
		});
}