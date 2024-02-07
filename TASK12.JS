function findLongestWordLength(str) {
    let words = str.split(" ");
    let maxLength = Math.max(...words.map(word => word.length));
    return maxLength;
}

let sentence = "If at first you don't Succeed try try again.";
let result = findLongestWordLength(sentence);

console.log(`Length: ${result}`);