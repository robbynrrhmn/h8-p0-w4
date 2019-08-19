function digitPerkalianMinimum(angka) {
    var array = [];
    for (var i = 0; i <= angka; i++) {
        for (var j = 0; j <= angka; j++) {
            if (i * j == angka) {
                array.push((i + '' + j).length);
            }
        }
    }
    var length = array[0];
    for (var k = 0; k < array.length; k += 1) {
        if (array[k] < length) {
            length = array[k];
        }
    }
    return length;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2