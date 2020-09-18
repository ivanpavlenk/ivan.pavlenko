window.onload = function () {

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

const snowLegs = {
    x: 200,
    y: 300,
    radius: 100,
    degrees: 2 * Math.PI
}

const snowBody = {
    x: 200,
    y: 150,
    radius: 70,
    degrees: 2 * Math.PI
}

const snowHead = {
    x: 200,
    y: 50,
    radius: 40,
    degrees: 2 * Math.PI,
}

const snowFace = {
    rightEye: {
        x: 180,
        y: 40,
        radius: 5,
        degrees: 2 * Math.PI,
    },

    leftEye: {
        x: 220,
        y: 40,
        radius: 5,
        degrees: 2 * Math.PI,
    },

    smile: {
        x: 200,
        y: 60,
        radius: 12,
        startAngle: 0,
        endAngle: 180
    }
}

function drawBody({x,y,radius,degrees}) {
    context.beginPath()
    context.arc(x, y, radius,degrees,false)
    context.fillStyle ='white'
    context.fill()
    context.stroke()   
}

function drawFace (face) {

    context.beginPath()
    context.arc(face.rightEye.x,face.rightEye.y,face.rightEye.radius,face.rightEye.degrees,false)
    context.fillStyle ='black'
    context.strokeStyle='silver';
    context.fill()
    context.stroke() 
    
    context.beginPath()
    context.arc(face.leftEye.x,face.leftEye.y,face.leftEye.radius,face.leftEye.degrees,false)
    context.fillStyle ='black'
    context.strokeStyle='silver';
    context.fill()
    context.stroke()
    
    context.beginPath()
    context.arc(face.smile.x, face.smile.y, face.smile.radius, getRadians(face.smile.startAngle), getRadians(face.smile.endAngle), false);
    context.strokeStyle='silver';
    context.stroke()  
}

function drawSnowMan() {

    drawBody(snowHead)
    drawBody(snowBody)
    drawBody(snowLegs)
    drawFace(snowFace)
}

drawSnowMan()

function getRadians(degrees) {
    return (Math.PI/180)*degrees;
}

// Three js ================================================================


var scene = new THREE.Scene();

var spotLight = new THREE.SpotLight(0xeeeece);
spotLight.position.set(1000, 1000, 1000);

scene.add(spotLight);
var spotLight2 = new THREE.SpotLight(0xffffff);

spotLight2.position.set( -200, -200, -200);
scene.add(spotLight2);

var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.z = 50;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
var material = new THREE.MeshPhongMaterial( {
    color: 0xdaa520,
    specular: 0xbcbcbc,
});
var ring = new THREE.Mesh( geometry, material );
scene.add( ring );

function animate () {

    requestAnimationFrame( animate );
    ring.rotation.x += 0.01;
    ring.rotation.y += 0.01;
    renderer.render( scene, camera );
};

animate();

}   


