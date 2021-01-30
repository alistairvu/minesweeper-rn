const addOne = (board: Array<Array<number>>, row: number, col: number) => {
  for (const square of [col - 1, col + 1]) {
    if (square >= 0 && square <= 7) {
      board[row][square] != 9 ? (board[row][square] += 1) : null
    }
  }

  for (const squareRow of [row - 1, row + 1]) {
    if (squareRow >= 0 && squareRow <= 7) {
      for (const squareCol of [col - 1, col, col + 1]) {
        if (squareCol >= 0 && squareCol <= 7) {
          board[squareRow][squareCol] != 9
            ? (board[squareRow][squareCol] += 1)
            : null
        }
      }
    }
  }
}

export const generateBoard = (): number[][] => {
  const board = Array(8)

  for (let i = 0; i < 8; i++) {
    const row = Array(8)

    for (let j = 0; j < 8; j++) {
      row[j] = 0
    }

    board[i] = row
  }

  const mineNumbers: Array<number> = []

  while (mineNumbers.length < 10) {
    const nextMine = Math.floor(Math.random() * 62) + 1
    if (
      mineNumbers.indexOf(nextMine) === -1 &&
      [7, 56].indexOf(nextMine) === -1
    ) {
      mineNumbers.push(nextMine)
    }
  }

  for (const mineNumber of mineNumbers) {
    const [row, col] = [Math.floor(mineNumber / 8), mineNumber % 8]
    board[row][col] = 9
    addOne(board, row, col)
  }

  return board
}
