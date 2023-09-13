// Kiểm tra xem trong 1 string có chứa tất cả các kí tự của string thứ 2 hay không.

// function testStr(str1, str2) {
//   const arrStr2 = str2.split("");
//   let bl = false;
//   arrStr2.forEach((tag) => {
//     if (str1.includes(tag)) {
//       bl = true;
//     } else {
//       bl = false;
//     }
//   });
//   return console.log(bl);
// }

function testStr(str1, str2) {
  const arrStr2 = str2.split("");
  let bl = true;
  arrStr2.forEach((tag) => {
    if (str1.indexOf(tag) === -1) {
      bl = false;
    }
  });
  return console.log(bl);
}

testStr("acdsfkgsd", "agafkfkfkfkfdsdkspd");
