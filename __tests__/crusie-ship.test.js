const Ship = require('../src/cruise-ship');
const Port = require('../src/port');
// const Port = require('../src/port');

describe('constructor', () => {
    let ship;
    let port;
    beforeEach(() => {
        port = new Port('Dover');
        ship = new Ship(port);
    }); 
    it('returns an object', () => {
        expect(ship).toBeInstanceOf(Object);
    });

    it('initial starting point is Dover', () => {
        expect(ship.currentPort).toEqual(port);
    });
});

describe('setSail', () => {
    let port;
    let ship;
    beforeEach(() => {
        port = new Port('Dover');
        ship = new Ship(port);
    }); 
    it('has a method called set sail', () => {
        expect(ship.setSail).toBeInstanceOf(Function);
    });

    it('truthy of setSail', () => {
        ship.setSail();

        expect(ship.currentPort).toBeTruthy();
    });
});