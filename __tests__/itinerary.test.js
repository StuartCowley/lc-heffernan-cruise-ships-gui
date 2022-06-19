const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

describe ('itinerary', () => {
    let itinerary;
    let dover;
    let calais;
    beforeEach(() => {
        dover = new Port('Dover');
        calais = new Port('Calais'); 
        itinerary = new Itinerary([dover, calais]);
    });
    it('itinerary is an object', () => {
        expect(itinerary).toBeInstanceOf(Object);
    });

    it('ports is a property of Itinerary', () => {
        expect(itinerary.ports.length).toEqual(2);
        expect(itinerary.ports).toEqual([dover, calais])
    });
});