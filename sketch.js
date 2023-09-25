let costas1, costas2;
let quieto, farra1, farra2;
let olhando, gameover;
let giz, grito;
let estaBagunçando = false;
let situacao = "olhando";
let proximaAlteracao = 0;

function preload() {
  costas1 = loadImage("costas1.jpg");
  costas2 = loadImage("costas2.jpg");
  olhando = loadImage("olhando.jpg");
  gameover = loadImage("gameover.jpg");
  quieto = loadImage("quieto.jpg");
  farra1 = loadImage("farra1.jpg");
  farra2 = loadImage("farra2.jpg");
  giz = loadSound("giz.mp3");
  giz.setLoop(true);
  grito = loadSound("grito.mp3");
  grito.setLoop(true);
}

function setup() {
  createCanvas(1024, 576);
}

function troca() {
  if (situacao === "olhando") {
    situacao = "não olhando";
    giz.play();
  } else {
    situacao = "olhando";
    giz.pause();
  }
  proximaAlteracao = millis() + random(2500, 7000);
}

function draw() {
  if (millis() > proximaAlteracao) {
    troca();
  }
  if (situacao === "olhando") {
    image(olhando, 0, 0);
  } else {
    let tempo = millis() % 1000;
    if (tempo > 500) {
      image(costas2, 0, 0);
    } else {
      image(costas1, 0, 0);
    }
  }
  if (mouseIsPressed || touches.length > 0 || keyIsPressed) {
    if (situacao === "olhando") {
      textSize(64);
      fill("red");
      textAlign(CENTER, CENTER);
      text("GAME OVER", width / 2, height / 2);
      giz.stop();
      grito.stop();
      noLoop();
    } else {
      if (estaBagunçando === false) {
        grito.play();
        estaBagunçando = true;
      }
      let tempo = millis() % 1200;
      if (tempo > 400) {
        image(farra1, 50, 420, 100, 160, 180, 100, 450, 720);
      } else {
        image(farra2, 50, 420, 100, 160, 180, 100, 450, 720);
      }
      tempo = millis() % 800;
      if (tempo > 400) {
        image(farra1, 150, 420, 100, 160, 180, 100, 450, 720);
      } else {
        image(farra2, 150, 420, 100, 160, 180, 100, 450, 720);
      }
      tempo = millis() % 900;
      if (tempo > 450) {
        image(farra1, 250, 420, 100, 160, 180, 100, 450, 720);
      } else {
        image(farra2, 250, 420, 100, 160, 180, 100, 450, 720);
      }
    }
  } else {
    grito.pause();
    estaBagunçando = false;
    // Adicionando os três estudantes lado a lado
    image(quieto, 50, 420, 100, 160, 180, 100, 450, 720);
    image(quieto, 150, 420, 100, 160, 180, 100, 450, 720);
    image(quieto, 250, 420, 100, 160, 180, 100, 450, 720);
  }
}