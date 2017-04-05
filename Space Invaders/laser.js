function Laser() {
        
        this.x = ship.x;
        this.y = 660;
        this.speed = 10;
    
        this.display = function() {
        noStroke();
        fill(0,255,0);
        rectMode(CENTER);
        rect(this.x,this.y,4,8);
        }
        
        this.move = function() {
        this.y += -this.speed
        }
        
        this.kill = function() {
        if (this.y < 0) {
        laser.splice(0,1)
        }
        }
    
}