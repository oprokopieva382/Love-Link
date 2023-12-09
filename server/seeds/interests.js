const interests = [
    "🐕‍🦺 Animal Rescue",
    "💉 Vaccine Rights",
    "⛪ Faith",
    "👨‍👩‍👧‍👦 Family",
    "🧑‍💼 Politics",
    "🧘‍♀️ Mental health Awareness",
];

const getInterests = () => {
    let interestsArr = [];
    for (let i = 0; i < 3; i++) {
        let newInterest = interests[Math.floor(Math.random() * interests.length)];
        if (!interestsArr.includes(newInterest)) {
            interestsArr.push(newInterest)
        }
    }
    return interestsArr;
}

module.exports = getInterests;