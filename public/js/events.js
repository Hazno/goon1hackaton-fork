AFRAME.registerComponent('markerhandler', {

    init: function() {
        const familiebonusMarker = document.querySelector("#familiebonus-marker");

        familiebonusMarker.addEventListener('click', function(ev){
            if (familiebonusMarker.object3D.visible == true && ev.detail.cursorEl) {
                const entity = document.querySelector('#box-model');
                const scale = entity.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 0.5);

                entity.setAttribute('scale', scale);
            }
        });
    }});