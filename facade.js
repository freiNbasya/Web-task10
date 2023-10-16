//The Façade pattern provides an interface which shields clients from complex functionality in one or more subsystems. 
//It is a simple pattern that may seem trivial but it is powerful and extremely useful. 
//It is often present in systems that are built around a multi-layer architecture.
class legoBlock1 {
    placeBlock() {
        return "Placed block1";
    }
}

class legoBlock2 {
    placeBlock() {
        return "Placed block2";
    }
}

class legoBlock3 {
    placeBlock() {
        return "Placed block3";
    }
}

class LegoConstructor {
    constructor() {
        this.legoBlock1 = new legoBlock1();
        this.legoBlock2 = new legoBlock2();
        this.legoBlock3 = new legoBlock3();
    }

    assemble() {
        let placeBlock1 = this.legoBlock1.placeBlock();
        let placeBlock2 = this.legoBlock2.placeBlock();
        let placeBlock3 = this.legoBlock3.placeBlock();
        return `${placeBlock1}, ${placeBlock2}, ${placeBlock3}. The constructor is assembled`;
    }
}
const facade = new Facade();
console.log(facade.assemble());