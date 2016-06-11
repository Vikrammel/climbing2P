var Engine = (function(global){
	var doc = global.document,
    win = global.window,
    canvas = doc.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    lastTime;

	function resizeGame() {
	    var gameArea = document.getElementById('gameArea');
	    var widthToHeight = 4 / 3;
	    var newWidth = window.innerWidth;
	    var newHeight = window.innerHeight;
	    var newWidthToHeight = newWidth / newHeight;
	    
	    if (newWidthToHeight > widthToHeight) {
	        newWidth = newHeight * widthToHeight;
	        gameArea.style.height = newHeight + 'px';
	        gameArea.style.width = newWidth + 'px';
	    } else {
	        newHeight = newWidth / widthToHeight;
	        gameArea.style.width = newWidth + 'px';
	        gameArea.style.height = newHeight + 'px';
	    }
	    
	    gameArea.style.marginTop = (-newHeight / 2) + 'px';
	    gameArea.style.marginLeft = (-newWidth / 2) + 'px';
	    
	    canvas.width = newWidth;
	    canvas.height = newHeight;
	}
	resizeGame();
	window.addEventListener('resize', resizeGame, false);
	gameArea.appendChild(canvas);
	global.ctx = ctx;
})(this);
