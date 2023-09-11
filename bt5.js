// Lặp lại string với số lần cho trước.

let str = "Cuong";

function loopStr(str, n) {
  let newStr = "";
  for (let i = 1; i <= n; i++) {
    newStr = newStr + str;
  }
  return newStr;
}

console.log(loopStr(str, 4));
