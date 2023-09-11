// Bỏ đi tất cả các giá trị falsy khỏi một mảng
// (giá trị falsy là false, null, 0, "", undefined và NaN).

function trueArray(array) {
  //const falseArray = [false, null, 0, "", undefined, NaN];
  const trueArray = array.filter((item) => {
    return item; //!falseArray.includes(item);
  });

  return console.log(trueArray);
}
const array = [0, null, 3, 2, 4, undefined, "kiong"];

trueArray(array);
