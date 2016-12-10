var friendArray = [
	{
    name: "Christina",
    image: "A black and white picture of me in a tree",
    scores: ["2", "3", "5", "4", "3", "1", "1", "2", "4", "5"]
    }
];

// var friendScores = friendArray.scores.split(',').map(function(item) {
//     return parseInt(item, 10);
// });

console.log(friendArray);
console.log(friendArray.scores[0]);


// export the array
module.exports = friendArray;