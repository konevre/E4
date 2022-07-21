function Device(name, power) {
    this.currentPower = 0;
    this.brand = 'Sony',
    this.name = name,
    this.power = power
}

Device.prototype.turnOn = function() {
    this.currentPower = this.power
}
Device.prototype.turnOff = function() {
    this.currentPower = 0
}
Device.prototype.showPower = function() {
    console.log(`Current power of ${this.name} is ${this.currentPower}.`)
}

function Phone(name, power, color) {
    this.name = name,
    this.power = power,
    this.color = color
}
function Console(name, power, bundle) {
    this.name = name,
    this.power = power,
    this.bundle = bundle
}

Phone.prototype = new Device();
Console.prototype = new Device();

const sony_xm = new Phone('xm-23', 100, 'white');
const console_4 = new Console('playstation 4', 900, false);

sony_xm.turnOn()
sony_xm.turnOff()
sony_xm.showPower()

console_4.turnOn()
console_4.turnOff()
console_4.showPower()