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


  var vid = document.getElementById("trailer");
  function setPlaySpeed("fastForward") {
      vid.playbackRate = 2;
  }
