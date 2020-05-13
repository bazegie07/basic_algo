function largestOfFour(arr){
    var maxes =[];

    for(var i = 0; i < arr.length; i++){
        var tempMax = arr[i][0];
        for(var j = 0; j < arr[i].length; j++){
            var currentElement = arr[i][j];
            if (currentElement >= tempMax){
                tempMax = currentElement;
            }
        }
        maxes.push(tempMax);
    }
    return maxes;
}
