class Animal {
    static full = 100;
    static has = [];

    constructor(name){
        this._name = Animal.title(name);
        this._energy = Animal.full;
        Animal.has.push(this);
    }

    // methods
    static title(e){
        let split = e.split('');
        for (let i=0; i < split.length; i++){
            if (i===0) split[i] = split[i].toUpperCase();
            if (split[i] === " ") split[i+1] = split[i+1].toUpperCase(); 
        }

        return split.join('');
    }

    sleep() {return this._energy = Animal.full; }
    eat() {return (this._energy < 51) ? this._energy += 50 : this._energy = Animal.full; }
    play() {return (this._energy >= 50) ?  this._energy -= 50 : console.log('Don\'t have enough energy to play😥');}

    //accessors
    getName(){ return this._name; }
    getEnergy(){ return this._energy; }

    // mutators
    setName(e){ return this._name = e; }
    setEnergy(e){ return this._energy = e; }
    
}

export {Animal}