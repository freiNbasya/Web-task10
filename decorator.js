//The Decorator pattern extends (decorates) an object’s behavior dynamically. 
//The ability to add new behavior at runtime is accomplished by a Decorator object which ‘wraps itself’ around the original object. 
//Multiple decorators can add or override functionality to the original object.
class Person {
    constructor(name){
    this.name = name;
    }
}

class Person_with_Surname{
    constructor(person, surname){
        this.person = person;
        this.name = person.name;
        this.surname = surname;
    }

}

let bob = new Person("Bob")
let coolerBob = new Person_with_Surname(bob, "Makenzie")