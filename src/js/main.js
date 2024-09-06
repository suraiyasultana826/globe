
import * as THREE from 'three';
import texture from '../img/images.jpg';
import vertexShader from '../shaders/vertex.glsl';
import fragmentShader from '../shaders/fragment.glsl';

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
    // color: 0xff0000
    // map: new THREE.TextureLoader().load(texture)
}))

console.log(sphere);
scene.add(sphere);

camera.position.z = 10;

function animate() {

	requestAnimationFrame(animate)

	renderer.render( scene, camera );

}
animate()
