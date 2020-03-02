//naive

function sumZeroNaive(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i],arr[j]];
            }
        }        
    }
}

//refactored

function sumZeroRef(arr){
    let left = 0;
    let right = arr.length - 1;
    //left < right  //rather than//  left <= right  | this is to ensure that it doesn't match 0 and 0 -- a false positive which doesn't follow the problem guidelines
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        }
        // ++  &  --  | these are increment/decrement checks each pair from left right checking if a number matches positive and negative sums to 0
        else if(sum > 0){
            right--;
        }
        else{
            left++;
        }
    }
}



//multi pointer challenge

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
        console.log(i,j)
    }
    console.log('The array has ' + arr.length + ' values in total.')
    //this ensures the right number of unique values of the array is returned as it originally will show the index which starts at 0
    return i + 1;
}




//further understanding

//naive code

function maxSubarraySum(arr, num) {
    if ( num > arr.length){
      return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i ++){
      temp = 0;
      for (let j = 0; j < num; j++){
        temp += arr[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
}
  
maxSubarraySum([2,6,9,2,1,8,5,6,3],3)


//refactored

function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      //Math.max alternative to if condition
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
  
maxSubarraySum([2,6,9,2,1,8,5,6,3],3)





function triggerEqualSum(){
    console.log(sumZeroRef([-4,-3,-1,0,2,3,6,10]))
}

function triggerCountValues(){
    console.log('The array has ' + countUniqueValues([1,2,2,5,7,7,99]) + ' unique values.')
}