const Ship = require('../src/cruise-ship');
const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

describe('constructor', () => {
    let ship;
    let itinerary;
    let port;

    beforeEach(() => { 
        port = new Port('Dover');
        itinerary = new Itinerary([port]);
        ship = new Ship(itinerary);

    }); 
    it('returns an object', () => {
        expect(ship).toBeInstanceOf(Object);
    });

    it('initial starting point is Dover', () => {
        expect(ship.currentPort).toEqual(port);
    });

    it('previous port initialises with null', () => {
        expect(ship.previousPort).toEqual(null);
    });
});

describe('setSail', () => {
    let dover;
    let calais;
    let itinerary;
    let ship;
    beforeEach(() => {
        dover = new Port('Dover');
        calais = new Port ('Calais');
        itinerary = new Itinerary([dover, calais]);
        ship = new Ship(itinerary);
    }); 
    it('has a method called set sail', () => {
        expect(ship.setSail).toBeInstanceOf(Function);
    });

    it('truthy of setSail', () => {
        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
    });

    it('set sail changes previous port to current port', () => {
        ship.setSail();

        expect(ship.previousPort).toEqual(dover);
    });

    it('edge case test, can not sail past last port', () => {
        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrow('End of itinerary');
    });
});