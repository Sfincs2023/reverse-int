module.exports = function reverse (n) {
    let strNum = n.toString();
    let reverseStr = strNum.split('').reverse().join('');
    let reverseNum = parseInt(reverseStr, 10);
    if (n < 0) {
        reverseNum *= -1;
    }
    return reverseNum;
}
