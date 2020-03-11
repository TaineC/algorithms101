function reverse(str){
    // console.log(str.length)
    if(str === ""){
        return "";
    }
    return reverse(str.substr(1)) + str.charAt(0);
}

function reverse(str){
    if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

function capitalizeWords(arr){
    if(arr.length === 1){
        return [arr[0].toUpperCase()];
    }
    let res = capitalizeWords(arr.slice(0, -1));
    res.push(arr.slice(arr.length-1)[0].toUpperCase())
    return res;
}

capitalizeWords(['hello','how','are','you'])

