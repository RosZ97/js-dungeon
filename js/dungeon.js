class Dungeon{
    constructor() {

    }
}

class Tile {
    constructor() {
        this.entity = null;
    }
}

const dungeonFactors = {
    create: function(totslW, totslH, splitW, splitH) {

    }
}

class Room {
    constructor(x, y, width, height) {
			this.x = this.minX = x;
			this.y = this.minY = y;
			this.maxX = x + width;
			this.maxY = y + height;

			this.boundWidth = this.width = width;
			this.boundHeight = this.height = height;
    }
}

class BSPNode {
    constructor(room) {
        this.room = room;
        this.leftChild = null;
        this.rightChild = null;
    }

	get width() { return this.room.boundWidth; }
	get height() { return this.room.boundHeight; }
	get minX() { return this.room.minX; }
	get minY() { return this.room.minY; }
}