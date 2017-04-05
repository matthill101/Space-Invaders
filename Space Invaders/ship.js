function Ship() {
        
        this.x = width/2;
        this.speed = 5
    
        this.display = function() {
        noStroke();
        fill(255);
        rectMode(CENTER);
        rect(this.x,675,50,30);
        }
        
        this.move = function() {
        if (keyIsDown(LEFT_ARROW) && this.x > 25) {
            this.x += -this.speed
        }
        if (keyIsDown(RIGHT_ARROW) && this.x < 675) {
            this.x += this.speed
        }
        }
    
}