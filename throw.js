AFRAME.registerComponent("bowling-balls", {
  init: function () {
    this.throwBall();
  },
  throwBall: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "z") {
        var  ball = document.createElement("a-entity");

        ball.setAttribute("gltf-model", "./models/bowling_ball/scene.gltf");

        ball.setAttribute("scale", { x: 3, y: 3,  z: 3});

        var cam = document.querySelector("#camera");

        pos = cam.getAttribute("position");

        ball.setAttribute("position", {
          x: pos.x,
          y: pos.y-1.2,
          z: pos.z,
        });

        var camera = document.querySelector("#camera").object3D;

        // Obtener la dirección de la cámara como un vector de Three.js
        var direction = new THREE.Vector3();
        camera.getWorldDirection(direction);

        // Establecer la velocidad y su dirección
        ball.setAttribute("velocity", direction.multiplyScalar(-10));

        var scene = document.querySelector("#scene");

        // Establecer la bola como una entidad dinámica
        ball.setAttribute("dynamic-body", {
          shape: "sphere",
          mass: "10",
        });

        // Agregar el escucha de eventos de colisión a la bola
        

        scene.appendChild(ball);
      }
    });
  },
  removeBall: function (e) {
    
    // Elemento de la bola
   

    // Elemento que es golpeado
   

    if (elementHit.id.includes("pin")) {
      
      // Impulso y vector punto
      var impulse = new CANNON.Vec3(0,1,-15);
      var worldPoint = new CANNON.Vec3().copy(
        elementHit.getAttribute("position")
      );

      elementHit.body.applyForce(impulse, worldPoint);

      // Eliminar al escucha del evento


      // Eliminar la bola de la escena
    
      scene.removeChild(element);
    }
  },
});


