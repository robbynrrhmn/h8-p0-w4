function cariModus(arr) {
    var frekuensi = 0;
    var modus = 0;

    //untuk mencari angka yang sama (frekuensi)
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j] && i !== j) { //ketika nilai di index i dan index j sama, tapi indexnya tidak boleh sama supaya tidak berulang 
                frekuensi += 1; // jumlah frekunsi yang sama
                modus = i;
            }
        }
    }
    if (modus === 0) { //tidak ada angka yang sama 
        return -1;
    }
    var angka = 0; // jika ada modusnya , tapi angkanya sama semua 
    for (var k = 0; k < arr.length; k++) {
        angka += arr[k];
        if (angka / arr.length === arr[k]) {
            return -1;
        }
    }
    return arr[modus];
}



// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1