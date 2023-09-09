import * as THREE from 'three';

// 第一步，創建renderer,camera,scene
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement)

const camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,500)
camera.position.set(0,0,50)
camera.lookAt(0,0,0)

const scene = new THREE.Scene()

// 下一步，定義“材料”，對於線，我們使用 LineBasicMaterial 或是 LineDashedMaterial
const material = new THREE.LineBasicMaterial({color: 0x0000ff})

// 接著我們創建幾何連同頂點（verices）
const points = []
// points.push(new THREE.Vector3(-10,0,0))
// points.push(new THREE.Vector3(0,10,0))
// points.push(new THREE.Vector3(10,0,0))
points.push(new THREE.Vector3(10,0,0))
points.push(new THREE.Vector3(0,0,0))
// points.push(new THREE.Vector3(0,10,0))
// points.push(new THREE.Vector3(0,0,0))
// points.push(new THREE.Vector3(0,0,10))

const geometry = new THREE.BufferGeometry().setFromPoints(points)

// 現在我們有points，我們可以將它放在一起以形成一條線。
const line = new THREE.Line(geometry, material)

// 最後加入場景，並呼叫render方法
scene.add(line)
renderer.render(scene,camera)