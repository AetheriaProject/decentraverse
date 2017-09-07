function setup_engine()
{
	 scene = document.getElementsByTagName("a-scene")[0];
	 land = document.createElement("a-land");
	 avatar = document.getElementsByTagName("a-avatar")[0];
}
function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}
//players
AFRAME.registerComponent('avatar', {
    init: function(){
        const element   = this.el;
        const cursor    = createCursor();
        const camera    = createCamera();
        camera.appendChild(cursor);
        element.appendChild(camera);
        element.setAttribute("aframe-injected", "true");
        element.setAttribute("data-aframe-inspector", "default-camera");
        function createCursor(){
            const cursorEl = document.createElement("a-cursor");
            cursorEl.setAttribute("color", "#4CC3D9");
            cursorEl.setAttribute("fuse", "true");
            cursorEl.setAttribute("timeout", "10");
            return cursorEl;
        }//createCursor
        function createCamera(){
            const cameraEl = document.createElement("a-camera");
            cameraEl.setAttribute("userHeight", "1.6");
            cameraEl.setAttribute("active", "true");
            return cameraEl;
        }//createCursor
    }
});
AFRAME.registerPrimitive('a-avatar', {
    defaultComponents: {
        avatar: {}
    }
});
//portals
AFRAME.registerComponent('portal', {
  schema: {
  	location: {type: 'string', default: 'QmR1mibFvryQMAiS7PRt2tZJt4wNCSXuCfeZSCi42Eyrpt'}
  },
  init: function () {
  	data = this.data;
    this.el.addEventListener('click', function (evt) {
    	window.location = "./index.html?scenename=" + data.location;
    });
  },
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {}
});
AFRAME.registerPrimitive('flat-plane', {
    defaultComponents: {
        geometry: {
            primitive: "plane"
        },
        rotation: {
            x: -90,
            y: 0,
            z: 0
        }
    }
});