// TPfinalParte1 
//Comisión 2
//Diaz Valentina Legajo: 119013/7
//Laguto Vladimir Legajo: 119061/6

//https://youtu.be/ohZIHJ7vJ38

function setup() {
  createCanvas(640, 480);
  song.setVolume(0.5);
   
  arreglo[0] = loadImage("data/pantalla4_1.jpg");  //ketchup
  arreglo[1] = loadImage("data/pantalla4_2.jpg");  //barbacoa
  arreglo[2] = loadImage("data/pantalla4_3.jpg");  //mostaza
  
  arreglo2[0] = loadImage("data/pantalla5_1.jpg");
  arreglo2[1] = loadImage("data/pantalla5_2.jpg");
  arreglo2[2] = loadImage("data/pantalla5_3.jpg");
  
  arreglo3[0] = loadImage("data/pantalla7_1.jpg");
  arreglo3[1] = loadImage("data/pantalla7_2.jpg");
  arreglo3[2] = loadImage("data/pantalla7_3.jpg");
}
function draw() {
  background(255);
  
  if (pantalla === 0) {
    image(imagen1, 0, 0);
    
    // Botón "Jugar"
    fill(255);
    stroke(0);
    strokeWeight(5);
    rect(500, 400, 100, 50, 10); 
    
    // Texto "Jugar"
    fill(0);
    noStroke();
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Jugar", 550, 425);
    
  } else if (pantalla === 1) {
    image(pantalla1, 0, 0);
    
    // Recuadro 
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(40, 380, 450, 80, 35); 
    
    // Texto dentro del recuadro
    fill(0);
    noStroke();
    textSize(18);
    textAlign(LEFT, TOP);
    text("A Matías le da hambre y se acerca a la panchería\n                              más cercana.\nSe sorprende al ver a Gregory atendiendo el lugar.", 60, 390);
    fill(255);
    stroke(0);
    strokeWeight(5);
    rect(500, 400, 100, 50, 10); 
    fill(0);
    noStroke();
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Siguiente", 550, 425);
    
    } else if (pantalla === 2) {
    image(pantalla2, 0, 0);
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(40, 380, 450, 80, 35); 
    
    fill(0);
    noStroke();
    textSize(18);
    textAlign(LEFT, TOP);
    text("Matías pide solamente un pancho que tenga barbacoa.\nGregory parece no haber escuchado bien y entra en\n                                     pánico.", 45, 390);
    
    // Botón "Siguiente"
    fill(255);
    stroke(0);
    strokeWeight(5);
    rect(500, 400, 100, 50, 10); 
    
    // Texto "Siguiente"
    fill(0);
    noStroke();
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Siguiente", 550, 425);
    
  } else if (pantalla === 3) {
    //pantalla3 decisiones
    image(pantalla3_1, 0, 0);
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(20, 380, 150, 80, 35); 
    
    fill(0);
    noStroke();
    textSize(18);
    text("Le pone ketchup", 95, 420);
    
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35); 
    
    fill(0);
    noStroke();
    textSize(18);
    text("Le pone barbacoa", 475, 420);
//-------------Ruta BARBACOA------------   
  } else if (pantalla === 4.1){
    image(arreglo[1],0,0);
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35); 
    fill(0);
    noStroke();
    textSize(18);
    text("Siguiente", 475, 420);
    
  } else if (pantalla === 4.2){
    image(arreglo2[1],0,0); 
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35); 
    fill(0);
    noStroke();
    textSize(18);
    text("VEREDICTO", 475, 420);
  
  } else if (pantalla === 4.3){
    image (arreglo3[1],0,0); 
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35);    
    fill(0);
    noStroke();
    textSize(18);
    text("Fin", 475, 420);
   
   } else if (pantalla === 4.4){
    image (pantallafinal, 0,0);
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35);   
    fill(0);
    noStroke();
    textSize(18);
    text("¡Gracias!", 475, 420);   
//-------------Ruta KETCHUP------------  
  } else if (pantalla === 5.1){
    image(pantalla3_2, 0, 0);
    
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(20, 380, 150, 80, 35); 
    
    fill(0);
    noStroke();
    textSize(18);
    text("No lo hagas..", 95, 420);
      
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35); 
    
    fill(0);
    noStroke();
    textSize(15);
    text("¿Le pone mostaza?", 475, 420); 
    
  } else if (pantalla === 5.2){
    image(arreglo[0], 0,0);
    
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35); 
    
    fill(0);
    noStroke();
    textSize(18);
    text("Siguiente..", 475, 420); 
    
  } else if (pantalla === 5.3){
    image(arreglo2[0], 0,0);
    
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35); 
    
    fill(0);
    noStroke();
    textSize(18);
    text("Veredicto", 475, 420);   
    
  } else if (pantalla === 5.4){
    image(arreglo3[0], 0,0);
    
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35); 
    
    fill(0);
    noStroke();
    textSize(18);
    text("Fin", 475, 420);   
    
   } else if (pantalla === 5.5){    
     image (pantallafinal, 0,0);
   
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35);   
    fill(0);
    noStroke();
    textSize(18);
    text("¡Gracias!", 475, 420);   
//--------------------------------------------  
  } else if (pantalla === 6.1){
     image(arreglo[2], 0,0);
    
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35); 
    
    fill(0);
    noStroke();
    textSize(18);
    text("Siguiente..", 475, 420); 
  
  } else if (pantalla === 6.2){
     image(arreglo2[2], 0,0);
    
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35); 
    
    fill(0);
    noStroke();
    textSize(18);
    text("¿Veredicto?", 475, 420); 
  
   } else if (pantalla === 6.3){
     image(arreglo3[2], 0,0);
    
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35); 
    
    fill(0);
    noStroke();
    textSize(18);
    text("Fin", 475, 420); 
    
   } else if (pantalla === 6.4){
     image (pantallafinal, 0,0);
   
    fill(255); 
    stroke(0); 
    strokeWeight(5);
    rect(400, 380, 150, 80, 35);   
    fill(0);
    noStroke();
    textSize(18);
    text("¡Gracias!", 475, 420);   
  
}
}
