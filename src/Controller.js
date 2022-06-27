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
    };
    if(typeof module !== 'undefined' && module.exports){
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    };
}());