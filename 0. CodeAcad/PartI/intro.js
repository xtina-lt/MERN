/*  KELVIN 
 * WEATHER
 */
function kelvin(){
    // todays temp in kelvin
    const kelvin = 283;
    // celsius is 273 degrees less than kelvin
    let celsius = kelvin - 273;
    // round down from decimal
    let fahrenheight = Math.floor(celsius * (9 / 5) * 32);

    console.log(`The temperature in ${kelvin} deggrees Kelvin is: \nCelsius: ${celsius} \nFahrenheight: ${fahrenheight}`);
}


/* DOG
 * YEARS
 */
const dogFun = function(){
    let n = "peanut";
    const humanYears = 8;
    let dogYears = 10.5 * 2 + (4 * (humanYears - 2));

    console.log(`My name is ${n.toUpperCase()}. I am ${humanYears} in human years. Which is ${dogYears} in dog years.`);
}


function fizzBuzz(){
    // for (var i = 1; i <= 15; i++) {
    //     if (i % 15 == 0) console.log("FizzBuzz");
    //     else if (i % 3 == 0) console.log("Fizz");
    //     else if (i % 5 == 0) console.log("Buzz");
    //     else console.log(i);
    // }
    for (var i = 1; i <= 15; i++) console.log((i % 15 == 0) ? "FizzBuzz" : (i % 3 == 0) ? "Fizz" : (i % 5 == 0) ? "Buzz" : i);
}



/* MAGIC 8
 * BALL
 */
function magic8(){
    let name = "Peanut";
    let question = "When's dinner?";
    let ran = Math.ceil(Math.random() * 7);

    console.log((name) ? `Hello, ${name}.` : "Hello");
    console.log("To the question: " + question);
    console.log("The magic 8 ball spits: " + ran);

    let quote;
    switch (ran) {
        case 0: quote = 'It is CERTAIN!'; break;
        case 1: quote = 'It is decidedly so.'; break;
        case 2: quote = 'Reply hazy, try again.'; break;
        case 3: quote = 'Cannot predict now...'; break;
        case 4: quote = 'Do not count on it.'; break;
        case 5: quote = 'My sources say,"NO".'; break;
        case 6: quote = 'Outlook not so good...'; break;
        case 7: quote = 'Signs point to yes'; break;
        default: quote = 'Unavailable'; break;
    }

    console.log(quote);
}



/* RACE
 * DAY
 */
function raceDay(){
    let raceNumber = Math.ceil(Math.random() * 1000);
    //early reg adults recieve race # greater or equal to 1000
    let earlyReg = raceNumber >= 1000;
    let age = 19;

    console.log(earlyReg);
    console.log(raceNumber);

    //control flow: runner is adult and registered early
    if (age > 18 && earlyReg) {
        raceNumber += 1000; // add 1000 to number
        console.log(`Race @ 9:30. Race #: ${raceNumber}`);
    } else if (age > 18 && !earlyReg) {
        console.log(`Race @ 11:00. Race # ${raceNumber}`);
    } else if (age < 18) {
        console.log(`Race @ 12:30. Race #: ${raceNumber}`);
    } else {
        console.log(`See registration desk. Race #: ${raceNumber}`);
    }
}

// CONCISE FUNCTIONS
const fx = (x,y) => x.toUpperCase() + y.toUpperCase();


// kelvin();
// dogFun();
// fizzBuzz();
// magic8();
// raceDay();
console.log( fx("xtina ", "codes!") );