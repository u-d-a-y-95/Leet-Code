var romanToInt = function (s) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const subObj = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (["I", "X", "C"].includes(s[i]) && i !== s.length - 1) {
      if (subObj[s[i] + s[i + 1]]) {
        sum += subObj[s[i] + s[i + 1]];
        i++
        continue
      } 
    }
    sum += obj[s[i]]
  }
  return sum
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
