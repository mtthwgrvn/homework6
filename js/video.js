var video;

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {

	console.log("Play Video");
	if (video.paused)
		video.play();
		changeVolume();
}

function pauseVid() {

	console.log("Pause Video");
	if (!video.paused)
		video.pause();
}

function decreaseSpeed() {
	video.playbackRate = video.playbackRate * .8;
	console.log("Speed is "+ video.playbackRate);

}

function increaseSpeed() {
	video.playbackRate = video.playbackRate * 1.25;
	console.log("Speed is "+ video.playbackRate);
}

function skipAhead() {
	video.currentTime = video.currentTime + 60;
	if (video.ended) {
		video.currentTime = 0;
		pauseVid();
		video.playbackRate = 1;
	}
	console.log("Current location is "+ video.currentTime);
}

function mute() {
  	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").textContent = "Mute";
		console.log("Unmuted");
	  }
	else {
		video.muted = true;
		document.querySelector("#mute").textContent = "Unmute";
		console.log("Muted");
	}
}

function changeVolume() {
	var volume = document.querySelector("#volumeSlider").value;
	video.volume = volume / 100;
	var volume_span = document.querySelector("#volume");
	volume_span.textContent = volume + "%";
	console.log("Volume is " + volume);
}


function gray() {
	video.classList.add("grayscale")
	console.log("In grayscale")
}

function color() {
	video.classList.remove("grayscale")
	console.log("In color")
}
