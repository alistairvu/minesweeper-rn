import React from "react"
import { StyleSheet, Dimensions, Pressable, Text } from "react-native"
import { useRecoilValue } from "recoil"
import { loseState, winState } from "../recoil"
import { useReset } from "../utils/useReset"

export const ResetSquare = () => {
  const size =
    ((Math.min(
      Dimensions.get("window").width,
      Dimensions.get("window").height
    ) /
      10) *
      9) /
    8
  const handleReset = useReset()
  const lose = useRecoilValue(loseState)
  const win = useRecoilValue(winState)

  return (
    <Pressable
      style={{ ...styles.container, height: size, width: size }}
      onPress={handleReset}
    >
      <Text style={{ fontSize: 25 }}>{win ? "🤩" : lose ? "😞" : "😃"}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#a9a9a9",
    backgroundColor: "#808080",
  },
})
