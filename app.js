// ================
// ALGORITHMSSSSS
// ================

// ================
// Finding the smallest number in array
// ================


// if 8 < 3 || 8 < 10 console.log (8)
    // if 3 < 8 || 3 < 10 console.log(3)
    // if 10 < 3 || 10 < 8 console.log(10)

var array = [1, 30, 10];

for (var i = 0; i < array.length; i++) {
    //console.log(array[0], array[1], array[2])

    var a = array[0];
    var b = array[1];
    var c = array[2];
    var smallestNumber;


    if (a < b) {
        smallestNumber = a
    } else {
        smallestNumber = b
    }
    if (smallestNumber < c) {
        console.log(smallestNumber)
    } else {
        smallestNumber = c;
        console.log(smallestNumber)
    }

}

// ================
// ================

