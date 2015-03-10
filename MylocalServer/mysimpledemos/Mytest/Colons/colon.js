	var elem=[	{"name":"husain","url":"http://google.com","age":21},
				{"name":"ismail","url":"http://yahoo.com","age":22},
				{"name":"nambi","url":"http://msn.com","age":23}
			 ]

	jQuery(function($){
		var str="";
		for(i=0;i<elem.length;i++){
			str+="<a href='#' onclick='test(\""+elem[i].url+"\")'>dd</a><br><br>"
			console.log(str);
			
		}
		$('.mytest').html(str);
		
	});

	function test(url){
		console.log("url is "+url);
	}