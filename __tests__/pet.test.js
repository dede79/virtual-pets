const Pet = require('../src/Pet');

describe('Pet', () => {
    it('sets the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    });
});

describe('isAlive', function () {
    it('check if pet is dead', () => {
        const max = new Pet('max');
        max.hunger = 10;
        max.fitness = 0;
        max.age = 35;
        max.isAlive;
        expect(max.isAlive).toBe(false);
    })
});

describe('growUp', () => {
    it('has a initial age of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });

    it('age increases by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });

    it('has initial hunger of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toEqual(0);
    });

    it('increase hunger by 5', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });

    it('fitness start at 10', () => {
        const pet = new Pet('Fido');
        expect(pet.fitness).toEqual(10);
    });

    it('decreases fitness by 3', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
    });
});

describe('walk', function () {
    it('increase pet fitness by 4', () => {
        const fido = new Pet('fido');
        fido.fitness = 8;
        fido.walk();
        expect(fido.fitness).toEqual(10);
    });
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
});

describe('feed', function (){
    it('increase pet hunger level by 3', () => {
        const max = new Pet('max');
        max.hunger = 3;
        max.feed();
        expect(max.hunger).toEqual(0);
    })
    it('pet feed level cannot go below 0', () => {
        const max = new Pet('max');
        max.hunger = 0;
        max.feed();
        expect(max.hunger).toEqual(0);
    })
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
})

describe('checkup', function (){
    it('if the pet\'s fitness is 3 or less, it should return \'I need a walk\'', () => {
        const max = new Pet('max');
        max.fitness = 0;
        max.hunger = 0;
        max.checkup();
        expect(max.checkup()).toBe('I need a walk');
    })
    it('return \'I am hungry\' if pet\'s hunger is 5 or more', () => {
        const max = new Pet('max');
        max.fitness = 10;
        max.hunger = 6;
        max.checkup();
        expect(max.checkup()).toBe('I am hungry');
    })
    it('return \'I am hungry AND I need a walk\' if pet\'s hunger is 5 or more and fitness is less than 3', () => {
        const max = new Pet('max');
        max.hunger = 7;
        max.fitness = 1;
        max.checkup();
        expect(max.checkup()).toBe('I am hungry AND I need a walk');
    })
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.checkup()).toThrow('Your pet is no longer alive :(');
    });
})


