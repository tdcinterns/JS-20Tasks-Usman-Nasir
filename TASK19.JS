let reverseNum = (nums) => {
    return String(nums).split('').reverse().join('');
}

let num = 12345;
let result = reverseNum(num);
console.log(result);