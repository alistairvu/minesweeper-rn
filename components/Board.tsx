import React, { useEffect } from "react"
import { Alert, Text, View } from "react-native"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import {
  boardState,
  closedCount,
  loseState,
  runningState,
  timerState,
  winState,
} from "../recoil"
import { useOpenAll } from "../utils/useOpenAll"
import { Square } from "./Square"
import useInterval from "use-interval"

export const Board = () => {
  const [running, setRunning] = useRecoilState(runningState)
  const setTime = useSetRecoilState(timerState)
  const setWin = useSetRecoilState(winState)
  const boardValues = useRecoilValue(boardState)
  const closeValue = useRecoilValue(closedCount)
  const lose = useRecoilValue(loseState)
  const openAll = useOpenAll()

  useInterval(
    () => {
      setTime((prev) => (prev + 1 > 999 ? 999 : prev + 1))
    },
    running ? 1000 : null
  )

  useEffect(() => {
    if (closeValue <= 10 && !lose) {
      openAll()
    }
    if (closeValue === 0 && !lose) {
      setRunning(false)
      setWin(true)
      Alert.alert("YOU WIN!")
    }
  }, [closeValue])

  useEffect(() => {
    if (lose) {
      setRunning(false)
    }
  })

  useEffect(() => {
    if (lose) {
      openAll()
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
