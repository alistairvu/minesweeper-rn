export const handleOpen = (
  open: boolean[][],
  board: number[][],
  row: number,
  col: number
) => {
  const oldVal = [...open]
  const itemValue = board[row][col]

  let newVal = oldVal.map((item, rowIndex) => {
    if (rowIndex === row) {
      return item.map((square, colIndex) => (colIndex === col ? true : square))
    }
    return item
  })

  if (itemValue === 0) {
    for (const squareCol of [col - 1, col + 1]) {
      if (squareCol >= 0 && squareCol < 8 && newVal[row][squareCol] === false) {
        newVal = handleOpen(newVal, board, row, squareCol)
      }
    }

    for (const squareRow of [row - 1, row + 1]) {
      if (squareRow >= 0 && squareRow < 8) {
        for (const squareCol of [col - 1, col, col + 1]) {
          if (
            squareCol >= 0 &&
            squareCol < 8 &&
            newVal[squareRow][squareCol] === false
          ) {
            newVal = handleOpen(newVal, board, squareRow, squareCol)
          }
        }
      }
    }
  }

  return newVal
}
