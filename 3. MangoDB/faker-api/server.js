/***********
*  EXPRESS *
***********/
const express = require("express");
const app = express();
const port = 8000;
/***********
*   FAKER  *
***********/
const faker = require("faker");



/***************************
*  CREATE OBJECTS METHODS  *
***************************/
// PARENT
const createParent = () => (
    {
        id: faker.datatype.uuid(),
        name : faker.name.lastName() + " Wildlife Refuge",
        address : {
            street : faker.address.streetAddress(),
            city : faker.address.cityName(),
            state : faker.address.state(),
            zipcode: faker.address.zipCode(),
        }
    }
)
// CHILD
const createChild = () => (
    {
        id: faker.datatype.uuid(),
        name : faker.name.firstName(),
        type : faker.animal.type()
    }
)

/***************************
*   GET METHOD RESPONSES   *
***************************/
// GET parent
app.get("/api/parent", (req, res) => {
    const e = createParent();
    res.json(e);
});

// GET child
app.get("/api/child", (req, res) => {
    res.json( createChild() );
});

app.get("/api/both", (req, res) => {
    const rand = faker.datatype.number({max:10})
    const obj = {
        Sanctuary: createParent(),
        Animals : [...Array(rand)].map(e=>createChild())
    };
    res.json(obj);
});

/***************
*  EXPRESS LOG *
***************/
app.listen(port, () => console.log(`winner on port ${port}`));