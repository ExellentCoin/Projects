class Heli {
    constructor(map, value) {
        this.value = value;
        this.path = [this.value];
    }

    move() {
        map.tiles[this.value].contains = [];
        let move = Math.floor(Math.random() * 6);
        if (move === this.value) {
            this.move();
        } else {
            this.value = move;
            map.tiles[this.value].contains.push('Heli');
            this.path.push(this.value);
            print(this.value);
        }
    }

    draw() {
        noStroke();
        fill(0, 0, 255);
        rect(
            map.tiles[this.value].pos.x - 10,
            map.tiles[this.value].pos.y - 10,
            20
        );
    }
}
