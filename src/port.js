class Port {
    constructor (name) {
        this.name = name;
        this.ships = [];
    }
    addShip(shipThatDocked){
        this.ships.push(shipThatDocked);
    }
    removeShip(shipThatHasSetSail){
        const currentIndex = this.ships.indexOf(shipThatHasSetSail)
        this.ships.splice(currentIndex, 1);
    }
}

module.exports = Port;