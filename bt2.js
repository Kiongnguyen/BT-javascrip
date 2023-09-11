//2. Tìm độ dài của từ dài nhất trong câu.
const text = "Nguyen Van Cuong";

function findLongestWord(text) {
  const arraySt = text.split(" ");
  let maxLength = 0;
  let longestWord = "";

  for (let i = 0; i < arraySt.length; i++) {
    if (arraySt[i].length > maxLength) {
      maxLength = arraySt[i].length;
      longestWord = arraySt[i];
    }
  }

  console.log(longestWord);
}

findLongestWord(text);
