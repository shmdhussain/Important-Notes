			function getName(){
				console.log(this.somevar);
			}
			
			var x={}
			x.somevar="hello";
			
			boundx=getName.bind(x);
			
			
			boundx();
			
			----------------------
			function getName(){
				console.log(this.somevar);
			}
			
			var x={}
			x.somevar="hi";
			
			boundx=getName.bind(x);
			
			x.somevar="hello";
			
			boundx();
			
			
			---------------------------
			
			
			