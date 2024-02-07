let Check = (array) => {
    if(array.includes(5))
    {
        return true;
    }
    else
    {
        return false;
    }
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = Check(arr);
console.log(result);