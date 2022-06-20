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
    it('current port updates when dock is called', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toEqual(calais);
    });
});

describe('addShip', () => {
    it('add ship is a method and pushes a ship into the ships array', () => {
        const dover = new Port('Dover');
        
        dover.addShip('Neptune');

        expect(dover.addShip).toBeInstanceOf(Function);
        expect(dover.ships).toEqual(['Neptune'])
    });
});

describe('removeShip', () => {
    it('remove ship is a method', () => {
        const dover = new Port('Dover');
        dover.ships = ['Neptune', 'Atlantis', 'Trident', 'Poseidon'];
        dover.removeShip('Trident');

        expect(dover.removeShip).toBeInstanceOf(Function);
        expect(dover.ships).toEqual(['Neptune', 'Atlantis', 'Poseidon']);

    });
});