class Ground {
    constructor(x, y, w, h) {
        var ground_options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, w, h, ground_options);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    show() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke("indigo");
        fill("cyan");
        rect(pos.x, pos.y, this.w, this.h);
    }
}