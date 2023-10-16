//The Singleton Pattern ensures that a class has only one instance and provides a global point of access to that instance.
//This pattern is often used for managing resources that should be shared, such as database connections or configuration settings.
let instance;
class Singleton {
  constructor() {
    if (instance) {
      throw new Error("New instance cannot be created!!");
    }

    instance = this;
  }

}