function Alien(x,y) {
        
        this.x = x;
        this.y = y;
        this.xspeed = 25;
        this.lifespan = 1;
    
        this.display = function() {
        imageMode(CENTER);
        image(imgalien0, this.x, this.y, 35, 35);
        }
        
        this.move = function() {
        this.x += this.xspeed
        }
        
        this.shiftDown = function() {
            this.xspeed *= -1;
            this.y += 25
        }
        
        this.invade = function() {
            if (this.y >= 600) {
                gameover = true;
            }
        }
    
}