//The Builder pattern is used to create objects in "steps". 
//Normally we will have functions or methods that add certain properties or methods to our object.
//However with this pattern we can separate the creation of properties and methods into different entities.
const gun1 = {
    type: "Pistol"
}

const gun2 = {
    type: "SMG"
}

const singleFire = obj => {
    obj.shootOnce = () => console.log(`${obj.type} shoots once`) 
}

const burstFire = obj => {
    obj.shootBurst = () => console.log(`${obj.type} shoots three times`) 
}