const hobbies = [
  "📽️ Movie Buffs",
  "🗺️ History",
  "👒 Fashion and Style",
  "🐈‍⬛ Pet Lover",
  "🎭 Comedy/ Humor",
  "✂️ Crafting",
  "🎮 Gamer",
  "🏕️ Outdoor Adventures",
  "🎻 Music Lover",
  "🏋️‍♂️ Fitness/Wellness",
  "✈️ Traveling",
  "🥞 Foodies",
  "📖 Bookworms",
  "🫂 Volunteering",
  "💻 Tech/Innovation",
  "🏎️ Motorcycle or Car Enthusiasts",
  "📸 Photography",
  "💃 Dance/Performing Arts",
  "🚵‍♂️ Mountain Biking",
  "🏄‍♂️ Surfing",
  "🛶 Kayaking",
  "🚁 Drone Flying",
  "🏋️‍♀️ Fitness Workouts",
  "🎤 Karaoke Nights",
  "🛹 Skateboarding",
  "🚀 Space Exploration",
  "🌐 Learning New Languages",
  "🧘‍♂️ Yoga and Meditation",
];

const getHobbies = () => {
  let interestsArr = [];
  for (let i = 0; i < 3; i++) {
    let newInterest = hobbies[Math.floor(Math.random() * hobbies.length)];
    if (!interestsArr.includes(newInterest)) {
      interestsArr.push(newInterest);
    }
  }
  return interestsArr;
};

module.exports = getHobbies;
