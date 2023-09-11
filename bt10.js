//Cho một string, nhiệm vụ của bạn là phải đảo ngược lại string đó. Ví dụ: Hello => olleH.

function stringDown(str) {
  if (typeof str === "string") {
    let stringDown = "";
    for (let char of str) {
      stringDown = char + stringDown;
    }
    return console.log(stringDown);
  } else {
    return console.log("add String ?");
  }
}

stringDown("Kiong");
