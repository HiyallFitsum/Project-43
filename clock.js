class Clock {
    constructor(x,y){

        this.body = Bodies.rectangle(x,y,100,0);
        this.width = 100;
        this.height = 0;  
    }

    clockHours(){
        let hr = hour()
        var pos = this.body.position
        translate(pos.x, pos.y);
        angleMode(DEGREES);
        var hrAngle = map(hr, 0, 60, 0, 360);
            push();
                rotate(hrAngle)
                stroke("blue")
                strokeWeight(7);
                line(0,0,100,0);
            pop()
    }

    clockMinutes(){
        let mn = minute();
        var pos = this.body.position
        translate(pos.x, pos.y);
        angleMode(DEGREES);
        var mnAngle = map(mn, 0, 60, 0, 360);
            push();
                rotate(mnAngle)
                stroke("green")
                strokeWeight(7);
                line(0,0,200,0);
            pop()
    }
      
    clockSeconds(){       
    let sc = second();
    var pos = this.body.position
    translate(pos.x, pos.y);
    angleMode(DEGREES);
    var scAngle = map(sc, 0, 60, 0, 360);
            push();
                rotate(scAngle)
                stroke("red")
                strokeWeight(7);
                line(0,0,300,0);
            pop()       
    }
}