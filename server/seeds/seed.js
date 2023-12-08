const db = require('../config/connection');
const { User } = require('../models');
const cleanDB = require('./cleanDB');

const seedData = require('./seed-data.json');

const getInterests = require('./interests');

// console.trace(seedData[0]);

const mappedData = seedData.map(({ gender, name, email, dob }) => ({
    firstName: name.first,
    lastName: name.last,
    email: email,
    dob: dob.date,
    password: "password123",
    gender: gender,
    interests: getInterests(),
}));

// console.trace(mappedData[0]);
// console.trace(mappedData[2]);
// console.trace(mappedData[4]);
// console.trace(mappedData[5]);


db.once('open', async () => {
  await cleanDB('User', 'users');

  const usersData = await User.insertMany(mappedData);

  for (let i=0; i<usersData.length; i++) {
    await User.findOneAndUpdate(
      { _id: usersData[i]._id.toString() },
      {
        $addToSet: { interests: usersData[i].interests },
      },
      {
        new: true,
        runValidators: true,
      }
    );
  }

  // console.log(usersData[0]._id.toString());

  console.log('Users seeded!');
  process.exit(0);
});
