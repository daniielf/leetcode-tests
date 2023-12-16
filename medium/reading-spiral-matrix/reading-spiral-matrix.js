var spiralOrder = function(matrix) {
  let output = [];

  var checkMatrix = (submatrix, inverted) => {
      if (submatrix.length === 0) { return; }

      let row = inverted ? submatrix.length - 1 : 1;
      let col = inverted ? submatrix[0].length - 1 : 1;

      if (!inverted) {
          while (submatrix[0].length) {
              let elem = submatrix[0].splice(0,1)[0];
              if (elem !== undefined) {
                  output.push(elem);
              }
              col += 1;
          }

          while (row < submatrix.length) {
              let elem = submatrix[row].splice(-1)[0];
              if (elem !== undefined) {
                  output.push(elem);
              }
              row += 1;
          }

          submatrix.splice(0,1);
          checkMatrix(submatrix, !inverted);
      } else {
          while (col > 0) {
              let elem = submatrix[row].splice(-1)[0];
              if (elem !== undefined) {
                  output.push(elem);
              }
              col -= 1;
          }

          while (row >= 0) {
              let elem = submatrix[row].splice(0, 1)[0];
              if (elem !== undefined) {
                  output.push(elem);
              }
              row -= 1;
          }

          submatrix.splice(-1);
          checkMatrix(submatrix, !inverted);
      }
  }

  checkMatrix(matrix, false);

  return output;
};