class Device {
    constructor(name, power) {
        this.currentPower = 0;
        this.brand = 'Sony';
        this.name = name;
        this.power = power;
    }

    turnOn() {
        this.currentPower = this.power
    }

    turnOff() {
        this.currentPower = 0;
    }

    showPower() {
        console.log(`Current power of ${this.name} is ${this.currentPower}.`)
    }
}

class Phone extends Device {
    constructor(name, power, color, brand, currentPower) {
        super(brand);
        super(currentPower);
        super.turnOn();
        super.turnOff();
        super.showPower();
        this.name = name;
        this.power = power;
        this.color = color;
    }
}

class Console extends Device {
    constructor(name, power, bundle, brand, currentPower) {
        super(brand);
        super(currentPower);
        super.turnOn();
        super.turnOff();
        super.showPower();
        this.name = name;
        this.power = power;
        this.bundle = bundle;
    }
}

const sony_xm = new Phone('xm-23', 100, 'white');
const console_4 = new Console('playstation 4', 900, false);

sony_xm.turnOn()
sony_xm.turnOff()
sony_xm.showPower()

console_4.turnOn()
console_4.turnOff()
console_4.showPower()