/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let length = matrix.length;

  // Revert Diagonally
  for (let row = 0; row < length; row++) {
      for (let col = row + 1; col < length; col++) {
          let aux = matrix[row][col];
          matrix[row][col] = matrix[col][row];
          matrix[col][row] = aux;
      }
  }

  // Mirror Horizontally
  for (let row = 0; row < length; row++) {
      for (let col = 0; col < length / 2; col++) {
          let aux = matrix[row][col];
          matrix[row][col] = matrix[row][length - 1 - col];
          matrix[row][length - 1 - col] = aux;
      }
  }
};