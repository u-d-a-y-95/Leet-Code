var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);
  let bigH = 0;
  for (let i = 0; i <= horizontalCuts.length; i++) {
    const cut =
      i === 0
        ? horizontalCuts[i]
        : i == horizontalCuts.length
        ? h - horizontalCuts[i - 1]
        : horizontalCuts[i] - horizontalCuts[i - 1];
    if (cut > bigH) {
      bigH = cut;
    }
  }
  let bigW = 0;
  for (let i = 0; i <= verticalCuts.length; i++) {
    const cut =
      i === 0
        ? verticalCuts[i]
        : i == verticalCuts.length
        ? w - verticalCuts[i - 1]
        : verticalCuts[i] - verticalCuts[i - 1];
    if (cut > bigW) {
      bigW = cut;
    }
  }
  return Number(BigInt(bigH) * BigInt(bigW) % 1000000007n);
};

console.log(maxArea(5, 4, [1, 2, 4], [1, 3])); // 4
console.log(maxArea(5, 4, [3, 1], [1])); // 6
console.log(maxArea(5, 4, [3], [3])); // 9
console.log(maxArea(1000000000, 1000000000, [2], [2])); // 81

