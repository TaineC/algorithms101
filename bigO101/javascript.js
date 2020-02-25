function add(n){
    let total = 0;
    for(let i=1; i<=n; i++){
        total += i;
    }
    return total;
}

function add2(n){
    return n * (n+1) / 2;
}

function test(){
    var t1 = performance.now()
    add(1000000000);
    var t2 = performance.now()
    console.log(`Time Elapsed: ${(t2-t1)/1000}seconds`)
}

function test2(){
    var t1 = performance.now()
    add2(1000000000);
    var t2 = performance.now()
    console.log(`Time Elapsed: ${(t2-t1)/1000}seconds`)
}

function counting(){
    let num = 20;
    console.log('going up')
    for (let i = 0; i < num; i++) {
        console.log(i)
    }
    console.log('reverse')
    for (let i = num - 1; i >= 0; i--) {
        console.log(i)
    }
    console.log('done')
}

function logAtLeast5(){
    let n = 10;
    for (let i = 1; i < Math.max(5,n); i++) {
        console.log(i)
    }
}

function double(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i])
    }
    return newArr;
}