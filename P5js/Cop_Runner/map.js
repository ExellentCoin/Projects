class Map {
    constructor(found) {
        this.tiles = [];

        //Create tile A
        this.tiles[0] = new Tile(0, [1], createVector(300, 700), found);

        //Create tile B
        this.tiles[1] = new Tile(1, [0, 2], createVector(400, 580), found);

        //Create tile C
        this.tiles[2] = new Tile(
            2,
            [1, 5, 3],
            createVector(width / 2, 450),
            found
        );

        //Create tile D
        this.tiles[3] = new Tile(
            3,
            [2, 4],
            createVector(width / 2, 300),
            found
        );

        //Create tile E
        this.tiles[4] = new Tile(4, [3], createVector(width / 2, 150), found);

        //Create tile F
        this.tiles[5] = new Tile(5, [2, 6], createVector(600, 580), found);

        //Create tile G
        this.tiles[6] = new Tile(6, [5], createVector(700, 700), found);
    }

    draw() {
        for (let i = 0; i < this.tiles.length; i++) {
            this.tiles[i].draw();
        }
    }
}
