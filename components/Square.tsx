import React, { useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { boardState, openState } from "../recoil"
import { flaggedState } from "../recoil/flaggedState"
import { handleOpen } from "../utils/gameUtils"
import { ClosedSquare } from "./ClosedSquare"
import { FlaggedSquare } from "./FlaggedSquare"
import { OpenSquare } from "./OpenSquare"

interface SquareProps {
  col: number
  row: number
}

export const Square = ({ row, col }: SquareProps) => {
  const boardValues = useRecoilValue(boardState)
  const [open, setOpen] = useRecoilState(openState)
  const [flags, setFlags] = useRecoilState(flaggedState)
  const squareValue = boardValues[row][col]
  const pressed = open[row][col]
  const flagged = flags[row][col]

  const handlePress = () => {
    const newVal = handleOpen(open, boardValues, row, col)
    setOpen(newVal)
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

  if (flagged) {
    return <FlaggedSquare onLongPress={handleLongPress} />
  }

  if (pressed) {
    return <OpenSquare content={squareValue} />
  }

  return <ClosedSquare onPress={handlePress} onLongPress={handleLongPress} />
}
