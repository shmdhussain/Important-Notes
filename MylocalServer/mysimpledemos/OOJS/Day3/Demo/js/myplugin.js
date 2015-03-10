var $$$=(function(){
		//creating a private object all the methods and properties will be added to this object.
		var _obj={}
		
		//Finding the type of the obj
		_obj.getType=function(passedobj){
			//calling toString of the Object and changing the context
			var type=Object.prototype.toString.call(passedobj);
			return type;
		}
		
		//Checking whether the passed one is array or not
		_obj.isArray=function(passedobj){
			//calling toString of the Object and changing the context
			if(_obj.getType(passedobj)=="[object Array]"){
				console.log(_obj.getType(passedobj));
				return true;
			}
			else{
				console.log(_obj.getType(passedobj));
				return false;
			}
		}
		fruits.indexOf("Apple");
		_obj.isArray=function(passedobj){
			//calling toString of the Object and changing the context
			if(_obj.getType(passedobj)=="[object Array]"){
				console.log(_obj.getType(passedobj));
				return true;
			}
			else{
				console.log(_obj.getType(passedobj));
				return false;
			}
		}
		
		return _obj;
		})();