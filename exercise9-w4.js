function checkAB(str) {
    var kata = str.split('');
    for (var i = 0; i < kata.length; i++) {
        if (kata[i] === 'a' && kata[i + 4] === 'b') {
            return true;
        } else if (kata[i] === 'b' && kata[i + 4] === 'a') {
            return true;
        }
    }
    return false;
}


// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false