const isPalindrome = (number) => {
  return String(number).split("").reverse().join("") === String(number);
};

console.log(isPalindrome(121));
