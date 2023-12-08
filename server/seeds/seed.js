const db = require('../config/connection');
const { User } = require('../models');
const cleanDB = require('./cleanDB');

const seedData = require('./seed-data.json');

console.trace(seedData[0]);

const mappedData = seedData.map(({ gender, name, email, dob }) => ({
    firstName: name.first,
    lastName: name.last,
    email: email,
    dob: dob.date,
    password: "password123",
    gender: gender
}));

console.trace(mappedData[0]);

db.once('open', async () => {
  await cleanDB('User', 'users');

  await User.insertMany(mappedData);

  console.log('Users seeded!');
  process.exit(0);
});
