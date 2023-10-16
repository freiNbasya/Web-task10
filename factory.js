  //The factory pattern wraps a constructor for different types of objects and returns instances of the objects
  function Factory() {
    this.createProduct = function (type, cost) {
      return new Gadgets(type, cost);
    };
  }
  function Gadgets(type, cost) {
    this.type = type;
    this.cost = cost;
  }
  const factory = new Factory();
  
  const GPU = factory.createProduct('GPU', 300);
  const CPU = factory.createProduct('CPU', 100);