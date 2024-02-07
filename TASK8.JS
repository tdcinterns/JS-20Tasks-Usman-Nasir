let repeatStr = (str, num) => {
    let repeatedStr = "";
    if (num < 0)
    {
        return "";
    }
    else
    {
        for(let i = 0; i < num; i++)
        {
            repeatedStr = repeatedStr + str;
        }
    }
    return repeatedStr;
};
let result = repeatStr("Usman", 3);
console.log(result);