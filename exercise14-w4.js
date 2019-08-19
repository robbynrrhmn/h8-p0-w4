function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    if (arrPenumpang.length === 0) {
        return [];
    }
    var result = [];
    var jarak1 = 0;
    var jarak2 = 0;
    for (var i = 0; i < arrPenumpang.length; i++) {
        var object = {};
        for (var j = 0; j < rute.length; j++) {
            if (rute[j] === arrPenumpang[i][1]) {
                jarak1 = j;
            } else if (rute[j] === arrPenumpang[i][2]) {
                jarak2 = j;
            }
        }
        object.penumpang = arrPenumpang[i][0];
        object.naikDari = arrPenumpang[i][1];
        object.tujuan = arrPenumpang[i][2];
        object.bayar = (Math.abs(jarak1 - jarak2)) * 2000;
        result.push(object);
    }
    return result;
}

//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]