class Dog {
  constructor(name) {
    this.name = name;
  }
}

const dogFunctionality = {
  bark: () => console.log("Woof!"),
  wagTail: () => console.log("Wagging my tail!"),
  play: () => console.log("Playing!"),
};

// Mixin in action
Object.assign(Dog.prototype, dogFunctionality);

const daisy = new Dog("Daisy");
console.log(daisy.name);
daisy.bark()
daisy.play()
