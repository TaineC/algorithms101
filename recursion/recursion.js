function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num-1)
}

//factorial -- iterative

function factorial1(num){
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}

//factorial -- recursive

function factorial2(num){
    if(num === 1) return 1;
    return num * factorial2(num-1);
}


//helper method recursion

function collectOddValues(arr){
    
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])

//same process without helper method

function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])






function recursion(){
    console.log(sumRange(8))
}

function iterative(){
    console.log(factorial1(4));
}

function recursive(){
    console.log(factorial2(4))
}
