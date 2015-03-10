json is mainlly for stroing and exchanging text information

var myjson={name:"hussain",age:"24"};

always json should be key value pair, value can be anything like array and array of objects or object, but key always should be variable syntax

JSON.parse(str);
JSON.stringify(jsonobject);


var myjson=[{name:"hussain",age:"24"},{name:"ismail",age:"23"}];


var myjson={id1:{name:"hussain",age:"24"},id2:{name:"ismail",age:"23"}};


myjson.id1.name