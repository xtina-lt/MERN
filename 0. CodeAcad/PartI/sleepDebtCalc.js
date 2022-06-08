const getSleepHours = (e) => {
    switch (e) {
        case 'monday' : return 8; break;
        case 'tuesday' : return 7; break;
        case 'wednesday' : return 6; break;
        case 'thursday' : return 9; break;
        case 'friday' : return 10; break;
        case 'saturday' : return 10; break;
        case 'sunday' : return 6; break;
        default: console.log("invalid, gave 9 hours"); return 9; break;
    }
}

const getIdeal = () => 7 * 7;

const getActual = () => {
    const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    let count=0;
    
    days.forEach(v => count += getSleepHours(v) );

    return count;
}

const main = () => {
    const ideal = getIdeal();
    const actual = getActual();

    const eval = actual - ideal;

    console.log( "Ideal hours: " + ideal );
    console.log( "Hours got: " + actual );
    console.log( "Eval: " + eval );
    console.log( (ideal === actual) ? "Got exact!".toUpperCase() : (ideal > actual) ? `Got less than ideal by ${Math.abs(eval)} hours.`.toUpperCase() : `Got more than ideal by ${eval} hours.`.toUpperCase() ); 

}

main();