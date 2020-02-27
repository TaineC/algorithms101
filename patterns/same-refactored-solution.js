function same_ref(arr1, arr2){
    if(arr1.length !== arr2.length){
        console.log(false)
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            console.log(false)
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            console.log(false)
            return false
        }
    }
    console.log(true)
    return true
}

