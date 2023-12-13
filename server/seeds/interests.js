const interests = [
  "🐕‍🦺 Animal Rescue",
  "💉 Vaccine Rights",
  "⛪ Faith",
  "👨‍👩‍👧‍👦 Family",
  "🧑‍💼 Politics",
  "🧘‍♀️ Mental health Awareness",
  "🏀 Sports Fans",
  "📚 Literature and Writing",
  "🎓 Education Advocacy",
  "🚗 Automobile Enthusiasts",
  "🌿 Environmental Sustainability",
  "📰 Journalism and Media",
  "🎤 Public Speaking",
  "🍷 Wine Tasting",
  "🔬 Science Fiction",
  "🌻 Gardening Enthusiasts",
  "🎧 Podcast Enthusiasts",
  "🕊️ Peace and Harmony",
  "🛠️ DIY Home Improvement",
  "🪷 Spiritual",
];

const getInterests = () => {
  let interestsArr = [];
  for (let i = 0; i < 3; i++) {
    let newInterest = interests[Math.floor(Math.random() * interests.length)];
    if (!interestsArr.includes(newInterest)) {
      interestsArr.push(newInterest);
    }
  }
  return interestsArr;
};

module.exports = getInterests;
