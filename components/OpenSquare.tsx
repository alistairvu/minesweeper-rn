import React, { useEffect } from "react"
import { StyleSheet, View, Text, Dimensions, Vibration } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useRecoilValue, useSetRecoilState } from "recoil"
import {
  closedSelector,
  runningAtom,
  loseAtom,
  selectedSquaresAtom,
} from "../recoil"

interface OpenSquareProps {
  content: number
  code: number
}

export const OpenSquare = ({ content, code }: OpenSquareProps) => {
  const size =
    ((Math.min(
      Dimensions.get("window").width,
      Dimensions.get("window").height
    ) /
      10) *
      9) /
    8

  const openedSquares = useRecoilValue(selectedSquaresAtom)
  const closeValue = useRecoilValue(closedSelector)
  const setLose = useSetRecoilState(loseAtom)
  const setRunning = useSetRecoilState(runningAtom)

  useEffect(() => {
    if (content === 9 && closeValue >= 10) {
      setLose(true)
      Vibration.vibrate()
    }
    setRunning(true)
  }, [])

  const colors = [
    "blue",
    "green",
    "red",
    "navy",
    "brown",
    "teal",
    "black",
    "gray",
  ]

  return (
    <View
      style={{
        ...styles.container,
        height: size,
        width: size,
        backgroundColor:
          content === 9 && openedSquares.has(code) ? "red" : "#dcdcdc",
      }}
    >
      {content !== 9 ? (
        <Text style={{ ...styles.text, color: colors[content - 1] }}>
          {content > 0 && content}
        </Text>
      ) : (
        <MaterialCommunityIcons name="mine" size={25} color="black" />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "darkgray",
  },
  text: {
    fontSize: 25,
    fontWeight: "700",
  },
})
