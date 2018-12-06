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