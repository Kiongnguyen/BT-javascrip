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
