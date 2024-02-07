let truthyValues = ((arr) => {
    return arr.filter(Boolean);
});

let falsyValues = [false, null, 0, "", undefined, NaN, 512, "Hello", true];

console.log(truthyValues(falsyValues));