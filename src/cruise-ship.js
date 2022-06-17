function Ship (name,startingPoint) {
    this.name = name;
    this.startingPoint = startingPoint;
    this.passengers = [];
};

Ship.prototype.boardPassengers = function() {

};

module.exports = Ship;