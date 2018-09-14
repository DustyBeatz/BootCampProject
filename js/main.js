<<<<<<< HEAD
/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';


/*global $, jQuery, alert*/
  'use strict';

>>>>>>> allicamp


//Video
	var playButton = document.querySelector("#playPause");


	function togglePlay(evt) {
 		console.log("from togglePlay()");
		if(video.paused){
			video.play();
			evt.currentTarget.innerHTML = "Pause";
		}else{
			video.pause();
			evt.currentTarget.innerHTML = "Play";
		}
	}
  toggleButton.addEventListener("click", togglePlay, false);


  var vid = document.getElementById("video");
  function setPlaySpeed("fastForward") {
      vid.playbackRate = 2;
  }




/*Mobile toggle*/

var video1 = document.querySelector("#trailer");
var video2 = document.querySelector("#trailer_mobile");

video1.addEventListener("click", swapMov, false);
video2.addEventListener("click", swapMov, false);
}

  function swapMov(evt){
  			//console.log("From swapMov");
  			if(evt.currentTarget.id==="trailer_mobile"){
  				video.src="video/video_Mobile.mp4";
  			}else{
  				video.src="video/video_Desktop.mp4";
  			}
  			console.log(video.currentScr);
  		}
  	window.addEventListener("load", init, false);
