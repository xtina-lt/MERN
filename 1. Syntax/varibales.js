let arr = [1,2,3]
// console.log(arr[arr.length-1]);


const groceryList = Object.freeze([
    { "item": "carrots", "haveIngredient": false },
    { "item": "onions", "haveIngredient": true },
    { "item": "celery", "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter", "haveIngredient": true }
]);

// console.log( groceryList );

const obj = {
    name : "test",
    getName() {return this.name;}
}

console.log(obj.getName());