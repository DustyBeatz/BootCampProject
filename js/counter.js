(function() {
	"use strict";

//video controls

//variables
	var playSwitch = document.querySelector("#playPause");
	var trailers = document.querySelector("#trailer");



//functions
function playVideo() {
	console.log("from playVideo");
	if (trailers.paused){
		trailers.play();
		playSwitch.innerHTML = "PAUSE";
	}else{
		trailers.pause();
		playSwitch.innerHTML = "PLAY";
	}
}


//listeners
playSwitch.addEventListener("click", playVideo, false);


})();
