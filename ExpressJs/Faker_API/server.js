const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const PORT = 5000;


const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};
    
const newFakeProduct = createProduct();
console.log(newFakeProduct);



app.get('/api/users/new', (req, res) => {
  const newUser = createProduct();
  res.json(newUser);
});

app.get('/api/companies/new', (req, res) => {
  const newCompany = createProduct();
  res.json(newCompany);
});

app.get('/api/user/company', (req, res) => {
  const newUser = createProduct();
  res.json({ user: newUser });
});


// this needs to be below the other code blocks
app.listen( PORT, () => console.log(`Listening on port: ${PORT}`) );

