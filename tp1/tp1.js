//Diaz Valentina Elizabeth Comision 2 Legajo:119013/7
//https://youtu.be/dsVAVFqa7og
let cantidadPuntos = 20;
let tamañoP = 10;
let espacio = 20;
let radioInteraccion = 150;
let colorPunto;
let cambioColor = false;
let ultimoCambioColor = 0;
let imagenF10;

function preload() {
  imagenF10 = loadImage("data/imagen1.jpg");
}

function setup() {
  createCanvas(800, 400); 
  background(0);
  noStroke();
  colorPunto = color(255); 
}

function draw() {
  background(0); 
  image(imagenF10, 0, 0, 400, 400); 
    if (mouseX > 400) {
    interaccion(mouseX - 400, mouseY);
  }
}

function interaccion(x, y) {
  if (cambioColor && frameCount - ultimoCambioColor > 10) {
    colorPunto = color(random(255), random(255), random(255));
    ultimoCambioColor = frameCount;
  }
  fill(colorPunto);
  for (let i = 0; i < cantidadPuntos; i++) {
    for (let a = 0; a < cantidadPuntos; a++) {
      let distancia = dist(x, y, i * espacio, a * espacio);
      let tam = calcularTamañoPunto(distancia, radioInteraccion, tamañoP);
      ellipse(i * espacio + 400, a * espacio, tam, tam); 
    }
  }
}

function calcularTamañoPunto(distancia, radio, tamañoBase) {
  return map(distancia, 0, radio, tamañoBase / 2, tamañoBase * 1.5);
}

// Cambio de Colores
function mousePressed() {
  cambioColor = true;
}

// Reinicio Color con cualquier tecla
function keyPressed() {
  tamañoP = 10;
  cambioColor = false;
  colorPunto = color(255);
  ultimoCambioColor = 0;
}
