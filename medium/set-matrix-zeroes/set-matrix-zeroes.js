/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let rowsToZero = {};
  let colsToZero = {};

  // read
  for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
          if (matrix[row][col] === 0) {
              rowsToZero[row] = true;
              colsToZero[col] = true;
          }
      }
  }


  // write
  for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
          if (rowsToZero[row] === true || colsToZero[col] === true) {
              matrix[row][col] = 0;
          }
      }
  }
};