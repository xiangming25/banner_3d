window.onload = function(){
	banner();
}

var timer = 0;
function banner(){
	var bg = $('.bg'),
		banner = $('.banner'),
		img = $('.img'),
		imgLeft = img.offset().left,
		imgTop = img.offset().top,
		imgWidth = img.width(),
		imgHeight = img.height(),
		oldPageX = banner.width()/2 + imgLeft,
		oldPageY = banner.height()/2+imgTop,
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
			var _eventMove = window.event || e,
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
