module.exports = function reverse (n) {
    let strNum = n.toString();
    let reverseStr = strNum.split('').reverse().join('');
    let reverseNum = +reverseStr;
    return reverseNum;
}
