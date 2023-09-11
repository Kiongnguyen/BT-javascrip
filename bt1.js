//Tính giai thừa của một số tự nhiên n!. Ví dụ: 5! = 5 * 4 * 3 * 2 * 1.
function giaithua(n) {
  if (n < 0) {
    var result = "nhap so lon hon 0!";
  } else {
    var result = 1;
    for (var i = 2; i <= n; i++) {
      result *= i;
    }
  }
  return result;
}

console.log(giaithua(-5));
