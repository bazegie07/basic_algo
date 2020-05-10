//  return the longest word

function findLongestWord(str){

    var words = str.split(" ");
    var longest = "";

    for(var word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
    // if you want the length of the word 
    // just return longest.length
    // and it will give you the length of the word
}