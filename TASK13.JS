let newArr = ((arr) => {
    return arr.flat(Infinity);
});
let Subarr = [1, [2, 3, [4, 5, 6]]];
let result = newArr(Subarr);
console.log(result);