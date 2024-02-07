let obj = {
    Fname: "Usman",
    Lname: "Nisar",
    Age: 20
};

let arr = Object.values(obj);
console.log(arr);

let arr2 = [['Fname', 'Usman'], ['Lname', 'Nisar'], ['Age', '20']];
let obj2 = Object.fromEntries(arr2);
console.log(obj2);