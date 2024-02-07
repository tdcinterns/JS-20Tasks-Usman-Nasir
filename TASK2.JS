const sum = (num1, num2) =>
{
    if (num2 !== undefined)
    {
        return num1 + num2;
    }
    else
    {
        return (secondNum) => num1 + secondNum;
    }
};
console.log(sum(2, 3));
console.log(sum(2)(3));