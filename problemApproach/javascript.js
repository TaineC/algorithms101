//write a function which takes in a string and returns counts of each character of the string

//e.g. charCount("hello") -- output: {h:1,e:1,l:2,o:1}
//     charCount("Hello hi") -- output: {H:1,h:1 or h:2, e:1,i:1,l:2,o:1}
//     take into account various different types of characters -- !@#$%^&*()1234567890

//user input
//charCount("") -- output: e.g. --> | null | {} | error |

// function charCount(str){

    //create object that returns at end of function
    //loop through each character
    //if character matches current character already in object add 1 to that specific character count
    //if character isnt currently in onject add that character to object and add 1 to character count
    //if any other character is something else return nothing -- make no changes to object

    //return object

// }

//simplified version -- first step

function charCount(str){
    //create object that returns at end of function
    var result = {};
    //loop through each character
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        //if character matches current character already in object add 1 to that specific character count
        if(result[char] > 0){
            result[char]++;
        }
        //if character isnt currently in onject add that character to object and add 1 to character count
        else{
            result[char] = 1;
        }
    }
    return result;
}

//final solution

function charCountFinal(str){
    var result = {};
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char) > 0){
            if(result[char] > 0){
                result[char]++;
            }
            else{
                result[char] = 1;
            }
        }
    }
    return result;
}

//refactored

function charCountRef(str){
    var result = {};
    for (var char of str){
        char = char.toLowerCase();
        if(isAlphaNumeric(char)){
            result[char] = ++result[char] || 1;
        }
    }
    return result;
}

//optimisation -- character code > regular expression

function isAlphaNumeric(char){
    var code = char.charCodeAt(0)
    if(!(code > 47 && code < 58) && 
       !(code > 64 && code < 91) &&
       !(code > 96 && code < 123)){
           return false;
       }
    return true;
}

charCodeAt(0)