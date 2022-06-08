const intro = () => {
    const person = {
        firstName: 'Bob',
        lastName: 'Marley',
        email: 'bob@marley.com',
        password: 'sekureP@ssw0rd9',
        username: 'barley',
        addresses: [
            {
                address: '1600 Pennsylvania Avenue',
                city: 'Washington, D.C.',
                zipcode: '20500',
            },
            {
                address: '221B Baker St.',
                city: 'London',
                zipcode: 'WC2N 5DU',
            }
        ],
        createdAt: 1543945177623
    }

    const obj = {
        firstName: 'Bob',
        lastName: 'Marley',
        email: 'bob@marley.com',
        password: 'sekureP@ssw0rd9',
        username: 'barley',
        addresses: [
            {
                address: '1600 Pennsylvania Avenue',
                city: 'Washington, D.C.',
                zipcode: '20500',
            },
            {
                address: '221B Baker St.',
                city: 'London',
                zipcode: 'WC2N 5DU',
            }
        ],
        createdAt: 1543945177623,
        stack: ['python', 'mern']
    }

    const [first] = obj.stack;
    const {createdAt, ...others} = obj;
    console.log(others);
    // console.log(first);
    // const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
    // const { email } = person;
    // let [firstAnimal, secondAnimal, ...otherAnimals] = animals;
    // let [f, ...allOthers] = animals;
    // let { ...personCopy } = person;
    // const { firstName, lastName, ...attributes } = person;
    // const { addresses: [whiteHouse, sherlock] } = person;
    // const { addresses: [, , , , { city: london }] } = person;
}
intro();

const p1 = () => {
    const cars = ['Tesla', 'Mercedes', 'Honda']
    const [randomCar] = cars
    const [, otherRandomCar] = cars
    //Predict the output
    console.log(randomCar) // Tesla
    console.log(otherRandomCar) // Mercedes
}
// p1();

const p2 = () => {
    const employee = {
        name: 'Elon',
        age: 47,
        company: 'Tesla'
    }
    const { name: otherName } = employee;
    //Predict the output
    // console.log(name); // Not defined X
    console.log(otherName); // Elon
}
// p2();

const p3 = () => {
    const person = {
        name: 'Phil Smith',
        age: 47,
        height: '6 feet'
    }
    const password = '12345';
    const { password: hashedPassword } = person;
    //Predict the output
    console.log(password); // 12345
    console.log(hashedPassword); // undefined
}
// p3();

const p4 = () => {
    const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
    const [, first] = numbers;
    const [, , , second] = numbers;
    const [, , , , , , , , third] = numbers;
    //Predict the output
    console.log(first == second); // 2 vs 5 === false
    console.log(first == third); // 2 vs 2 === true
}
// p4()