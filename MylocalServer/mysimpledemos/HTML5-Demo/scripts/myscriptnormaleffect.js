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
	/*$( "p" ).animate({
	  height: 200, width: 400, opacity: 0.5
	}, 1000, "linear", function() {
	  alert("all done");
	});*/
	// var mytimeslider=setInterval(fnTimerforSlider,500);
	$('.slidenext').on('click','.snext.disabled',fnDisabled);
	//$('.slidenext').on('click','.snext.active',fnSlideNext);
	$('.slideprev').on('click','.sprev.disabled',fnDisabled);
	$('.slidermoveImgCont').on('mouseenter','.slidermoveImgCont img',fnSliderMouseEnter);
	$('.slidermoveImgCont').on('mouseleave','.slidermoveImgCont img',fnSliderMouseLeave);
	//$('.slideprev').on('click','.sprev.active',fnSlidePrev);
}

function fnSliderMouseEnter(e){
	var path=$(this).attr('src');
	//console.log(path);
	var str='<img id="" class="" src="'+path+'" />';
	fnshowImageinMainpanel(str);
}
function fnSliderMouseLeave(e){
	//console.log("mouse leave the element with id: "+e.target.id);
	fnhideImageinMainpanel();
}




function fnshowImageinMainpanel(elem){
	
	$('.imagemain').html(elem);
	var title=$('.imagemain img').attr("src");
	title="The displayed image is in the folder \""+title+"\""
	console.log(title);
	$('.titleSlider p').html(title);
	$('.imagemain').fadeIn("slow");
	
}

function fnDomToString(elem){
	var tmp = document.createElement("div");
	tmp.appendChild(elem);
	console.log(tmp.innerHTML);
	return tmp.innerHTML; 
}


function fnhideImageinMainpanel(elem){
	//console.log("showimage");
	//console.log("mouse leave the element with id: "+elem.id);
	$('.imagemain img').fadeOut("slow");
	$('.imagemain').html();
}


function fnDisabled(){
	console.log("hi");
}
var gofwd=1;
var goback=1;
function fnTimerforSlider(){
	setTimeout(fnSliderTimer,100);
}
function fnSliderTimer(){
	if($('.snext').hasClass('active')){
		fnSlideNext();
	}
	else if($('.sprev').hasClass('active')){
		fnSlidePrev();
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
	console.log($('.last ~ img').length);
	if($('.last ~ img').length==1 || $('.last ~ img').length==0){
		$(this).addClass('disabled').removeClass('active');
	}
	
	/*
	$first.removeClass('first').addClass('dns');
	$firstNext.addClass('first');
	$last.removeClass('last');
	$next.addClass('last').removeClass('dns');
	
	 $($first).animate({
		opacity: 0,
		left:-15,
	  }, { duration: 1000,
		step: function( now, fx ){
		  $( ".simg" ).not('.dns').css( "left", now );
		}
	  });*/
	$first.removeClass('first').hide();
	$firstNext.addClass('first');
	$last.removeClass('last');
	$next.addClass('last').show();
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
	if($first.prevAll().length==1 || $first.prevAll().length==0){
		$(this).addClass('disabled').removeClass('active');
	}
	/*
	$first.removeClass('first').addClass('dns');
	$firstNext.addClass('first');
	$last.removeClass('last');
	$next.addClass('last').removeClass('dns');
	
	 $($first).animate({
		opacity: 0,
		left:-15,
	  }, { duration: 1000,
		step: function( now, fx ){
		  $( ".simg" ).not('.dns').css( "left", now );
		}
	  });*/
	$first.removeClass('first');
	$last.removeClass('last').hide();
	$firstPrev.addClass('first').show();
	$lastPrev.addClass('last');
	if($('.last ~ img').length==1 || $('.last ~ img').length==0){
		$('.snext').addClass('active').removeClass('disabled');
	}
}


function fnAudio(){
	console.log($(this).val());
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

