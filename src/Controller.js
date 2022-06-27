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
    }
}