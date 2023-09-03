
const ROMAN_MAP = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
};

var romanToInt = function(s) {
    let sum = 0;
    for (let index = 0; index < s.length; index++) {
        let char = s[index];
        let nextChar = s[index + 1];

        let value = ROMAN_MAP[char];
        let nextValue = ROMAN_MAP[nextChar]
        if (nextValue !== undefined) {
            if (nextValue > value) {
                sum -= value;
                continue;
            }
        }
        sum += value;
    }

    return sum;
};