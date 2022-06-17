class Ship {
    constructor (currentPort) {
        this.currentPort = currentPort;
    }
    setSail(){
        return this.currentPort;
    }

    dock(newPort){
        this.currentPort = newPort;
    }
};

module.exports = Ship;