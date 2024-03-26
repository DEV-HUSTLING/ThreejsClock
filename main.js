import * as THREE from 'three';
import './style.css'
import gsap from 'gsap';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// styles
const size={
    width: window.innerWidth,
    height: window.innerHeight
}
const scene = new THREE.Scene();


// creating shapes
const geometry = new THREE.TorusGeometry( 4, 3, 15, 100 ); 

// creating material
const material = new THREE.MeshStandardMaterial({
    color:"#00ff83",
})
// crearte shape + material = "MESH"
const mesh  = new THREE.Mesh(geometry,material)
// add mesh to the scene
scene.add(mesh)

// Lights
const light = new THREE.PointLight(0xffffff,50,100)
light.position.set(0,5,15)
scene.add(light)

// CAMERA
const camera = new THREE.PerspectiveCamera(30,size.width/size.height,0.1,100)
camera.position.z = 40
scene.add(camera)


// Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({canvas})
// set size of camera
renderer.setSize(size.width, size.height);
renderer.render(scene,camera)
// Controls
const controls = new OrbitControls(camera,canvas)
controls.enableDamping = true;
controls.enableZoom = false;
// controls.autoRotate = true

// Responsive
window.addEventListener("resize",()=>{
    size.width = window.innerWidth
    size.height = window.innerHeight
    // camera
    camera.aspect = size.width/size.height
    camera.updateProjectionMatrix()
    renderer.setSize(size.width, size.height);
})

// to correctly load the object or geometry re render the scene i.e; loop it
const loop = ()=>{
    controls.update()
    mesh.rotation.x +=0.01
    mesh.rotation.y +=0.01

    renderer.render(scene,camera)
    window.requestAnimationFrame(loop)
}
loop()


// smooth animation

const t1 = gsap.timeline({defaults:{duration:1}})
t1.fromTo(mesh.scale,{z:0,x:0,y:0},{z:1,x:1,y:1})

// mouse animation
let mouseDown = false
let rgb =[]
window.addEventListener("mousedown",()=>{mouseDown = true});
window.addEventListener("mouseup",()=>{mouseDown = false})

window.addEventListener("mousemove",(e)=>{
    if(mouseDown){
        rgb = [
            Math.round((e.pageX/size.width)*255),
            Math.round((e.pageY/size.height)*255),
            150,
        ]
        let newColor = new THREE.Color(`rgb(${rgb.join(",")})`)
        gsap.to(mesh.material.color,{
            r: newColor.r,
            g: newColor.g,
            b: newColor.b,
        })
    }
})

function numberh(event){
    if(event.target.value > 12){
        alert("keep it below 12")
    }
     textarea.value.match(/^\d+(\.\d+)?$/);
}
function numberm(event){
    return textarea.value.match(/^\d+(\.\d+)?$/);
}
function numbers(event){
    return textarea.value.match(/^\d+(\.\d+)?$/);
}

function startCountdown() {
    var hours = document.querySelector(".th").value;
    var minutes = document.querySelector(".tm").value;
    var seconds = document.querySelector(".ts").value;

    var totalSeconds = hours * 3600 + minutes * 60 + seconds * 1;

    var countdownInterval = setInterval(function() {
        if (totalSeconds <= 0) {
            clearInterval(countdownInterval);
            var audio = new Audio('audio_file.mp3');
            audio.play();
            setTimeout(function() {
                alert("TimeOut!!")
                audio.pause();
            },5000);
            document.getElementById("timer_inp").style.visibility = "hidden";
        } else {
            hours = Math.floor(totalSeconds / 3600);
            minutes = Math.floor((totalSeconds % 3600) / 60);
            seconds = totalSeconds % 60;

            document.querySelector(".th").value = hours;
            document.querySelector(".tm").value = minutes;
            document.querySelector(".ts").value = seconds;

            totalSeconds--;
        }
    }, 1000);
}