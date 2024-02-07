let findIndex = (arr, value) => {
    return arr.indexOf(value);
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let value = 5;
let result = findIndex(arr, value);

console.log(`Value ${value}: is on Index ${result}`);