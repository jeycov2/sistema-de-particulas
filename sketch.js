let npelotas = 100
let pelotas = []
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < npelotas; i++) {
    pelotas[i] = new RandomWalker();
  }

}

function draw() {

}




//______Clases_______//
//___________________//
//___________________//

//random walker//

class RandomWalker {
  constructor() {
    this.posX = random(width);
    this.posY = random(height);
    this.speed = random(4);
    this.diametro = random(10, 50);
    print("hola");
  }
  update() {
    this.posX += random(-this.speed, this.speed);
    this.posY += random(-this.speed, this.speed);

  }
  display() {
    ellipse(this.posX, this.posY, this.diametro, this.diametro);

  }
}

