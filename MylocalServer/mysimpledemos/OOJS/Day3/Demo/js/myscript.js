    
	document.addEventListener('DOMContentLoaded',fnDocReady);
	function fnDocReady(){
		console.log("doc ready");
		/*START: comment Section JS*/
			// document.querySelector('.AddCommentCont').addEventListener('click',fnAddComment);
			// document.getElementById('subcomment').addEventListener('click',fnAddNewComment);
			// document.getElementById('cancelcomment').addEventListener('click',fnCancelComment);
			 
			 document.getElementById('playImg').addEventListener('click', fnPlayImgSliders);
		/*END: comment Section JS*/
	}
	

	 function fnPlayImgSliders() {
		 console.log("in img sliders");
		 var dropdownObj=document.getElementById('imgspeed');
		 var speed= dropdownObj.options[dropdownObj.selectedIndex].value;
		 
		 var sl,med,spd;
		 switch(speed){
			case 'slow':
				console.log("switch slow");
				fnShowSlow();
				break;
			case 'med':
				console.log("medium");
				fnShowMed();
				break;
			case 'fast':
				console.log("speed");
				fnShowSpeed();
				break;
			default:
				console.log("default");
				//fnErrorImg();
				break;
		 }
		
	 }
	 function fnShowSlow() {
		 var allslides=document.querySelectorAll('.imgSlide');
		 fnRunSlides(allslides,3000);
	 }
	  function fnShowMed() {
		 var allslides=document.querySelectorAll('.imgSlide');
		 fnRunSlides(allslides,1500);
	 }
	  function fnShowSpeed() {
		 var allslides=document.querySelectorAll('.imgSlide');
		 fnRunSlides(allslides,750);
	 }
	 function fnRunSlides(allslides,delay) {
		var delayMain=delay;
		 console.log("running");
		 for (i=0;i<=allslides.length-1;i++){
			doTimer(allslides[i], delay);
			delay+=delayMain;
		 }
	 }
	function doTimer(itemObj, delay) {
		  setTimeout(function() {
			itemObj.nextElementSibling.style.display="block";
			itemObj.style.display="none";
		  }, delay);
		  
	}
	
	
	 
	 function fnAddComment() {
		 console.log("in add comment");
		 document.querySelector('.newCommentCont').style.display = "block";
	 }
	 function fnCancelComment() {
		 //console.log("in add comment");
		 newCommentCont.reset();
		 document.querySelector('.newCommentCont').style.display = "none";
	 }
	 function fnAddNewComment() {
		 var name = newCommentCont.elements[0].value;
		 var email = newCommentCont.elements[1].value;
		 var comment = newCommentCont.elements[2].value;
		 var newCommentElement = document.createElement("div");
		 newCommentElement.setAttribute("class", "comment");
		 var newCommetContent = '   	   <div class="float-left ls w15"> 			<div class="userProfile PadAll10"> 				<p class="">' + name + '</p> 				<p class="PadTop10">' + email + '</p> 				<div class="userimg PadTop10 center"> 					<div class="makecenterHor"> 						<img src="img/user.jpg" height="75px" width="75px" class="" />   					</div> 											 				</div> 			</div> 	   </div> 	   <div class="float-left w85 content"> 		   <div class="commentP PadAll10"> 				<p> ' + comment + '</p> 			</div> 	   </div> 	   <div class="clear"></div>                 ';
		 newCommentElement.innerHTML = newCommetContent;
		 var commentArray = document.querySelector('.CommentSec');
		 commentArray.appendChild(newCommentElement);
	 }
    
	
	function fnValidEmail() {
         
        var valEmail = document.getElementById('email').value;
        valEmail = valEmail.replace(/\s{2,}/g, ' ');
        if (valEmail == null || valEmail == " ") {
            console.log("empty email");
            document.getElementById('errorEmail').style.display = 'block';
        }
        else {
            console.log(valEmail);
            document.getElementById('errorEmail').style.display = 'none';
        }
        console.log(valEmail);
    }
    function fnValidName() {
        var valName = document.getElementById('name').value;
        valName = valName.replace(/\s{2,}/g, ' ');
        if (valName == null || valName == " ") {
             console.log("empty Name");
            document.getElementById('errorName').style.display='block';
        }
        else {
            console.log(valName);
            document.getElementById('errorName').style.display = 'none';
        }
        console.log(valName);

    }
    function fnValidRadio() {
        var valRadioArray = document.getElementsByName('gend');
        var flag;
        for (var i = 0; i < valRadioArray.length; i++) {
            if (valRadioArray[i].checked) {
                flag = true;
                break;
            }
        }
        if (flag == true) {
            console.log("radio is not selected");
            document.getElementById('errorGend').style.display = 'none';
        }
        else {
            document.getElementById('errorGend').style.display = 'block';
        }
    }
    function fnValidSubmit(){
        fnValidEmail();
        fnValidName();
        fnValidRadio();
        return false;
    }
	