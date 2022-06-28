(function exportController(){
    class Controller {
        constructor() {
            this.initialiseSea();
        }
        initialiseSea() {
            const backgrounds = [
                '../images/water0.png',
                '../images/water1.png'
            ]
            let waterImage = document.querySelector("#viewport");
            let counter = 0;
            window.setInterval(() => {
                waterImage.style.backgroundImage = `url('${backgrounds[counter % backgrounds.length]}')`;
                counter++;
            }, 1000);
        };
        renderPorts(ports) {
            let portsElement = document.querySelector("#ports");
            portsElement.style.width = '0px';
            ports.forEach((port, index) => {
                const newPortElement = document.createElement('div');
                newPortElement.dataset.portName = port.name;
                newPortElement.dataset.portIndex = index;
                newPortElement.className = 'port';
                portsElement.appendChild(newPortElement);
                const portsElementWidth = parseInt(portsElement.style.width, 10);
                portsElement.style.width = `${portsElementWidth + 256}px`;
            });
        };
        renderShip(ship){
            console.log("renderShip");
            const indexOfCurrentPort = ship.itinerary.ports.indexOf(ship.currentPort);
            const currentPortElement = document.querySelector(`[data-port-index="${indexOfCurrentPort}"]`);
            const shipElement = document.querySelector('#ship');
            shipElement.style.top = `${currentPortElement.offsetTop + 15}px`;
            shipElement.style.left = `${currentPortElement.offsetLeft - 8}px`;
            // currentPortElement.appendChild(shipElement);
        };
    };
    if(typeof module !== 'undefined' && module.exports){
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    };
}());