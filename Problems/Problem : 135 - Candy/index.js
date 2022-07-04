var candy = function(ratings) {
    const leftV = Array(ratings.length).fill(1)
    const rightV = Array(ratings.length).fill(1)
    let sum = 0
    for(let i = 1; i<ratings.length;i++){
        if(ratings[i]>ratings[i-1]){
            leftV[i]= leftV[i-1] + 1
        }
    }
    for(let i = ratings.length-2; i>-1;i--){
        if(ratings[i]>ratings[i+1]){
            rightV[i]= rightV[i+1] +1
        }
    }
    for(let i = 0 ; i<ratings.length;i++){
        sum += Math.max(leftV[i],rightV[i])
    }
    return sum
};


console.log(candy([1,0,2])) // 5
console.log(candy([1,2,2])) // 4