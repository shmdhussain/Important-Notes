$(fnDomReady);


function fnDomReady(){
	console.log("Doc Ready");
	fnShowDate();	
	$('.dobImg').click(fnShowCal);
	$('form#login').on('click','.loginbt',fnLoginSubmit);
	$('form#login').on('click','.signout',fnSignout);
	$('form#login').on('click','.signup',fnSignUp);
	$('form#login').on('click','.mysignup',fnStopPropagation);
	$('form#login').on('click','.signupclose',fnSignUpout);
	$('form#login').on('click','.signupbt',fnSignUpRegister);
	
	
	$('.booktktcont').on('click','.resetbookform',fnResetBookForm);
	$('.booktktcont').on('click','.booktktbt',fnGoForSeatAvailability);
	
	//$('body').on('click','body',fnSignUpout);
	
	
	$('.bookdate').on('change','#date',fnGetDateAndpopDD);
	$('.bookmovie').on('change','.movieDD',fnGetScreensDD);
	
	$('.rhs').on('click','.seats.avail',fnClickAvailSeat);
	$('.rhs').on('click','.seats.sel',fnUnClickAvailSeat);
	$('.rhs').on('click','.confbt',fnPayConfirm);
	
	//$("#selectaudio").change(fnAudio);
	//$('form#login').on('blur','.mysignup',fnSignUpout);
	//$('form#login').on('focusout','.mysignup',fnSignUpout);
	//$('form#login').on('focusout','.mysignup',fnSignUpout);
		
}

/*START:Object Creation*/
//if(typeof(localstorage.users)){
function fnPayConfirm(){
	//console.log("ff");
	var myBookingOriObj=new myBookingOri();
	myBookingOriObj.userID=myBookingObj.uid;
	myBookingOriObj.screen=myBookingObj.screen;
	myBookingOriObj.movieName=movies[myBookingObj.movie].name;
	myBookingOriObj.date=myBookingObj.date;
	myBookingOriObj.time=timings[myBookingObj.timings];
	myBookingOriObj.seatsBooked=myBookingObj.myselseatarray;
	var amount=movies[myBookingObj.movie].price;
	amount=amount*myBookingObj.noOfTkts;
	myBookingOriObj.amount=amount;
	//console.log(myBookingOriObj);
	booking.push(myBookingOriObj);
	//console.log(booking);
	console.log("last "+myBookingOriObj);
	fnPutInConfirmPage(myBookingOriObj);
	/*START:Update the Screen Obj*/
	var codeForScreen=myBookingObj.timings;
	
	var screenbookedseatArr=screens[myBookingOriObj.screen].seatsBooked[myBookingObj.bookdateCode][codeForScreen];
	screenbookedseatArr=screenbookedseatArr.concat(myBookingObj.myselseatarray);
	screens[myBookingOriObj.screen].seatsBooked[myBookingObj.bookdateCode][codeForScreen]=screenbookedseatArr;
	console.log(screenbookedseatArr);
	/*END:Update the Screen Obj*/
	
}
function fnPutInConfirmPage(myBookingOriObj){
	console.log("ff ");
	console.log(myBookingOriObj.date);
	console.log(myBookingOriObj.movieName);
	console.log(myBookingOriObj.screen);
	console.log(myBookingOriObj.seatsBooked);
	console.log(myBookingOriObj.time);
	console.log(myBookingOriObj.amount);
	try{
		$('.cdate').html(myBookingOriObj.date);
		$('.cmovie').html(myBookingOriObj.movieName);
		$('.cscreenname').html(myBookingOriObj.screen);
		$('.cseatnos').html(myBookingOriObj.seatsBooked.toString());
		$('.ctime').html(myBookingOriObj.time);
		$('.camt').html(myBookingOriObj.amount);
	}
	catch(e){
		
	}
	
	$('.seatSelectorCont').slideUp();
	$('.TicketDetCont').slideDown();
	
}

function fnClickAvailSeat(){
	
	var seatselnow=$(this).html();
	if(!(myBookingObj.currentselseat==myBookingObj.noOfTkts)){
		console.log("clicked the selected seats");
		$(this).removeClass('avail').addClass('sel');
		myBookingObj.currentselseat+=1;
		if(myBookingObj.currentselseat==myBookingObj.noOfTkts){
			var htmlTemp='U have selected '+myBookingObj.currentselseat+' seats out of '+myBookingObj.noOfTkts+' seats as u planned clk';
			htmlTemp+='<input type="button" value="Pay &amp; Confirm" id="confbtn" class="MarLeft5 confbt"/>';
			myBookingObj.myselseatarray.push(eval(seatselnow));
		}
		else{
			var htmlTemp='You have selected '+myBookingObj.currentselseat+' seats out of '+myBookingObj.noOfTkts+' seats u planned';
			myBookingObj.myselseatarray.push(eval(seatselnow));
		}
		$('.infoseatbooked p').html(htmlTemp);
	}
	else{
		var htmlTemp='You have already selected '+myBookingObj.currentselseat+' seats as you plan ';
		htmlTemp+='<input type="button" value="Pay &amp; Confirm" id="confbtn" class="MarLeft5 confbt"/>';
		$('.infoseatbooked p').html(htmlTemp);
	}
}
function fnUnClickAvailSeat(){
	var seatselnow=$(this).html();
	myBookingObj.myselseatarray.pop(seatselnow);
	console.log("un clicked the selected seats");
	$(this).removeClass('sel').addClass('avail');
	myBookingObj.currentselseat-=1;
	var htmlTemp='You have selected '+myBookingObj.currentselseat+' seats out of '+myBookingObj.noOfTkts+' seats u planned';
	$('.infoseatbooked p').html(htmlTemp);
}

function fnResetBookForm(){
	$("#bookform")[0].reset();
}


function fnShowRightSeatSelection(){
	myBookingObj.myselseatarray=[];
	//for(i=1;i<myBookingObj.totalSeats;i++){
		var htmlTemp='';
		var k=0;
		var seatsbookedarray=screens[myBookingObj.screen].seatsBooked[myBookingObj.bookdateCode][myBookingObj.timings];
		//console.log(seatsbookedarray);
		var noOfRound=Math.ceil((myBookingObj.totalSeats/10));
		for(i=1;i<=noOfRound;i++){
			var htmlTempInside='<div class="seatrow">';
			for(j=1;j<=10;j++){
				var t=0+j;
				k++;
				var blockedseat=seatsbookedarray.indexOf(k);
				
				if(k>myBookingObj.totalSeats){
					
					htmlTempInside+='</div>';
					htmlTemp+=htmlTempInside;
					$('.myseatSelector').html(htmlTemp);
					return;
				}
				if(blockedseat==-1){
					//console.log("blocked seats is "+k);
					htmlTempInside+='<span id="s'+k+'" class="seats avail  center">'+k+'</span>';
				}
				else{
					console.log("blocked seats is "+k);
					htmlTempInside+='<span id="s'+k+'" class="seats booked center">'+k+'</span>';
				}
			}
			htmlTempInside+='</div>';
			htmlTemp+=htmlTempInside;
		}
			
			$('.myseatSelector').html(htmlTemp);
			var htmlForScreen="";
			htmlForScreen+='';
		
}
function fnGoForSeatAvailability(){
	if(myBookingObj.bookingasaguest){
		myBookingObj.bookingasaguestinPart=true;
		console.log("i am logging as a guest take me to the sign up");
		fnSignUp();
	}
	else{
		myBookingObj.noOfTkts=$("#no1").val();
		myBookingObj.currentselseat=0;
		var bookdate=new Date(myBookingObj.date);
		bookdate=fnGetDayAbs(bookdate);
		bookdate=fnCodeForDateAbs(bookdate);
		myBookingObj.bookdateCode=bookdate;
		var seatsbooked=fnFindseatsbooked(myBookingObj.screen,bookdate,myBookingObj.timings);
		myBookingObj.totalSeats=screens[myBookingObj.screen].availableForBooking[bookdate];
		var seatsavail=screens[myBookingObj.screen].availableForBooking[bookdate]-seatsbooked;
		//console.log("booked seats "+seatsbooked);
		//console.log("total seats "+screens[myBookingObj.screen].availableForBooking[bookdate]);
		//console.log("avail seats "+seatsavail);
		if(seatsavail<myBookingObj.noOfTkts){
			var htmltemp='There are only'+ seatsavail +'seats are available for the show on selected date,please select diff date/time'
			$('.err-seatsav p').html(htmltemp);
			
		}
		else{
			fnShowRightSeatSelection(myBookingObj.noOfTkts);
			
			var htmlTemp='You have planned for '+myBookingObj.noOfTkts+' seats , so please select those seats below';
			$('.infoseatbooked p').html(htmlTemp);
			$('.infoseatbooked p').show();
			$('.TicketDetCont').slideUp('slow');
			$('.sliderCont').slideUp('slow');
			$('.seatSelectorCont').slideDown('slow');
		}
	}
	console.log(myBookingObj);
}

function fnFindseatsbooked(scrid,day,show){
	var seatsbooked=screens[scrid].seatsBooked[day][show].length;
	//screens["1"].seatsBooked["3"][0].length;
	return seatsbooked;
}
//}
//else{
	var users=new users();
	var movies=movies();
	var screens=screens();
	var booking=booking();
	var sessionuser;
	var timings={"0":"10:30",
				 "1":"13:30",
				 "2":"16:30",
				 "3":"19:30",
				 "4":"22:30"
				};
//}
	var sessionuser;

/**/
/*END:Object Creation*/

/*START:Booking Object*/

function myBooking(){
	this.date;
	this.movie;
	this.screen;
	this.timings;
	this.noOfTkts;
	this.totalSeats;
	this.amount;
	this.eachseatamount;
	this.seatsbooked;
	this.uid;
	this.bookdateCode;
	this.currentselseat;
	this.bookingasaguest=true;
	this.bookingasaguestinPart=false;
	this.myselseatarray=[];
}
function myBookingOri(){

	this.userID;
	this.screen;
	this.movieName;
	this.date;
	this.time;
	this.seatsBooked;
	this.amount;
	
}
var myBookingObj=new myBooking();
/*END:Booking Object*/
/*START:SignUp User Obj */
function myuser(){

	this.userID;
	this.name;
	this.phone;
	this.password;

}
/*END:SignUp User Obj */

var $guest;

function fnSignUpRegister(e){
	var uid=$("#uid1").val();
	var pwd=$("#pwd1").val();
	var name=$("#name1").val();
	var ph=$("#ph1").val();
	if(fnCheckAlreadyUid(uid)){
		var userobj=new myuser();
		userobj.userID=uid;
		userobj.name=name;
		userobj.phone=ph;
		userobj.password=pwd;
		console.log(userobj.userID+"::"+userobj.name+"::"+userobj.phone+"::"+userobj.password);
		//var userobjstr=JSON.strinfify(userobj);
		users.push(userobj);
		$('#login')[0].reset();
		fnSignUpout();
		fnLoginChange(userobj.userID);
		myBookingObj.uid=userobj.userID;
		//myBookingObj.guest=false;
		/*START:Booking as a guest , take user to the seat selection*/
		if(myBookingObj.bookingasaguest && myBookingObj.bookingasaguestinPart){
			myBookingObj.bookingasaguestinPart=false;
			myBookingObj.bookingasaguest=false;
			fnGoForSeatAvailability();
		}
		myBookingObj.bookingasaguest=false;
		/*START:Booking as a guest , take user to the seat selection*/
	}
	else{
		
	}
}

/*START:ShowDate Function*/
	function fnShowDate(){
		var day=fnGetDay();
		if(day=="friday"){
			return;
			alert("this is friday so no booking can be made now");
		}
		else if(day=="Thursday"){
			$( "#date" ).datepicker({ minDate: 0, maxDate: 0 });
		}
		else{
			console.log(day);
			$( "#date" ).datepicker({ minDate: 0, maxDate: 1 });
		}
	}

/*END:ShowDate Functions*/

/*START:Login and Logout Functions*/
	function fnLoginSubmit(){
		//if ($myForm[0].checkValidity()) {
			var uid=$("#uid").val();
			var pwd=$("#pwd").val();
			var uidfound=fnCheckValidUid(uid,pwd);
			console.log(uidfound);
			if(uidfound){
				fnLoginChange(uid);
				myBookingObj.uid=uid;
				myBookingObj.bookingasaguest=false;
			}
		
		return false;
	}
	/*START:Sign Out*/
	function fnSignout(){
			console.log("s out");
			sessionuser=null;
			$('.signinbox').remove();
			$guest.appendTo("#login");
			myBookingObj.bookingasaguest=true;
			//fnSignupEvent();
			$('.seatSelectorCont').slideUp('slow');
			$('.TicketDetCont').slideUp('slow');
			$('.sliderCont').slideDown('slow');
	}
	/*END:Sign Out*/
/*START:Login and Logout Functions*/




/*START:Sign Up functions*/
function fnSignUp(){
	$('.mysignup').show();
}


function fnSignUpout(){
	$('.mysignup').hide();
}

function fnStopPropagation(e){
	e.stopPropagation();
}
/*END:Sign Up functions*/




/*START:Take the date and fill movie DD functions*/
function fnGetDateAndpopDD(e){
	console.log(typeof(this.value));
	myBookingObj.date=this.value;
	fnfillMoviesDD();
	
}
function fnfillMoviesDD(){
	var movielist;
	var htmltemp="";
	
	for(var value in movies){
		//console.log(value + ': ' + movies[value].name);
		htmltemp+='<option class="" value="'+value+'">'+movies[value].name+'</option>'	
	}
	$('.movieDD').html(htmltemp);
	myBookingObj.movie=$('.movieDD option:first-child').val();
	console.log("current movie selected: "+myBookingObj.movie);
	fnfillScreensDD(myBookingObj.movie);
}
/*END:Take the date and fill movie DD functions*/


/*START:Take the movie and fill timings DD and screens functions*/

function fnGetScreensDD(e){
	fnfillScreensDD(this.value);
}

function fnfillScreensDD(moviekey){
	var movielist;
	var htmltemp="";
	var htmltempscreen="";
	var j=0;
	for(var value in screens){
		//console.log(screens[value].movieKey);
		if(screens[value].movieKey==moviekey){
			htmltemp+='<option class="" value="'+value+'">Screen '+value+'</option>'
			var codefordate=fnCodeForDate();
			
			var noofshow=screens[value].seatsBooked[codefordate].length;
			for(var showtimings in timings ){
				if(j==noofshow){
					break;
				}
				else{
					screentime=timings[showtimings];
					htmltempscreen+='<option class="" value="'+showtimings+'"> '+timings[showtimings]+'</option>';
				}
				j++;
			}
			$('.timingsDD').html(htmltempscreen);
			myBookingObj.timings=$('.timingsDD option:first-child').val();
			console.log("current time selected: "+myBookingObj.timings);
		}
		
	}
	$('.screensDD').html(htmltemp);
	myBookingObj.screen=$('.screensDD option:first-child').val();
	console.log("current time selected: "+myBookingObj.screen);
}

function fnFillTimings(){
	

}
/*END:Take the movie and fill timings DD and screens functions*/

/*START:Book the ticket button is clicked and screen timings no of tickets is taken and validate if no of ticket is there
	then take user to the seat selection page and if no ticket is there tell him to select different date and time
*/


/*END:Book the ticket button is clicked and screen timings no of tickets is taken and validate if no of ticket is there
	then take user to the seat selection page and if no ticket is there tell him to select different date and time
*/
