function shoppingTime(memberId, money) {
    if (memberId === '') {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    } else if (money < 50000) {
        return 'Mohon maaf, uang tidak cukup';
    } else if (memberId === undefined && money === undefined) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    }
    var prices = [
        ['Sepatu Stacattu', 1500000],
        ['Baju Zoro', 500000],
        ['Baju H&N', 250000],
        ['Sweater Uniklooh', 175000],
        ['Casing Handphone', 50000]
    ];
    var data = {};
    data.memberId = memberId;
    data.money = money;
    var total = money;
    var list = [];
    for (var i = 0; i < prices.length; i++) {
        if (money >= prices[i][1]) {
            total -= prices[i][1];
            list.push(prices[i][0]);
        }
    }
    data.listPurchased = list;
    data.changeMoney = total;
    return data;
}
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja