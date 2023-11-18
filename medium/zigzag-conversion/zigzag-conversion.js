var convert = function(s, numRows) {
  if (numRows <= 1) { return s };
  let matrix = [];
  for (let i = 0; i< numRows;i++){
      matrix.push([]);
  }

  let row = 0;
  let column = 0;

  let isMovingBack = false;


  for (let char of s) {
      matrix[row][column] = char;

      if (isMovingBack) {
          if (row === 0) {
              isMovingBack = false;
              row += 1;
          } else {
              row -= 1;
              column += 1;
          }

      } else {
          if (row === numRows - 1) {
              isMovingBack = true;
              row -= 1;
              column += 1;
          } else {
              row += 1;
          }
      }
  }

  let sentence = "";

  for (let row of matrix) {
      for (let elem of row) {
          if (elem !== undefined) {
              sentence += elem;
          }
      }
  }

  return sentence;
};