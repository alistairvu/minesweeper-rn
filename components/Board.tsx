import React, { useEffect } from "react"
import { Alert, Text, View } from "react-native"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import {
  boardAtom,
  closedSelector,
  loseAtom,
  runningAtom,
  timerAtom,
  winAtom,
} from "../recoil"
import { useOpenAll } from "../utils/useOpenAll"
import { Square } from "./Square"
import useInterval from "use-interval"
import { useAlert } from "../utils/useAlert"

export const Board = () => {
  const [running, setRunning] = useRecoilState(runningAtom)
  const setTime = useSetRecoilState(timerAtom)
  const setWin = useSetRecoilState(winAtom)
  const boardValues = useRecoilValue(boardAtom)
  const lose = useRecoilValue(loseAtom)
  const closeValue = useRecoilValue(closedSelector)
  const openAll = useOpenAll()
  const { winAlert, loseAlert } = useAlert()

  useInterval(
    () => {
      setTime((prev) => (prev + 1 > 999 ? 999 : prev + 1))
    },
    running ? 1000 : null
  )

  useEffect(() => {
    const handleWin = async () => {
      if (closeValue <= 10 && !lose) {
        openAll()
      }
      if (closeValue === 0 && !lose) {
        setRunning(false)
        setWin(true)
        const winMessage = await winAlert()
        Alert.alert("YOU WON!!", winMessage)
      }
    }
    handleWin()
  }, [closeValue])

  useEffect(() => {
    if (lose) {
      setRunning(false)
    }
  })

  useEffect(() => {
    const handleLose = async () => {
      openAll()
      const loseMessage = await loseAlert()
      Alert.alert("GAME OVER!!", loseMessage)
    }

    if (lose) {
      handleLose()
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
