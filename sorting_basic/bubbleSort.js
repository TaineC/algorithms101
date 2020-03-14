
function bubbleSort(arr){
    for (let i = arr.length; i > 0; i--) {
        console.log(arr);
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

//ES2015
function bubbleSort15(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

//optimized bubble sort with no swap
function bubbleSortOpt(arr){
    var noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            console.log(arr);
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps){
            break;
        }  
    }
    return arr;
}