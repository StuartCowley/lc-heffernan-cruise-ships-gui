class Ship {
    constructor (itinerary) {
        this.itinerary = itinerary;
        this.currentPort = itinerary.ports[0];
        this.previousPort = null;
        this.currentPort.addShip(this);
    }
    setSail(){
        this.currentPort.removeShip(this);
        const itinerary = this.itinerary;
        if(this.currentPort === itinerary.ports[itinerary.ports.length - 1]){
            throw new Error('End of itinerary');
        }
        this.previousPort = this.currentPort;
        this.currentPort = null;

    }

    dock(){
        const itinerary = this.itinerary;
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

        this.currentPort = itinerary.ports[previousPortIndex + 1];
        this.currentPort.addShip(this);
    }
};

module.exports = Ship;