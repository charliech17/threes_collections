import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

// set the scene,camera,renderer
const scene = new THREE.Scene();
// - THREE.PerspectiveCamera(）中，第一參數為FOV(filed of view)，單位為deg，延伸場景
// - 第二參數為aspect ratio(縱橫比)，最常用的值就是window.innerWidth 除上 window.innerHeight，用不正確值畫面會看起來被壓縮。
// - 第三 第四參數為"near "及 "far" 切面。 意思是物件遠離“far”的值或是近於“near” ，都不會顯示在畫面上。
// - 為了效能的關係，第三第四參數可能需要調整。
const camera = new THREE.PerspectiveCamera( 
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000 
);

// renderer，為了設定畫面大小。
// 為了畫面關係，可以使用 window.innerWidth/2 或是 window.innerHeight/2
// 若想要用低一點畫質，可以在第三參數傳入false:  renderer.setSize( window.innerWidth, window.innerHeight,false );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


// 要創建方塊，需使用BoxGeometry，此geometry包含所有方形需要的點。
// 除此之外，我們需要用到material來上色此方塊。（three.js 還有許多其他materail）
// 此material可傳入一系列參數，比如我們需要顏色，可以傳入{color: 0x00ff00}
// 再來我們需要一個Mesh => Mesh是一個物件，我們可以添加“幾何（geometry）”和“材料（material）” ，
// 接著，使用用scene.add()可以將這個Mesh渲染在畫面上。會渲染於(0,0,0)的位置
// 這個狀況會使cube與相機互相內在，為了避免此狀況，我們設定z-index，將相機往外拉一點。
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

// 寫完上述程式還不會有任何畫面，
// 需要加上renderer.render( scene, camera );
// 才會顯示出來，並且我們用requestAnimationFrame去更新畫面。
function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

if ( WebGL.isWebGLAvailable() ) {

	// Initiate function or other initializations here
	animate();

} else {

	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

}