let npelotas = 100
let pelotas = []
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < npelotas; i++) {
    pelotas[i] = new RandomWalker();
  }

}

function draw() {
  for (let i = 0; i < npelotas; i++) {
    pelotas[i].update();
    pelotas[i].display();
  }
}




//______Clases_______//
//___________________//
//___________________//

//random walker//

class RandomWalker {
  constructor(_nombre) {
    this.red = random(100, 200);
    this.green = random(0, 2);
    this.blue = random(0, 190);
    this.nombre = _nombre
    this.posX = width / 2;
    this.posY = random(height);
    this.speed = random(2, 6);
    this.diametro = random(10, 50);
    print("hola soy pelota" + this.nombre);
  }
  update() {
    this.posX += random(-this.speed, this.speed);
    this.posY += random(-this.speed, this.speed);

  }
  display() {
    fill(this.red, this.green, this.blue);
    ellipse(this.posX, this.posY, this.diametro, this.diametro);

  }
}

