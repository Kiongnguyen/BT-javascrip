// Trả về string với các từ có chữ cái đầu tiên viết hoa.
// Ví dụ: I'm a little tea pot => I'm A Little Tea Pot.

function uppCaseString(string) {
  const array = string.split(" ");
  const newArray = array.map((text) => {
    return text.replace(text[0], text[0].toUpperCase());
  });
  return console.log(newArray.join(" "));
}
uppCaseString("I'm a little tea pot");
