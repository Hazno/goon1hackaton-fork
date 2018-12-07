AFRAME.registerComponent('markerhandler', {
	init: function () {
        var zoomInAnimation = document.querySelector('#zoomInAnimation');

        zoomInAnimation.addEventListener("animationend", (e)=>{

            phoneAnimationOn = false;
        });
		const familiebonusMarker = document.querySelector("#familiebonus-marker");

        familiebonusMarker.addEventListener('click', function(ev){
            if (familiebonusMarker.object3D.visible == true && ev.detail.cursorEl) {
                window.location.href = "https://telenor.no";
            }
        });
    }});

AFRAME.registerComponent('refmarker', {

    init: function () {
        console.log(this);
        const zoomInAnimation = document.querySelector("#zoomInAnimation");
        this.el.addEventListener("markerFound", (e)=>{
            console.log("MarkerFound");
            if (familiebonusMarker.object3D.visible) {
                zoomInAnimation.emit('start');
            }
        });

    }
});

AFRAME.registerComponent('product-picker', {
	init: function() {
		this.el.addEventListener('click', function(e) {
			console.log('CLICK', e);
		});
	}
});

var stopped = true;
var lastCheck = false;
var phoneAnimationOn = false;
var phoneAnimationIsPlayed = false;
setInterval(function() {
    if(!lastCheck) {
        var sceneEl = document.querySelector('a-scene');
        phoneAnimationIsPlayed = false;
        var video = sceneEl.querySelector('video');
        if(!video.paused) {
            video.pause();
            $("#alertmessage").css("display", "none");
        }
    }
    lastCheck = false;
}, 100);

window.markerBecameVisible = function(Object) {
    lastCheck = true;
    if(Object.parameters.patternUrl === "/markers/patt/fleksi.patt") {
        var sceneEl = document.querySelector('a-scene');
        var video = sceneEl.querySelector('video');
        if(video.paused) {
            video.play();
            if(video.muted) {
                $("#alertmessage").css("display", "block");
            }
        }
    }
    if(Object.parameters.patternUrl === "/markers/patt/phone.patt") {
        var sceneEl = document.querySelector('a-scene');
        var zoomInAnimation = sceneEl.querySelector('#zoomInAnimation');
        if(!phoneAnimationOn && !phoneAnimationIsPlayed) {
            phoneAnimationOn = true;
            phoneAnimationIsPlayed = true;
            zoomInAnimation.emit('zoomIn');
        }
    }
};


document.addEventListener('click', function() {
    var sceneEl = document.querySelector('a-scene');
    var video = sceneEl.querySelector('video');
    if(video.muted) {
        video.muted = false;
    }
});