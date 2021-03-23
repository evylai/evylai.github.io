var video;
var mutebol=false

window.addEventListener("load", function() {
	video = document.querySelector("#player1")
	console.log("Good job opening the window")
	console.log(video.volume)
});


document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector('#volume').innerHTML = video.volume*100 + '%';
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
	console.log("Pause Video")
});

document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate *= 0.95
	console.log("New speed is " + video.playbackRate)
})

document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate *= 1.05
	console.log("New speed is " + video.playbackRate)
})

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Original location " + video.currentTime)
	video.currentTime += 15
	video.play
	console.log("New location " + video.currentTime)
})

document.querySelector('#player1').addEventListener('ended', function () {
  console.count('Go back to beginning');
  this.play();
})

document.querySelector("#mute").addEventListener("click", function(){
	if (mutebol == false){
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
		mutebol = true
	}
	else{
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
		mutebol = false
	}
})

document.querySelector("#slider").addEventListener("click", function(){
	video.volume = this.value/100
	document.querySelector("#volume").innerHTML = this.value + "%"
	console.log(video.volume)
})

document.querySelector("#vintage").addEventListener("click", function(){
	video.className = "oldSchool"
})

document.querySelector("#orig").addEventListener("click", function(){
	video.className = ""
})