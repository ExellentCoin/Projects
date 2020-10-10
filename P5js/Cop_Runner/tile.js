class Tile {
    constructor(value, neighbours, pos, found) {
        this.value = value;
        this.neighbours = neighbours;
        this.pos = pos;
        this.contains = [];
    }

    draw() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, 150);
        if (this.contains.length === 2) {
            found = true;
        }
    }
}
