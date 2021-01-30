import React, { useEffect } from "react"
import { Alert, Text, View } from "react-native"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { boardState, closedCount, loseState, openState } from "../recoil"
import { Square } from "./Square"

export const Board = () => {
  const boardValues = useRecoilValue(boardState)
  const setOpen = useSetRecoilState(openState)
  const closeValue = useRecoilValue(closedCount)
  const lose = useRecoilValue(loseState)

  useEffect(() => {
    if (closeValue <= 10 && !lose) {
      const openAll = (): boolean[][] => {
        const open = Array(8)

        for (let i = 0; i < 8; i++) {
          const row = Array(8)

          for (let j = 0; j < 8; j++) {
            row[j] = true
          }

          open[i] = row
        }

        return open
      }
      setOpen(openAll)
    }
    if (closeValue === 0) {
      Alert.alert("You won!")
    }
  }, [closeValue])

  useEffect(() => {
    if (lose) {
      Alert.alert("GAME OVER!")
    }
  }, [lose])

  const display = boardValues.map((x, row) => (
    <View style={{ flexDirection: "row" }} key={row}>
      {x.map((item, col) => (
        <Square row={row} col={col} key={`${row}-${col}`} />
      ))}
    </View>
  ))

  return <View>{display}</View>
}
