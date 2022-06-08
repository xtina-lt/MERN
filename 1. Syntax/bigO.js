let smallest = (arr) => {
    let min = arr[0];
    arr.forEach( e => { if (e < min) min = e; } );

    console.log(min);
}

// smallest( [2, 5, 6, 12, 14, 28, 37, 41, 44, 45] );

isPrime = (e) => {
    for( let i=2; i<e; i++ ) return ( e % i === 0 ) ? false : true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime

while( primeCount < 1e4 ) {
    if( isPrime(num) ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);
// 104729
// took 1559.7347999960184


