// Trả về một mảng gồm các số lớn nhất của mỗi sub-array
// vd: [4, 5, 1, 3],
//     [13, 27, 18, 26]
const array = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
];

function maxArrays(array) {
  const maxArrays = array.map((subArray) => {
    const max = Math.max(...subArray);
    return max;
  });

  return maxArrays;
}

const result = maxArrays(array);
console.log(result);
