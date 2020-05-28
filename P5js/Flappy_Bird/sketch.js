let bird;
let pipes = [];
let interval = 0;
let score = 0;
let score_dom;

function setup() {
    createCanvas(1000, 1000);
    pipes.push(new Pipe());
    bird = new Bird(width / 2 - 200, 0);
    score_dom = createDiv(`Score: ${score}`);
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

    score++;
    score_dom.html(`Score: ${score}`);

    interval++;
}

function mouseClicked() {
    bird.up();
}
