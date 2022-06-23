const Ship = require('../src/cruise-ship');
const Itinerary = require('../src/itinerary');
const Port = require('../src/port');


describe('Port', () => {
    let port;
    beforeEach(() => {
        port = new Port('Calais');
    });
    it('is an object', () => {
        expect(port).toBeInstanceOf(Object);
    });

    it('has name Calais', () =>{
        expect(port.name).toEqual('Calais');
    });

    it('ships initiates empty', () => {
        expect(port.ships.length).toEqual(0)
    });
});

describe('dock', () => {
    let dover;
    let calais;
    let itinerary;
    let ship;
    beforeEach(() => {
        dover = new Port('Dover');
        calais = new Port('Calais');
        itinerary = new Itinerary([dover, calais]);
        ship = new Ship(itinerary);

    });
    it('current port updates when dock is called', () => {
        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toEqual(calais);
    });
});

describe('addShip', () => {
    let dover;
    let ship;
    beforeEach(() => {
        dover = new Port('Dover');
        ship = jest.fn();
    });
    it('add ship is a method and pushes a ship into the ships array', () => {
        dover.addShip(ship);

        expect(dover.addShip).toBeInstanceOf(Function);
        expect(dover.ships).toEqual([ship])
    });
});

describe('removeShip', () => {
    let dover;  
    let neptune;
    let atlantis;
    beforeEach(() => {
    dover = new Port('Dover');
    neptune = jest.fn();
    atlantis = jest.fn();
    });
    it('remove ship is a method and removes an element from an array', () => {
        dover.addShip(neptune);
        dover.addShip(atlantis);
        dover.removeShip(neptune);

        expect(dover.removeShip).toBeInstanceOf(Function);
        expect(dover.ships).toEqual([atlantis]);

    });
});