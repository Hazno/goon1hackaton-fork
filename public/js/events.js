
AFRAME.registerComponent('telenor-redirect', {

	init: function () {
		const familiebonusMarker = document.querySelector("#familiebonus-marker");

		familiebonusMarker.addEventListener('click', function(e) {
            if (familiebonusMarker.object3D.visible == true) {
                window.location.href = "https://telenor.no";
            }
        });
    }
});

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

window.markerBecameVisible = function(Object) {
    if(Object.parameters.patternUrl === "/markers/patt/test.patt") {
        var sceneEl = document.querySelector('a-scene');
        var video = sceneEl.querySelector('video');
        if(video.paused)
            video.play();
    }
};


/*
AFRAME.registerComponent('artoolkit', { // Play video on click
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
*/