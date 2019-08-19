function ubahHuruf(kata) {
    var kamus = 'abcdefghijklmnopqrstuvwxyz';
    var array = [];
    for (var i = 0; i < kata.length; i++) {
        var posisi = kamus.indexOf(kata[i])
        array.push(kamus[posisi + 1]);
    }
    return array.join('');
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu