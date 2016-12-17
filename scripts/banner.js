window.onload = function(){
	banner();
}


function banner(){
	var bg = $('.bg'),
		banner = $('.banner'),
		img = $('.img'),
		imgLeft = img.offset().left,
		imgTop = img.offset().top,
		imgWidth = img.width(),
		imgHeight = img.height(),
		/*oldPageX = imgLeft + imgWidth/2,
		oldPageY = imgTop + imgHeight/2,*/
		oldPageX = banner.width()/2,
		oldPageY = banner.height()/2,
		bathRandom = Math.random()*10;
	bg.on('mousemove',function(e){
		var _eventMove = window.event || e,
			newPageX = _eventMove.pageX,
			newPageY = _eventMove.pageY,
			reduceX = -bathRandom+(newPageX - oldPageX)/50,
			reduceY = -10+(newPageY - oldPageY)/50;
		console.log(reduceX+"    "+reduceY);
		banner.css('transform','rotateX('+reduceX+'deg) rotateY('+reduceY+'deg)');
	});
}