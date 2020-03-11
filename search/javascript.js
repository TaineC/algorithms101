// var names = ['Jim','Bob','James','Mike'];

function linearSearch(arr,val){
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}

function binarySearch(arr, el){
    let start = 0;
    let end = arr.length - 1; 
    let middle = Math.floor((start+end) / 2);
    while (arr[middle] !== el && start <= end) {
        console.log(start, middle, end)
        if(el < arr[middle]){
            end = middle - 1;
        }
        else{
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === el){
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}


function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol")

// function linearSearch(arr, val){
//     for(var i = 0; i < arr.length; i++){
// if(arr[i] === val) return i;
//     }
//     return -1;
// }