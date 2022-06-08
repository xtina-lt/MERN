const { log } = require("console");

const freezeArr = () => {
    // const arr = [1,2,3,4];
    const arr = Object.freeze([1, 2, 3, 4]);
    // arr.push(300); // Uncaught TypeError TypeError: Cannot add property 4, object is not extensible

    console.log(arr);
}

const immutable = () => {
        // IMMUATABLE
    const groceryList = Object.freeze([
        { "item": "carrots", "haveIngredient": false },
        { "item": "onions", "haveIngredient": true },
        { "item": "celery", "haveIngredient": false },
        { "item": "cremini mushrooms", "haveIngredient": false },
        { "item": "butter", "haveIngredient": true }
    ]);

    // CAN: make a copy
    const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ].sort();
    // OR
    // const needThyme = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] );
    console.log( needThyme );

    // SORT OBJECT BY VALUE
    const sortedGroceries = [...groceryList].sort( (a, b) => (a.item > b.item) ? 1 : -1 );

}

const odd = () => {
    const values = [1,2,3,4,5];
    const oddCubes = values.filter(e => e % 2 !== 0).map(e => e**3);
    console.log(oddCubes);
}

const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);


// const bList = pokemon.filter(e => e.name[0] ==='B')
// for (i of bList) console.log(i.name)

const bList = pokemon.filter(e => e.name[0] ==='B').map(e=>e.name);
const idBy3 = pokemon.filter(e => e.id % 3 === 0).map(e=>e.name);
const fire = pokemon.filter(e => e.types == "fire").map(e=>e.name);
const types = pokemon.filter(e=>e.types.length > 1).map(e=>e.name);
// const poison = pokemon.filter(e=>e.types.includes("poison")).map(e=>e.name);
const poison = pokemon.filter(e=>e.types == "poison").map(e=>e.name);
const flying = pokemon.filter(e=>e.types[1]==="flying").map(e=>e.types[0]);
const names = pokemon.map(e=>e.name);
const idMore = pokemon.filter(e=>e.id > 99).map(e=>e.name);
// reduce
const normal = pokemon.filter(e=>e.types.includes("normal")).map(e=>e.name);
const count = normal.length;
console.log(count);





