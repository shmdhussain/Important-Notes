function cat(){
	this.name="cat"
	this.getName=function(){
		console.log(this.name);
	}
}
function dog(){
	this.name="dog"
	this.getName=function(){
		console.log(this.name);
	}
}

dogObj= new dog();
catObj= new cat();

catObj.getName();


dogObj.getName();

dogObj.getName.call(catObj);

catObj.getName.call(dogObj);


call and apply is similar

-------------------------------------
function cat(){
	this.name="cat"
	this.getName=function(greet){
		console.log(greet+" "+this.name);
	}
}
function dog(){
	this.name="dog"
	this.getName=function(greet){
		console.log(greet+" "+this.name);
	}
}

catObj= new cat();
dogObj= new dog();



catObj.getName("catooo");
dogObj.getName("dogooo");





catObj.getName.call(dogObj,"catooo");
dogObj.getName.call(catObj,"dogooo");

catObj.getName.apply(dogObj,["catooo","hi"]);
dogObj.getName.apply(catObj,["dogooo"]);

--------------------
function cat(){
	this.name="cat"
	this.getName=function(){
		console.log(arguments[0]+" "+this.name);
		return "hu"
	}
	
}
function dog(){
	this.name="dog"
	this.getName=function(){
		console.log(arguments[0]+" "+this.name);
		return "hu"
	}
}

catObj= new cat();
dogObj= new dog();



catObj.getName("catooo");
dogObj.getName("dogooo");





catObj.getName.call(dogObj,"catooo");
dogObj.getName.call(catObj,"dogooo");

catObj.getName.apply(dogObj,["catooo","hi"]);
dogObj.getName.apply(catObj,["dogooo"]);

-------------------------------------------------------------
