var isValidSudoku = function(board) {
  let map = {};
  for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board.length; col++) {

          let subRow = Math.floor(row/3);
          let subCol = Math.floor(col/3);
          let num = board[row][col];
          if (num === ".") { continue };
          if (
              (map[`row_${row}`] && map[`row_${row}`][num]) ||
              (map[`col_${col}`] && map[`col_${col}`][num]) ||
              (map[`${subRow}${subCol}`] && map[`${subRow}${subCol}`][num])
          ) {
              return false;
          } else {
              map[`row_${row}`] = {...map[`row_${row}`], [num]: true};
              map[`col_${col}`] = {...map[`col_${col}`], [num]: true};
              map[`${subRow}${subCol}`] = {...map[`${subRow}${subCol}`], [num]: true};
          }
      }
  }

  return true;
};