let squareList = (arr) => {
    return arr
    .filter(num => Number.isInteger(num) && num > 0)
    .map(num => num * num);
}

let realNumbers = [-3, 4.8, 5, 3, -3.2];
let result = squareList(realNumbers);
console.log(result);