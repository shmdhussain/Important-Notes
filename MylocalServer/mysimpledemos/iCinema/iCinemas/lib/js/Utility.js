$(window).load(function(){ //$(window).load() must be used instead of $(document).ready() because of Webkit compatibility				
				// Slideshow > Carousel
				$(".slideshow-carousel").sliderkit({
					shownavitems:4,
					autospeed:3000,
					mousewheel:true,
					circular:true
				});
});
function fnGetDay(){
	var d = new Date();
	var x=fnGetDayAbs(d);
	return x;
}
function fnGetDayAbs(d){
	var weekday=new Array(7);
	weekday[0]="Sunday";
	weekday[1]="Monday";
	weekday[2]="Tuesday";
	weekday[3]="Wednesday";
	weekday[4]="Thursday";
	weekday[5]="Friday";
	weekday[6]="Saturday";
	var x =weekday[d.getDay()];
	return x;
}

function fnShowCal(){
	$("#date").trigger('focus');
}

function fnLoginChange(uid){
	var htmlTemp='<div class="float-right signinbox"><p class="right cb float-left strong cursive  weltext">Hi '+uid+'! <a href="#" class="PadLeft7 signout cb">sign out</a></p><div class="PadLeft20 float-left"><input id="viewhisbtn" type="button" class="viewhisbt" value="View Previous Bookings" /> </div><div class="clear"></div></div><div class="clear"></div>';
	console.log(htmlTemp);
	$('#login')[0].reset();
	$guest=$('.myloginbox').detach();
	$('#login').html(htmlTemp);
}

function fnCheckAlreadyUid(uid){
	for(i=0;i<users.length;i++){
		if(uid==users[i].userID ){
			sessionuser=users[i];
			return false;
		}
	}
	return true;
}

function fnCheckValidUid(uid,pwd){
	for(i=0;i<users.length;i++){
		if(uid==users[i].userID && pwd==users[i].password){
			sessionuser=users[i];
			return true;
			
		}
		console.log(users[i].userID+"==="+uid);
		console.log(users[i].password+"==="+pwd);
	}
	return false;
}

function fnCodeForDate(){
	var day=fnGetDay();
	//console.log(day);
	var code=fnCodeForDateAbs(day);
	return code;
}

function fnCodeForDateAbs(day){
	switch(day){
		case "Sunday":  return 0;
						break;
		case "Monday":  return 1;
						break;
		case "Tuesday":  return 2;
						break;
		case "Wednesday":  return 3;
						break;
		case "Thursday":  return 4;
						break;
		case "Friday":  return 5;
						break;
		case "Saturday":  return 6;
						break;					
	}
}
function fnCodeForScreen(timings){
	switch(timings){
		case "10:30":  return 0;
						break;
		case "13:30":  return 1;
						break;
		case "16:30":  return 2;
						break;
		case "19:30":  return 3;
						break;
		case "22:30":  return 4;
						break;
					
	}
}