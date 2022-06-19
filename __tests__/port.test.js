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