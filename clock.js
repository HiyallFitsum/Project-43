class Clock {
    constructor(x,y){
var options = {
    
        }
        this.body = Bodies.rectangle(x,y,100,0);
        this.width = 100;
        this.height = 0;  
    }
      
 display(){       
    let hr = hour()
    let mn = minute();
    let sc = second();
    var pos = this.body.position
        translate(pos.x, pos.y);
        angleMode(DEGREES);
    var scAngle = map(sc, 0, 60, 0, 360);
            push();
                rotate(scAngle)
                stroke(255,0,0);
                strokeWeight(7);
                line(0,0,100,0);
            pop()
    }
}