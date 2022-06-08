import {Animal} from 'animal.mjs';

class Dog extends Animal{
    constructor(name){
        super(name);
    }

    wagsTail() {return console.log("I AM SO HAPPY!");}
    
}


// ANIMAL PLAY
console.log( Animal.has );
console.log( Animal.has[0].getName() );

// INSTANCE PLAY
let peanut = new Dog('Pea nut');
// console.log( peanut.getName() );
// console.log( peanut.play() );
// console.log( peanut.play() );
// console.log( peanut.play() );
peanut.wagsTail();

