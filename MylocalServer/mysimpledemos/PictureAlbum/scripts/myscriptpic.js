$(fnDomReady);


function fnDomReady(){
	fnFillAudio();
	$("#selectaudio").change(fnAudio);
	var imgs = document.querySelectorAll('.imgpreviewcont img');
	for(i=0;i<imgs.length;i++){
		imgs[i].addEventListener('dragstart',handleDragStart);
		imgs[i].addEventListener('dragenter', handleDragEnter)
		imgs[i].addEventListener('dragleave', handleDragLeave);
		imgs[i].addEventListener('dragend', handleDragEnd);
	}
	document.querySelector('.imgshower').addEventListener('drop', handleDrop);
	document.querySelector('.imgshower').addEventListener('dragover', handleDragOver);
	
	$('.slidenext').on('click','.snext.disabled',fnDisabled);
	$('.slidenext').on('click','.snext.active',fnSlideNextClick);
	$('.slideprev').on('click','.sprev.disabled',fnDisabled);
	$('.slideprev').on('click','.sprev.active',fnSlidePrevClick);
	$('.slidermoveImgCont').on('mouseenter','.slidermoveImgCont img',fnSliderMouseEnter);
	$('.slidermoveImgCont').on('mouseleave','.slidermoveImgCont img',fnSliderMouseLeave);
	fnInitialSliderImage();
	//var timerid=setTimeout(fnSliderAutoMoveCont,2000);
	fnSliderAutoMoveCont();
	
	
}
var timer="";
var timerprev;
var slideDir="next";
function fnSliderAutoMoveCont(){
	 timer = new RecurringTimer(fnSlideNext, 2000);
	 
	 //timerprev.pause();
	 //timer.resume();
}
function fnSliderAutoMove(){
	
}
function fnInitialSliderImage(){
	var $first=$('.first');
	var path=$first.attr('src');
	//console.log(path);
	var str='<img id="" class="" src="'+path+'" />';
	fnshowImageinMainpanel(str);
}
function fnSliderMouseEnter(e){
	if(slideDir=="next"){
		timer.pause();
		console.log(slideDir);
	}
	else if(slideDir=="prev" && typeof(timerprev)!="undefined"){
		timerprev.pause();
		console.log(slideDir);
	}
	var path=$(this).attr('src');
	//console.log(path);
	var str='<img id="" class="" src="'+path+'" />';
	fnshowImageinMainpanel(str);
}
function fnSliderMouseLeave(e){
	//console.log("mouse leave the element with id: "+e.target.id);
	//timerid=setInterval(fnSliderAutoMoveCont,2000);
	if(slideDir=="next"){
		timer.resume();
		console.log(slideDir);
	}
	else if(slideDir=="prev" && typeof(timerprev)!="undefined"){
		timerprev.resume();
		console.log(slideDir);
	}
	fnhideImageinMainpanel();
}




function fnshowImageinMainpanel(elem){
	//console.log("showimage");
	//console.log("mouse enter the element with id: "+elem.id);
	//var str=fnDomToString(elem);
	$('.imagemain').html(elem);
	var title=$('.imagemain img').attr("src");
	title="The displayed image is in the folder \""+title+"\""
	//console.log(title);
	$('.titleSlider p').html(title);
	$('.imagemain').fadeIn("slow");
	
}

function fnDomToString(elem){
	var tmp = document.createElement("div");
	tmp.appendChild(elem);
	//console.log(tmp.innerHTML);
	return tmp.innerHTML; 
}


function fnhideImageinMainpanel(elem){
	//console.log("showimage");
	//console.log("mouse leave the element with id: "+elem.id);
	$('.imagemain img').fadeOut("slow");
	$('.imagemain').html();
	
	var $first=$('.first');
	var path=$first.attr('src');
	//console.log(path);
	var str='<img id="" class="" src="'+path+'" />';
	fnshowImageinMainpanel(str);
}


function fnDisabled(){
	console.log("disabled");
}


function fnSlideNextClick(){
	if(slideDir=="next"){
		timer.pause();
	}
	else if(slideDir=="prev" && typeof(timerprev)!="undefined"){
		timerprev.pause();
	}
	
	fnSlideNext();
	if(slideDir=="next"){
		setTimeout(function(){timer.resume()},2000);
	}
	else if(slideDir=="prev" && typeof(timerprev)!="undefined"){
		setTimeout(function(){timerprev.resume()},2000);
	}
	
}
function fnSlidePrevClick(){
	if(slideDir=="next"){
		timer.pause();
	}
	else if(slideDir=="prev" && typeof(timerprev)!="undefined"){
		timerprev.pause();
	}
	fnSlidePrev();
	if(slideDir=="next"){
		setTimeout(function(){timer.resume()},2000);
	}
	else if(slideDir=="prev" && typeof(timerprev)!="undefined"){
		setTimeout(function(){timerprev.resume()},2000);
	}
}
function fnSlideNext(){
	
	
	//console.log($(event.target).attr("id"))
	//console.log(event.target==$(this));
	var $alwaysLast=$('.alwayslost');
	var $alwaysfirst=$('.alwaysfirst');
	var $first=$('.first');
	var $firstNext=$('.first').next();
	var $last=$('.last');
	var $next=$('.last').next();
	var $animatediv=$('.animatediv');
	
	

	console.log($('.last ~ img').length);
	if($('.last ~ img').length==1 || $('.last ~ img').length==0){
		$('.snext').addClass('disabled').removeClass('active');
		$('.sprev').addClass('active').removeClass('disabled');
		timer.pause();
		if(typeof(timerprev)=="undefined"){
			console.log("undefined");
			timerprev = new RecurringTimer1(fnSlidePrev, 2000);
		}
		else{
			console.log("defined");
			timerprev.resume();
		}
		slideDir="prev";
	}
	
	var path=$firstNext.attr('src');
	//console.log(path);
	var str='<img id="" class="" src="'+path+'" />';
	fnshowImageinMainpanel(str);
	
	
	 $animatediv.animate({left: '-=160'},{duration: 1000});
	$first.removeClass('first');
	$firstNext.addClass('first');
	$last.removeClass('last');
	$next.addClass('last');
	$first=$('.first');
	if($first.prevAll().length==1 || $first.prevAll().length==0){
		$('.sprev').addClass('active').removeClass('disabled');
	}
	
	
}


function fnSlidePrev(){
	//console.log($(event.target).attr("id"))
	//console.log(event.target==$(this));
	var $alwaysLast=$('.alwayslost');
	var $alwaysfirst=$('.alwaysfirst');
	var $first=$('.first');
	var $last=$('.last');
	var $last=$('.last');
	var $firstPrev=$('.first').prev();
	var $lastPrev=$('.last').prev();
	var $animatediv=$('.animatediv');
	if($first.prevAll().length==1 || $first.prevAll().length==0){
		$('.sprev').addClass('disabled').removeClass('active');
		$('.snext').addClass('active').removeClass('disabled');
		timerprev.pause();
		timer.resume();
		slideDir="next";
	}
	
	var path=$firstPrev.attr('src');
	//console.log(path);
	var str='<img id="" class="" src="'+path+'" />';
	fnshowImageinMainpanel(str);
	
	
	
	
	 $animatediv.animate({left: '+=160'},{ duration: 1000});
	  
	  
	  
	  
	$first.removeClass('first');
	$last.removeClass('last');
	$firstPrev.addClass('first');
	$lastPrev.addClass('last');
	if($('.last ~ img').length==1 || $('.last ~ img').length==0){
		$('.sprev').addClass('active').removeClass('disabled');
	}
}


function fnAudio(){
	//console.log($(this).val());
	fnFillAudio();
}
function fnFillAudio(){
	console.log($('#selectaudio option:selected').text());
	$('.AudioSection .cursong').html($('#selectaudio option:selected').text());
	var audiovalue="audio/"+$('#selectaudio option:selected').text()+".mp3";
	$('.audioplayer source').attr('src',audiovalue);
	$('.audioplayer audio').remove();
	//var newaudio= new Audio();
	var newaudio= '<audio loop="true" controls="controls"><source src="'+audiovalue+'" type="audio/mpeg" />Your browser does not support the audio element.</audio>'
	$('.audioplayer').html(newaudio);
	$('.audioplayer audio')[0].play();
}



function handleDragStart(e) {
  // Target (this) element is the source node.
  this.style.opacity = '0.4';
  dragSrcEl = this;
  var str = $(this).clone().wrap('<div/>').parent().html();
  console.log(str);
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', str);
}

function handleDrop(e) {
  // this/e.target is current target element.
	if (e.preventDefault){ e.preventDefault(); } 
	console.log("dropped the data: "+e.dataTransfer.getData('text/html'));
	this.innerHTML = e.dataTransfer.getData('text/html');
	return false;
}

function handleDragEnter(e) {
  // this / e.target is the current hover target.
  console.log("enter drag");
  this.classList.add('over');
}

function handleDragLeave(e) {
  console.log("enter leave");
  this.classList.remove('over');  // this / e.target is previous target element.
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }

  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

  return false;
}

function handleDragEnd(e) {
  // this/e.target is the source node.
  this.style.opacity = '1';
}

