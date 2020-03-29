// Basic Algorithm Scripting: Convert Celsius to Fahrenheit
// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.


function convertToF(celsius) {
  let fahrenheit;
  fahrenheit = (celsius * (9/5)) + 32
  return fahrenheit;
}

converttof(30);







// start    problem                      Reverse a string                    //

// split() ->	 TURN A STRING INTO AN ARRAY AND TAKES IN A PARAMETER AS A SEPARATOR.
// 		WE WANT EACH CHARACTER TO BE ITS OWN ARRAY VALUE WE GOING TO SET THE PARAMETER TO ' '.

	function reverseString(str) {
	    const strArray = str.split('');
	}

// reverse() ->	  WE CAN USE PROTOTYPE METHOD reverse() WHICH WILL JUST REVERSE THE ARRAY

// AND LETS NOT FORGET TO PUT console.log() at the bottom of the function.

function reverseString(str) {
    const strArray = str.split('');
    strArray.reverse();
    console.log(strArray);
}

reverseString('Hello Medium');
// Output:
[ 'm', 'u', 'i', 'd', 'e', 'M', ' ', 'o', 'l', 'l', 'e', 'H' ]


// Now GOT THE ARRAY IN REVERSED ORDER WE CAN JUST TURN IT BACK REGULAR STRING
//WE CAN DO THIS BY USING join()
// joing() -> which join the elements of an array  into a string and returns a string
// WE CAN ALSO SPECIFY SEPARATOR LIKE WHAT WE DID IN split()


function reverseString(str) {
    const strArray = str.split('');
    strArray.reverse();
    return strArray.join('');
    }
    reverseString('hello');
  // Output: muideM olleH

// WE CAN EVEN CLEAN IT WE DONT REALLY NEED THE strArray
// WE CAN DO IT LIKE THIS.

function reverseString(str) {
    return str.split('').reverse().join('');
    }
reverseString('Hello Medium');
  // Output: muideM olleH

// WE CAN USE ALSO FOR LOOP


function reverseString(str) {
    let revString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        revString += str[i];
    }

    return revString;

}
reverseString('Hello Medium');
  // Output: muideM olleH