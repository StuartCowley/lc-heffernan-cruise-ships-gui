(function exportController(){
    class Controller {
        constructor(ship) {
            this.ship = ship;
            this.initialiseSea();

            const sailButton = document.querySelector('#sailbutton');
            sailButton.addEventListener('click', () => {
                this.setSail();
            });
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
        renderShip(){
            const ship = this.ship;
            const indexOfCurrentPort = ship.itinerary.ports.indexOf(ship.currentPort);
            const currentPortElement = document.querySelector(`[data-port-index="${indexOfCurrentPort}"]`);
            const shipElement = document.querySelector('#ship');
            shipElement.style.top = `${currentPortElement.offsetTop + 15}px`;
            shipElement.style.left = `${currentPortElement.offsetLeft - 8}px`;
        };
        setSail() {
            const ship = this.ship;
            const indexOfNextPort = ship.itinerary.ports.indexOf(ship.currentPort) + 1;
            const nextPortElement = document.querySelector(`[data-port-index="${indexOfNextPort}"]`);
            if (!nextPortElement){
                this.renderMessage(`We have reached our final port`);
            } else {
            
                this.renderMessage(`We have now departed from ${ship.currentPort.name}`);
                
                const shipElement = document.querySelector('#ship');
                const end = parseInt(nextPortElement.offsetLeft,10);

                let sailInterval = null;
                sailInterval = setInterval(() => {
                    let posX = parseInt(shipElement.style.left, 10);
                    if(posX === (end - 8)){
                        ship.setSail();
                        ship.dock();
                        this.renderMessage(`We have arrived at ${ship.currentPort.name}`);
                        clearInterval(sailInterval);
                    } else {
                        shipElement.style.left = `${posX + 1}px`;   
                    }
                    
                }, 20);
            }
        };
        renderMessage(message) {
            const viewportElement = document.querySelector("#viewport"); 
            const newMessageElement = document.createElement('div');
            newMessageElement.id = 'message';
            newMessageElement.innerHTML = message;
            viewportElement.appendChild(newMessageElement);
            setTimeout(() => {viewportElement.removeChild(newMessageElement)}, 2000);
        };
    };
    if(typeof module !== 'undefined' && module.exports){
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    };
}());