
import * as THREE from 'three';
import texture from '../img/images.jpg';
import vertexShader from '../shaders/vertex.glsl';
import fragmentShader from '../shaders/fragment.glsl';
import atmosphereVertexShader from '../shaders/atmosphereVertex.glsl';
import atmosphereFragmentShader from '../shaders/atmosphereFragment.glsl';

console.log(vertexShader);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50),
 new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms:{
        globeTexture:{
            value: new THREE.TextureLoader().load(texture)
        }
    }
   
}))

console.log(sphere);
scene.add(sphere);

//create atmosphere
const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50),
 new THREE.ShaderMaterial({
    vertexShader: atmosphereVertexShader,
    fragmentShader:atmosphereFragmentShader,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide
   
}))

atmosphere.scale.set(1.4, 1.4, 1.4);

scene.add(atmosphere);

camera.position.z = 10;

function animate() {

	requestAnimationFrame(animate)

	renderer.render( scene, camera );
    sphere.rotation.y += 0.0001;

}
animate()
const mouse = {
    x : undefined,
    y: undefined
}

addEventListener('mousemove', () => {
    mouse.x = (event.clientX / innerWidth) * 2 -1
    mouse.y = - (event.clientY / innerHeight) * 2 + 1
    console.log(mouse);

})
