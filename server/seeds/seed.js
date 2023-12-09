const db = require('../config/connection');
const { User } = require('../models');
const cleanDB = require('./cleanDB');

const seedData = require('./seed-data.json');

const getInterests = require('./interests');

// console.trace(seedData[0]);

const mappedData = seedData.map(({ gender, name, email, dob, picture }) => ({
    firstName: name.first,
    lastName: name.last,
    email: email,
    dob: dob.date,
    password: "password123",
    gender: gender,
    interests: getInterests(),
    image: picture.large
}));

db.once('open', async () => {
  await cleanDB('User', 'users');

  
  var obj = { data: mappedData };

  var json = JSON.stringify(obj);

  var fs = require('fs');
  fs.writeFile('myjsonfile.json', json, 'utf-8', () => {});

  const usersData = await User.insertMany(mappedData);

  for (let i=0; i<usersData.length; i++) {
    await User.findOneAndUpdate(
      { _id: usersData[i]._id.toString() },
      {
        $addToSet: { interests: usersData[i].interests },
        $set: 
        {
          image: usersData[i].image
        }
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
