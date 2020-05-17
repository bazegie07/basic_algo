

function reverseString(str){
    var strArr = str.split("")  //split will do is to make the the string in array format
    var reverseStrArray = strArr.reverse(); // reverse will reverse the array 
    var reverseString = reverseStrArray.join(""); // this wil covert the array to a string format
    return reverseString;



    // or you can do it like this shortcut
    return str.split("").reverse().join("");
}












