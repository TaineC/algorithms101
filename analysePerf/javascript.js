let user = {
    name: 'Jim',
    age: 24,
    faveColour: 'red',
}

//testing various functions for checking object -- console checker

function checkUser(){
    console.log(user.hasOwnProperty("name"));
    console.log(Object.keys(user))
    console.log(Object.values(user))
    console.log(Object.entries(user))
}

//reference -- sort code

function quickSort(arr){

    if(arr.length <= 1){
        return arr;
    }

    let [smaller, equal, larger] = [[], [], []]
    let pivot = arr[arr.length-1]

    for(var num of arr){
        if(num < pivot){
            smaller.push(num)
        } 
        else if(num === pivot){
            equal.push(num)
        }
        else{
            larger.push(num)
        }
    }
    return (quickSort(smaller).concat(equal).concat(quickSort(larger)))
}