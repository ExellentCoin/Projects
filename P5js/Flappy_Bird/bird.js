class Bird {
    constructor(x, y) {
        //Game
        this.x = x;
        this.y = y;
        this.vel = 0;
        this.grav = 0.3;
        this.lift = -9;
        this.highlite = false;

        this.initModel();
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

        //Check for the closest pipe
        this.closest_pipe;
        if (pipes.length < 1) {
            for (let i = 0; i < pipes.length; i++) {
                if (pipes[i].x > bird.x && pipes[i].x < pipes[i + 1].x) {
                    this.closest_pipe = pipes[i];
                    print(this.closest_pipe);
                }
            }
        } else {
            this.closest_pipe = pipes[0];
        }

        this.inputs = [];
        this.inputs[0] = this.y / height; //Bird x
        this.inputs[1] = this.vel / 20; //Bird vel
        this.inputs[2] = this.closest_pipe.pipe / height; //Closest pipe top
        this.inputs[3] = (this.closest_pipe.pipe + this.closest_pipe.gap) / height; //Closest pipe bottom
        this.inputs[4] = (this.closest_pipe.x - this.x) / width;
    }

    up() {
        this.vel /= 2;
        this.vel += this.lift;
        this.vel = constrain(this.vel, -20, 20);
    }

    initModel() {
        this.nn = new NeuralNetwork(5, 8, 2);
    }
}
