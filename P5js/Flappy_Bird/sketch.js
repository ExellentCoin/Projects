let bird;
let pipes = [];
let interval = 0;

function setup() {
    createCanvas(1000, 1000);
    bird = new Bird(width / 2 - 200, 0);
    pipes.push(new Pipe());
}

function draw() {
    background(0);
    bird.update();
    bird.draw();

    if (interval == 100) {
        pipes.push(new Pipe());
        interval = 0;
    }

    if (pipes.length > 4) {
        pipes.shift();
    }

    for (let pipe of pipes) {
        if (pipe.hits(bird)) {
            print('hit');
            bird.highlite = true;
        }
        pipe.draw();
    }

    interval++;
}

function mouseClicked() {
    bird.up();
}
