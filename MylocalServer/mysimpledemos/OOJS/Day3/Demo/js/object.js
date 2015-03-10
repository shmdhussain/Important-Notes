var myObj={}
myObj.name="hussain";
myObj.getName=function(){return this.name};


---------

var obj= new Object();
obj.fn="hussain";
obj.ln="hussain";
new creates new instance of the object, used in function constructor

----------

function name(){
	this.fn="hussain";
	this.gfn=function(){return this.name};
}

var obj= new name();
obj.fn;
obj.gfn();


--------------------------------
this is the constructor of type student
function student(){
	this.name="";
	this.getName=function(){return this.name;}
}

creating the object using constructor

var s1=new student();

s1..see the o/p;
s1.name="hussain"-----------------set the prop of s1's name

s1.__proto__   ------->this touches the student constructor
s1.__proto__   ------->this touches the student's parent's(that os Object) proto constructor

s1.__proto__.name="default name";-set it for deafult;






---------------------


function human(){
	this.man="yes";
}
function student(){
	this.study="yes";
}
function silentstudent(){
	this.talks="yes";
}

x= new student();
y= new silentstudent();
z= new human();

x.study;
y.talks;
z.man;


----------------------------
3 level inheritence
function human(){
	this.man="yes";
}
function student(){
	this.study="yes";
}
function silentstudent(){
	this.talks="yes";
}

x= new student();
y= new silentstudent();
z= new human();


student.prototype=z;
silentstudent.prototype=x;


x.study;
y.talks;
z.man;


Connection between and making the inheritence

makes  insatnce of parent to the protoype of the child



y.study;
y.talks;












