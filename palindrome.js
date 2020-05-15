// palindrome
// a palindrome is a word, phrase, or sequence that reads
//  the same backward as forward e.g
// madam or nurses run

const palindrome = str => {
    // turn the string to lowercase
    str = str.toLowerCase()
    // reverse input string and return the ressult of the 
    // comparison
    return str === str.split("").resever().join('');
}


function palindrome2(str) {
    let reverse = str.split("").reverse("").join("");

    if(reverse === str){
        return  true;
    }
    else {return false;}
}