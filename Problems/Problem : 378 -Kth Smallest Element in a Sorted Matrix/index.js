const findThePos = (arr, value) => {
  let lower = 0;
  let higher = arr.length - 1;
  if (arr[lower] >= value) {
    return lower;
  }
  if (arr[higher] <= value) {
    return higher + 1;
  }
  while (higher - lower > 0) {
    let mid = Math.floor((lower + higher) / 2);
    if (arr[mid] < value) {
      lower = mid + 1;
    } else {
      higher = mid;
    }
  }
  return lower;
};

var kthSmallest = function (matrix, k) {
  const arr = matrix.flat();
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      newArr.push(arr[i]);
    } else {
      const pos = findThePos(newArr, arr[i]);
      newArr.splice(pos, 0, arr[i]);
    }
  }
  return newArr[k-1];
};

console.log(
  kthSmallest(
    [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ],
    8
  )
);


