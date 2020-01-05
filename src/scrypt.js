// Class Animal
function Animal(name, voice = null) {
  // 6 types Invertebrates, Fish, Amphibians, Reptiles, Birds, Mammals
  this.name = name;
  this.setSoundOfAnimal(voice);
}

Animal.prototype.setSoundOfAnimal = function(voice) {
  voice === null
    ? (this.sound = "Dont know ((")
    : (this.sound = `${voice} ~~ ${voice} ~~ ${voice}`);
};
Animal.prototype.soundOfAnimal = function() {
  return this.sound;
};

// Class Mammals extends Class Animal
function Mammals(name, voice, speed, sex, ...food) {
  Animal.call(this, name, voice);
  this.speed = speed;
  this.legs = 4;
  this.food = food;
  this.showFoodToString();
  this.sex = sex;
}

Mammals.prototype = Object.create(Animal.prototype);
Mammals.prototype.constructor = Mammals;
Mammals.prototype.showFoodToString = function() {
  let str = "";
  for (let i in this.food) {
    str += this.food[i] + " ";
  }
  return str;
};

Mammals.prototype.toString = function() {
  return `
    Animal type Mammal 
    Name \` ${this.name} 
    Sex \` ${this.sex} 
    Sound \` ${Animal.prototype.soundOfAnimal.call(this)} 
    Food \` ${Mammals.prototype.showFoodToString.call(this)} 
    Legs \` ${this.legs} 
    Speed \` ${this.speed}  `;
};

let dog = new Mammals("Dog", "Gaf!", "4,5 km/h", "Male", ["Cat", "Dog-fod"]);
console.log(dog.toString());

