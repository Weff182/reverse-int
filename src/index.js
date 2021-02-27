module.exports = function reverse (n) {
    if (n < 0) {
        n = n*-1;
        let reversed = String(n).split('').reverse().join(''); 
    }
    let reversed = String(n).split('').reverse().join(''); 
    let result = Number(reversed);
    return result;
 }

