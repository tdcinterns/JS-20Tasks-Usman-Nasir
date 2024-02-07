let removeElm = (array) => {
    array.splice(1,1);
    return array
};

let arr = [1,2,3,4,5,6,7,8,9,10];
let result = removeElm(arr);
console.log(result);