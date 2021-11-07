var scrolled, scroll, height;
var cam = {posX: -100,posY: 0,posZ: 300};
var mouse_tracking = false;

function progressBar() {
  console.log('progressBar');
  scroll = document.body.scrollTop || document.documentElement.scrollTop;
  height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  scrolled = scroll / height * 100;
 //document.querySelector('#progressBar').style.width = scrolled + '%';

}

window.addEventListener('scroll', progressBar);

if (!Detector.webgl) Detector.addGetWebGLMessage();

var container, stats;
var camera, scene, renderer, particles, geometry, materials = [],
  parameters, i, h, color, size, geometryTube;
var mouseX = 0,
  mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

function createCanvasMaterial(color, size) {
  var matCanvas = document.createElement('canvas');
  matCanvas.width = matCanvas.height = size;
  var matContext = matCanvas.getContext('2d');
  // create exture object from canvas.
  var texture = new THREE.Texture(matCanvas);
  // Draw a circle
  var center = size / 2;
  matContext.beginPath();
  matContext.arc(center, center, size/2, 0, 2 * Math.PI, false);
  matContext.closePath();
  matContext.fillStyle = color;
  matContext.fill();
  // need to set needsUpdate
  texture.needsUpdate = true;
  // return a texture made from the canvas
  return texture;
}

function init() {

  container = document.createElement('div');
  container.style.position = "fixed";
  container.style.zIndex = -1;
  //document.querySelector('#render').appendChild(container);

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
   camera.position.z = 100;


  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0xDDDDDD, 0.01);

  //geometry = new THREE.Geometry();
  
  geometry = new THREE.SphereGeometry(25, 25, 25);
  //geometry.position.x = 3;
  //geometry.position.y = 0;
  //geometry.position.z = 10;




  for (i = 0; i < 1000; i++) {

    var vertex = new THREE.Vector3();
    vertex.x = Math.random() * 200 - 100;
    vertex.y = Math.random() * 200 - 100;
    vertex.z = Math.random() * 200 - 100;
    

    
    geometry.vertices.push(vertex);

  }
 parameters = [
    [
      [136, 146, 241], 0.0001
    ],
    [
      [136, 146, 241], 0.0001
    ],
    [
      [136, 146, 241], 0.0001
    ],
    [
      [136, 146, 241], 0.0001
    ],
    [
      [136, 146, 241], 0.0001
    ]
  ];
  
 /*parameters = [
    [
      [1, 0.5, 0.9], 0.5
    ],
    [
      [0.95, 0.5, 0.9], 0.4
    ],
    [
      [0.90, 0.5, 0.9], 0.3
    ],
    [
      [0.85, 0.5, 0.9], 0.2
    ],
    [
      [0.80, 0.5, 0.9], 0.1
    ]
  ];*/
  
  //var pointMaterial =  new THREE.PointsMaterial({
    //size: 20,
    //map: createCanvasMaterial('#00ff00', 256)
  //});

  for (i = 0; i < parameters.length; i++) {

    color = parameters[i][0];
    size = parameters[i][1];
    
    var hexColor = new THREE.Color(color[0], color[1], color[2]).getHexString();
    
    materials[i] = new THREE.PointsMaterial({
      size: 2,
      map: createCanvasMaterial('#'+hexColor, 256),
      transparent: true,
      depthWrite: false
    });

    particles = new THREE.Points(geometry, materials[i]);

    particles.rotation.x = Math.random() * 2;
    particles.rotation.y = Math.random() * 2;
    particles.rotation.z = Math.random() * 2;

    scene.add(particles);

  }
  
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

//  stats = new Stats();
//  stats.domElement.style.position = 'absolute';
//  stats.domElement.style.top = '0px';
//  container.appendChild(stats.domElement);

  document.addEventListener('mousemove', onDocumentMouseMove, false);
  document.addEventListener('touchstart', onDocumentTouchStart, false);
  document.addEventListener('touchmove', onDocumentTouchMove, false);

  //

  window.addEventListener('resize', onWindowResize, false);

}

function onWindowResize() {

  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

}

function onDocumentMouseMove(event) {

  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
//console.log('MouseMove X, Y',mouseX, mouseY);
}

function onDocumentTouchStart(event) {

  if (event.touches.length === 1) {

    event.preventDefault();

    mouseX = event.touches[0].pageX - windowHalfX;
    mouseY = event.touches[0].pageY - windowHalfY;
    //console.log('TouchStart X, Y',mouseX, mouseY);
  }

}

function onDocumentTouchMove(event) {

  if (event.touches.length === 1) {

    event.preventDefault();

    mouseX = event.touches[0].pageX - windowHalfX;
    mouseY = event.touches[0].pageY - windowHalfY;
    //console.log('TouchMovec X, Y',mouseX, mouseY);

  }

}

//

function animate() {

  requestAnimationFrame(animate);

  render();
  //stats.update();

}
 
function render() {

/* camera.position.x = -80;
 camera.position.y = 0;
 camera.position.z = 200;*/
if (mouse_tracking == false) {

   if (scrolled <= 30){

    cam = {posX: -100,posY: 0,posZ: 300}

  } else if ((scrolled > 31) && (scrolled < 70)) {

    cam = {posX: -80,posY: 0,posZ: 80}

  } else if ((scrolled > 71) && (scrolled < 100))  {

    cam = {posX: -100,posY: 0,posZ: 300}
  }

    camera.position.x = cam.posX;
    camera.position.y = cam.posY;
    camera.position.z = cam.posZ;

}







  var time = Date.now() * 0.00005;

 //camera.position.x += (mouseX - camera.position.x) * 0.05;
 //camera.position.y += (-mouseY - camera.position.y) * 0.05;
if (mouse_tracking == true) {
   camera.lookAt(scene.position)
}
//console.log('scene.position: ', scene.position);
  for (i = 0; i < scene.children.length; i++) {

    var object = scene.children[i];

    if (object instanceof THREE.Points) {

      //object.rotation.z = time * (i < 4 ? i + 10 : (i + 12));
      object.rotation.y += 0.01;

    }

  }
// change colors
  /*for (i = 0; i < materials.length; i++) {

    color = parameters[i][0];

    h = (360 * (color[0] + time) % 360) / 360;
    materials[i].color.setHSL(h, color[1], color[2]);

  }*/

  renderer.render(scene, camera);

}
