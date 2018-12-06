AFRAME.registerComponent('markerhandler', {
	init: function () {
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

AFRAME.registerComponent('artoolkit', {
    init: function () {
        var sceneEl = document.querySelector('a-scene');
        console.log("this", this, sceneEl);
        var video = sceneEl.querySelector('video');
        var Avideo = sceneEl.querySelector('a-video');
        console.log("video", video);
        var canvas = document.getElementsByClassName('a-canvas');
        //Avideo.removeEventListener('click', clickFunction);
        Avideo.addEventListener('click', clickFunction);

        function clickFunction() {
            console.log("video CLICK", video, video.paused);
            if (video.paused == true) {
                video.play();
            }
            //} else {
            //    video.pause();
            //}
        }
    }
});