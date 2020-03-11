function power(n, e){
    if(e === 0){
        return 1;
    }
    return n * power(n, e - 1);
}

function factorial(num){
    if(num === 0){
        return 0;
    }
    return num * factorial(num - 1);
}

function productOfArray(arr){
    if(arr.length === 0){
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

function recursiveRange(num){
    if(num === 0){
        return 0;
    }
    return num + recursiveRange(num - 1);
}

function fib(n){
    if(n <= 2){
        return 1;
    }
    //slight misunderstanding of how recursion works
    return fib(n-1) + fib(n-2);
}

// function click(){
//     console.log(power(4, 2));
// }
// power(2,2)