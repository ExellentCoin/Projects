class Pipe {
    constructor() {
        this.x = width;
        this.y = height;
        this.w = 50;
        this.speed = 5;
        this.gap = random(170, 250);
        this.pipe = random(100, height - this.gap - 100);
    }

    draw() {
        noStroke();
        fill(200);
        rect(this.x, 0, this.w, this.pipe);
        rect(this.x, height, this.w, -(height - (this.pipe + this.gap)));
        this.x -= this.speed;
        this.y -= this.speed;
    }

    hits(bird) {
        if (bird.x > this.x && bird.x < this.x + this.w) {
            if (bird.y < this.pipe || bird.y > this.pipe + this.gap) {
                return true;
            }
        } else {
            return false;
        }
    }
}
