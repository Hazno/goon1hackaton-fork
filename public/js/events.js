AFRAME.registerComponent('markerhandler', {

    init: function() {
        const familiebonusMarker = document.querySelector("#familiebonus-marker");

        familiebonusMarker.addEventListener('click', function(ev){
            if (familiebonusMarker.object3D.visible == true && ev.detail.cursorEl) {
                window.location.href = "https://telenor.no";
            }
        });
    }});