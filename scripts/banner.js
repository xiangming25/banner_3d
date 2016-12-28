window.onload = function(){
	banner();
}

var timer = 0;
function banner(){
	var bg = $('.bg'),
		banner = $('.banner'),
		img = $('.img').eq(0),
		imgLeft = img.offset().left,
		imgTop = img.offset().top,
		imgWidth = img.width(),
		imgHeight = img.height(),
		oldPageX = imgLeft/2 + imgLeft,
		oldPageY = imgTop/2+imgTop,
		flag = false,
	    	_e = '';
	bg.on('mousemove',function(e){
		flag = true;
		_e = e;
	});
	
	clearInterval(timer);
	timer = setInterval(move,150);
	
	function move(){
		if(flag){
			var _eventMove = window.event || _e,
			    newPageX = _eventMove.pageX,
			    newPageY = _eventMove.pageY,
			    reduceX = (oldPageX - newPageX),
			    reduceY = (oldPageY - newPageY),
			    rotateX = reduceX > 0 ? Math.log(reduceX-1)*2 : -Math.log(-reduceX-1)*2,
			    rotateY = reduceY > 0 ? Math.log(reduceY-1)*0.8 : -Math.log(-reduceY-1)*0.8;
			banner.css('transform','rotateX('+(-rotateY)+'deg) rotateY('+(rotateX)+'deg)');
			flag = false;
		}
	}
}
