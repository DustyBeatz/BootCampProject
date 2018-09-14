(function() {
	"use strict";

//video controls

//variables
	var playSwitch = document.querySelector("#playPause");
	var video = document.querySelector("#trailer");



//functions
function playVideo() {
	console.log("from playVideo");
	if (video.paused){
		video.play();
		playSwitch.innerHTML = "PAUSE";
	}else{
		video.pause();
		playSwitch.innerHTML = "PLAY";
	}
}


//listeners
playSwitch.addEventListener("click", playVideo, false);


})();


//Volume controls
