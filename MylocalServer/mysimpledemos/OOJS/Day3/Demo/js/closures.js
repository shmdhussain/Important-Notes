function fnClosure(){
	var out="i am outer var";
	var innerFn=function(){
		console.log(out);
	}
	return innerFn;
}

closure=fnClosure();

closure();

----
closure looping pbm

var funcs=[];
function closureLoop(){
	for(i=0;i<3;i++){
		funcs[i]=function(){return i}
	}
}
closureLoop();
for(j=0;j<3;j++){
	console.log(funcs[j]());
}

--------------------------------
var funcs=[];
function closureLoop(){
	for(i=0;i<3;i++){
		
		funcs[i]=function(r){return i}(i);
	}
}
closureLoop();
for(j=0;j<3;j++){
	console.log(funcs[j]());
}











