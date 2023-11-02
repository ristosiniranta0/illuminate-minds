/*
Filename: MeshAnimation.js

This code represents a 3D mesh animation using JavaScript Three.js library.

The animation consists of a 3D model of a car driving on a terrain. The car moves forward and backward, while the terrain scrolls underneath it. Additionally, the car's wheels rotate, and the camera follows the car's movements.

Disclaimer: This code is purely for demonstration purposes and might require additional dependencies and setup to run properly.

*/

// Import necessary libraries
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Set up the scene
const scene = new THREE.Scene();

// Set up camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10);
camera.lookAt(scene.position);

// Set up renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load 3D model
const loader = new GLTFLoader();
loader.load('car_model.glb', (gltf) => {
  const car = gltf.scene;
  scene.add(car);

  // Set up car animations
  animateCar();
});

// Set up terrain
const terrainTexture = new THREE.TextureLoader().load('terrain_texture.jpg');
terrainTexture.wrapS = THREE.RepeatWrapping;
terrainTexture.wrapT = THREE.RepeatWrapping;
terrainTexture.repeat.set(40, 40);
const terrainMaterial = new THREE.MeshBasicMaterial({ map: terrainTexture });
const terrainGeometry = new THREE.PlaneGeometry(200, 200, 100, 100);
const terrain = new THREE.Mesh(terrainGeometry, terrainMaterial);
terrain.rotation.x = -Math.PI / 2;
scene.add(terrain);

// Set up car movement
let carSpeed = 0;
function animateCar() {
  car.position.z -= carSpeed;

  if (carSpeed > 0) {
    car.rotation.y += 0.02;
  } else if (carSpeed < 0) {
    car.rotation.y -= 0.02;
  }

  // Animate car wheels
  const wheels = car.getObjectByName('Wheels');
  if (wheels) {
    wheels.rotation.x += carSpeed;
  }

  requestAnimationFrame(animateCar);
}

// Set up car controls
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    carSpeed = 0.1;
  } else if (event.key === 'ArrowDown') {
    carSpeed = -0.1;
  }
});

// Set up camera following car
function animateCamera() {
  camera.position.x = car.position.x + 5;
  camera.position.y = car.position.y + 5;
  camera.position.z = car.position.z + 10;
  camera.lookAt(car.position);

  requestAnimationFrame(animateCamera);
}

// Render the scene
function render() {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

// Start animations and rendering
animateCamera();
render();