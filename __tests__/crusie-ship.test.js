const Ship = require('../src/cruise-ship');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Ship('Neptune')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const ship = new Ship('Neptune');
        expect(ship.name).toEqual('Neptune');
    });

    it('initial starting point is zero', () => {
        const ship = new Ship('Neptune','Dover');
        expect(ship.startingPoint).toEqual('Dover');
    });

    it('check passengers is an empty array', () => {
        const ship = new Ship('Neptune');
        expect(ship.passengers.length).toEqual(0);
    });
});

describe('board passengers', () => {
    it('has a method called boardPassenegers', () => {
        const ship = new Ship('Neptune');
        expect(ship.boardPassengers).toBeInstanceOf(Function);
    });
});