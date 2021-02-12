class Pet { //main pet class
    constructor(name){
        this.name = name;
        this._happiness = 100; //initial level
        this._hunger = 100; 
        this._thirst = 100; 
    }

    get hunger(){
        return this._hunger; //getter for hunger
    }

    get thirst(){
        return this._thirst; 
    }

    get happiness(){
        return this._happiness; 
    }

    set hunger(hunger) { //everytime this setter is called with an operator
        if (hunger <= 0) {  //don't go below 0
            this._hunger = 0
        } else if (hunger > 100) { //don't go above 100
            this._hunger = 100
        } else {
            this._hunger = hunger //stick to what you're given
        }
    }

    set thirst(thirst) {
        if (thirst <= 0) {
            this._thirst = 0
        } else if (thirst > 100) {
            this._thirst = 100
        } else {
            this._thirst = thirst
        }
    }

    set happiness(happiness) {
        if (happiness <= 0) {
            this._happiness = 0
        } else if (happiness > 100) {
            this._happiness = 100
        } else {
            this._happiness = happiness
        }
    }
    feed() {
        this.hunger += 2; //function increment level
    }
    
    drink() {
        this.thirst += 1;
    }
    play() {
        this.happiness += 8;
    }
}

//getters below are for version 2 of the game, ignore for now

class Dog extends Pet {
    constructor(name, walk = 50){
        super(name);
        this.walk = walk;
    }
    get needsWalk(){
        return !this.happiness
    }
    get needsBath(){
        return !this.walk
    }
}

class Cat extends Pet {
    constructor(name, needsBrush = false, needsCuddle = false){
        super(name);
        this._needsBrush = needsBrush;
        this._needsCuddle = needsCuddle;
    }
    get needsBrush(){
        return this.needsBrush;
    }
    get needsCuddle(){
        return this.needsCuddle;
    }
}

class Rabbit extends Pet {
    constructor(name, needsClean, needsCarrot){
        super(name);
        this._needsClean = needsClean;
        this._needsCarrot = needsCarrot;
    }
    get needsClean(){
        return this._needsClean;
    }
    get needsCarrot(){
        return this._needsCarrot;
    }
}