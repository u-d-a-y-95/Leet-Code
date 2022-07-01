const maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1])
    let count = 0
    let sum = 0
    for (let i = 0; i < boxTypes.length; i++) {
      const gap = truckSize - count
      if (gap >= boxTypes[i][0]) {
        count += boxTypes[i][0]
        sum += boxTypes[i][1] * boxTypes[i][0]
      } else {
        count += gap
        sum += boxTypes[i][1] * gap
      }
  
      if (count === truckSize) break
    }
    return sum
  };
  
  
  console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10))