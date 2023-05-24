const MAX_FITNESS_LEVEL = 10;
const MIN_HUNGER_LEVEL = 0;
function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.children=[];
}

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
}

Pet.prototype.growUp = function () {
    if(!this.isAlive){
        throw new Error('Your pet is no longer alive :(');
    }
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
}

Pet.prototype.walk = function () {
    if(!this.isAlive){
        throw new Error('Your pet is no longer alive :(');
    }
    this.fitness += 4;
    if(this.fitness === 9 || this.fitness > MAX_FITNESS_LEVEL){
        this.fitness = MAX_FITNESS_LEVEL;
    }
}

Pet.prototype.feed = function () {
    if(!this.isAlive){
        throw new Error('Your pet is no longer alive :(');
    }
   this.hunger -= 3;
   if (this.hunger < MIN_HUNGER_LEVEL){
       this.hunger = MIN_HUNGER_LEVEL;
   }
}

Pet.prototype.checkup = function () {
    if(!this.isAlive){
        throw new Error("Your pet is no longer alive :(");
    }
    else  if(this.fitness <= 3 && this.hunger >= 5){
        return 'I am hungry AND I need a walk';
    }
    else if(this.fitness <= 3){
        return 'I need a walk'
    }
    else if(this.hunger >= 5) {
        return 'I am hungry'
    }
    else {
        return 'I feel great!';
    }
}

Pet.prototype.haveBaby = function (childName) {
    const child = new Pet(childName);
    this.children.push(child);
};

module.exports = Pet;


