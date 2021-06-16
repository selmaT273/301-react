class Coffee {
    constructor(name, roast, origin) {
        this.name = name;
        this.roast = roast;
        this.origin = origin;
    }
    // instance method
    brew = () => {
        console.log(`Your ${this.name} is brewed and ready!`);
    }
};



class Cappuccino extends Coffee {
    // super calls the parent class's constructor (the Coffee constructor in this case)
    constructor(name, roast, origin, milk, cinnamon) {
        super(name, roast, origin);
        this.milk = milk;
        this.cinnamon = cinnamon;
    }

    sprinkleCinnamon() {
        this.cinnamon = !this.cinnamon;
    }
}


let myCoffee = new Coffee("Stillwater", "medium", "Brazil");
console.log(myCoffee);
myCoffee.brew();

let myCappuccino = new Cappuccino('Wake Up Iowa', 'dark', 'costa rico', 'whole', true);
myCappuccino.brew();
console.log(myCappuccino.cinnamon);
myCappuccino.sprinkleCinnamon();
console.log(myCappuccino.cinnamon);