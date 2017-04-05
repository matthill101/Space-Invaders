var ship;

var laser = [];

var alien = [];

var sec = 0;

var gameover = false;

var imgalien0;
var imgship;

function preload() {
    imgalien0 = loadImage("images/alien.png");
    imgship = loadImage("images/ship.png")
}

function setup() {
    
    createCanvas(700,700)
    
    setInterval(timeIt, 750);
    
    ship = new Ship();
    
    for (var j = 1; j <= 5; j++) {
    for (var i = 0; i < 10; i++) {
    alien.push(new Alien((i+1)*50,j*50))
    }
    }
    
}

function timeIt() {
    sec++;
    if (alien.length > 0) {
    for (var i = 0; i < alien.length; i++) {
    alien[i].move();
    }
    }
    }

function draw() {
    
    
    background(150);  
    
    if (gameover == false) {
    ship.display();
    ship.move();
    }
    
    if (alien.length > 0) {
    for (var i = 0; i < alien.length; i++) {
    alien[i].display();
    alien[i].invade();
    if (alien[i].lifespan < 1) {
        alien.splice(i,1);
    }
    }
    }
    
    var edge = false;

    for (var i = 0; i < alien.length; i++) {
    if (alien[i].x > width-50 || alien[i].x < 50)  {
        edge = true;
    } 
    }

    if (edge) {
    for (var i = 0; i < alien.length; i++) {
        alien[i].shiftDown();
        alien[i].move();
    }
    }
    
    
    if (laser.length > 0) {
    laser[0].display();
    laser[0].move();
    laser[0].kill();
    }
    
//SHOOTING FUNCTIONS
    
    for (var m = 0; m < alien.length; m++) {
        for (var n = 0; n < laser.length; n++) {
            if (laser[n].y > alien[m].y-15 && laser[n].y < alien[m].y+15 && laser[n].x > alien[m].x-15 && laser[n].x < alien[m].x+15) {
            alien[m].lifespan += -1;  
            laser.splice(n,1);
            }
        }
    }
    
    if (gameover) {
        laser.splice(0,laser.length);
        alien.splice(0,alien.length);
        ship = 0;
    }
    
}

function keyPressed() {
    if (keyCode == 32 && laser.length < 1) {
    laser.push(new Laser())
    }
}




