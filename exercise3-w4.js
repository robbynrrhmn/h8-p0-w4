function cariMedian(arr) {
    if (arr.length % 2 === 0) {
        let mid = arr.length / 2
        median = (arr[mid] + arr[mid - 1]) / 2
        return median
    } else {
        let mid = arr.length / 2
        median = arr[Math.floor(mid)]
        return median
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5