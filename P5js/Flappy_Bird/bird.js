class Bird {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.vel = 0;
        this.grav = 0.3;
        this.lift = -9;
        this.highlite = false;
    }

    draw() {
        //Draw bird
        noStroke();
        fill(255);
        if (this.highlite == true) {
            fill(255, 0, 0);
            this.highlite = false;
        }
        ellipse(this.x, this.y, 40);
    }

    update() {
        this.vel += this.grav;
        this.y += this.vel;

        if (this.y < 0) {
            this.y = 0;
            this.vel = 0;
        } else if (this.y > height) {
            this.y = height;
            this.vel = 0;
        }

        for (let pipe of pipes) {
        }
    }

    up() {
        this.vel /= 2;
        this.vel += this.lift;
        this.vel = constrain(this.vel, -25, 1000000);
    }
}
