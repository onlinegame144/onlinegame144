window.onload = function() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	requestAnimationFrame(draw);

var previousFrameTime = 0;

function draw(time) {
	
	var fps = Math.floor(1000 / (time - previousFrameTime));
	previousFrameTime = time;
	
	ctx.fillStyle = "#fff";
	ctx.font = "normal 10pt sans-serif";
	ctx.fillText("FPS: " + fps, 1080, 20);
	//ctx.fillText("X: " + px, 1080, 40);
	//ctx.fillText("Y: " + py, 1080, 60);
	//ctx.fillText("X: " + px + " Y: " + py, 10, 40);
	//var uname=localStorage.getItem("uname");
	//var name = uname;
	//var xLoc=localStorage.getItem("xLoc");
	//var yLoc=localStorage.getItem("yLoc");
	//ctx.fillText(name, xLoc, yLoc);
	//ctx.fillText(client.socket.id, 255, 255);
		
	requestAnimationFrame(draw);
	}
};