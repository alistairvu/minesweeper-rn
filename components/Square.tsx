import React from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import {
  boardState,
  openState,
  loseState,
  flaggedState,
  openedSquaresState,
} from "../recoil"
import { handleOpen } from "../utils/gameUtils"
import { ClosedSquare } from "./ClosedSquare"
import { FlaggedSquare } from "./FlaggedSquare"
import { OpenSquare } from "./OpenSquare"
import { WrongFlagSquare } from "./WrongFlagSquare"
interface SquareProps {
  col: number
  row: number
}

export const Square = ({ row, col }: SquareProps) => {
  const boardValues = useRecoilValue(boardState)
  const [open, setOpen] = useRecoilState(openState)
  const [flags, setFlags] = useRecoilState(flaggedState)
  const setOpenedSquares = useSetRecoilState(openedSquaresState)
  const squareValue = boardValues[row][col]
  const pressed = open[row][col]
  const flagged = flags[row][col]
  const lose = useRecoilValue(loseState)

  const handlePress = () => {
    const newVal = handleOpen(open, boardValues, row, col)
    setOpen(newVal)
    setOpenedSquares((prev) => {
      const newSet = new Set(prev)
      newSet.add(row * 8 + col)
      return newSet
    })
  }

  const handleLongPress = () => {
    const oldVal = [...flags]

    const newVal = oldVal.map((item, rowIndex) => {
      if (rowIndex === row) {
        return item.map((square, colIndex) =>
          colIndex === col ? !square : square
        )
      }
      return item
    })

    setFlags(newVal)
  }

  if (lose && flagged && squareValue !== 9) {
    return <WrongFlagSquare />
  }

  if (flagged) {
    return <FlaggedSquare onLongPress={handleLongPress} />
  }

  if (pressed) {
    return <OpenSquare content={squareValue} code={row * 8 + col} />
  }

  return <ClosedSquare onPress={handlePress} onLongPress={handleLongPress} />
}
