
// this correct

var longestConsecutive = function(nums) {
    if(nums.length === 0 || nums.length === 1 ) return nums.length
    const newNums = [...new Set(nums)]
    newNums.sort((a,b)=>a-b)
    let count = longest = 1
    for(let i = 1 ;i<newNums.length;i++){
        if(newNums[i] === newNums[i-1] +1){
            count ++
        }else{
            count = 1
        }
        if(count>longest){
            longest = count
        }
    }
    return longest
};

// constrain : You must write an algorithm that runs in O(n) time.

var longestConsecutive = function(nums) {
    const positiveArray = []
    const negativeArray = []
    for(let i = 0 ;i<nums.length;i++){
        if(nums[i]<0){
            negativeArray[Math.abs(nums[i])] = 1
        }else{
            positiveArray[nums[i]] = 1
        }
        
    }
    let count = 0
    let longest = 0
    negativeArray.reverse()
    const newArray = [...negativeArray.slice(0,-1),...positiveArray]
    for(let i = 0 ;i<newArray.length;i++){
        if(newArray[i]===1){
            count ++
        }else{
            count = 0
        }
        if(count>longest){
            longest = count
        }
    }
    return longest
};

// it meets O(n) time complexity but not meet space complexity