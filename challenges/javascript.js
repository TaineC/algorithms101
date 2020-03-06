function sameFrequency(num1,num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();

    let countNum1 = {};
    let countNum2 = {};

    if(strNum1.length !== strNum2.length){
        return false;
    }
    for (let i = 0; i < strNum1.length; i++) {
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
    }
    for (let j = 0; j < strNum2.length; j++) {
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
    }

    console.log(countNum1)
    console.log(countNum2)

    for(let key in countNum1){
        if(countNum1[key] !== countNum2[key]){
            return false
        }
    }
    return true;
}

//frequency counter

function areThereDuplicates(){
    let collection = {}
    for(let val in arguments){
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
        console.log(val)
        console.log(collection)
    }
    for(let key in collection){
        if(collection[key] > 1) return true
        console.log(key)
    }
    console.log(collection)
    return false;
}

//multiple pointers

function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }

//O(n log n) - time notation - an algorithm with worst case time complexity that scales well -- almost linear
//O(1) - space notation

function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}

function trigger(){
    console.log(sameFrequency(121345,211435))
}

function trigger2(){
    console.log(areThereDuplicates(1,2,4,5,6,7,8,9,4,5,7,85,3))
}