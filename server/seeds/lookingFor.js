const looking = [
    "Male",
    "Female",
    "Nonbinary"
];

const getLooking = () => {
    return looking[Math.floor(Math.random() * looking.length)]
};

module.exports = getLooking;