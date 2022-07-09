(function exportPort() {
  class Port {
    constructor(name) {
      this.name = name;
      this.ships = [];
    }
    addShip(shipThatDocked) {
      this.ships.push(shipThatDocked);
    }
    removeShip(shipThatHasSetSail) {
      const currentIndex = this.ships.indexOf(shipThatHasSetSail);
      this.ships.splice(currentIndex, 1);
    }
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  }
})();
