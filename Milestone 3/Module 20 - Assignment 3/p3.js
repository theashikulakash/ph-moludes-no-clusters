/*function signature/sample */
function finalScore (omr) {
    if (typeof omr !== 'object' || omr === null || Array.isArray(omr)) // must be an object not null or array
        {
        return "Invalid";
    }
    const { right, wrong, skip } = omr;

    if (right + wrong + skip !== 100) // challenge sum of 3 must be = 100
        {
        return "Invalid";
    }
    const totalScore = (right * 1) - (wrong * 0.5); // Scoring Rules right=1 wrong=0.5
    return Math.round(totalScore);// round to not show any digit after dot.
}
console.log(finalScore({"right":67,"wrong":23,"skip":10}));
console.log(finalScore({"right":80,"wrong":25,"skip":0}));
console.log(finalScore({"right":30,"wrong":30,"skip":40}));


