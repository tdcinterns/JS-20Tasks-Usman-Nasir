function findMostFrequentItem(arr) {
    let frequencyMap = {};
    arr.forEach((item) => {
        if (frequencyMap[item])
        {
            frequencyMap[item]++;
        }
        else
        {
            frequencyMap[item] = 1;
        }
    });

    let mostFrequentItem;
    let highFrequency = 0;

    for (let item in frequencyMap)
    {
        if (frequencyMap[item] > highFrequency)
        {
            mostFrequentItem = item;
            highFrequency = frequencyMap[item];
        }
    }
    return mostFrequentItem;
}

let inputArray = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let result = findMostFrequentItem(inputArray);
console.log(`Most frequent item: ${result}`);