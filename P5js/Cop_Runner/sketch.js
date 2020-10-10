let map, heli, bandid;
let time = 0;
let found = false;

function setup() {
    createCanvas(1000, 1000);
    map = new Map(found);
    heli = new Heli(map, Math.floor(Math.random() * 6));
    bandid = new Bandid(map, Math.floor(Math.random() * 6));
}
function draw() {
    background(51);
    map.draw();
    heli.draw();
    bandid.draw();

    if (time === 60 * 3) {
        time = 0;
        bandid.move();
        heli.move();
        if (found === true) {
            print(heli.path);
            found = false;
            heli = new Heli(map, Math.floor(Math.random() * 6));
            bandid = new Bandid(map, Math.floor(Math.random() * 6));
        }
    }
    time++;
}
