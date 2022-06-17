const Ship = require('../src/cruise-ship');
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
        const ship = new Ship(dover);
        const calais = new Port('Calais');
        
        ship.dock(calais.name);

        expect(ship.currentPort).toEqual('Calais');
    });
});