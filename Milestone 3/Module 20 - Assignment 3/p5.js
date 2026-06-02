/*function signature/sample */
function  analyzeText(str) {
    if (typeof str !== 'string' || str.length <= 0) // cahllenge  must be a string not a null steing
        {
        return "Invalid";
    }
    const words = str.split(" ");
    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    const tokenCount = str.split(" ").join("").length;
    return {
        longwords: longestWord,
        token: tokenCount
    };
}
// console.log(analyzeText("I am a little honest person"));
// console.log(analyzeText(12345));
// console.log(analyzeText("Keep coding keep shining"));
// console.log(analyzeText(""));