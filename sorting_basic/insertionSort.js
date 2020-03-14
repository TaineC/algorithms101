function insertionSort(arr){
    var currentVal;
    for (let i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
    }
    return arr;
}