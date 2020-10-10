class Bandid {
    constructor(map, value) {
        this.value = value;
        this.path;
    }

    move() {
        map.tiles[this.value].contains = [];
        let possibleMoves = map.tiles[this.value].neighbours;
        let move =
            possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
        this.value = move;
        map.tiles[this.value].contains.push('Bandid');
    }

    draw() {
        noStroke();
        fill(255, 0, 0);
        rect(
            map.tiles[this.value].pos.x + 12,
            map.tiles[this.value].pos.y - 10,
            20
        );
    }
}
