import React from "react"
import { StyleSheet, Dimensions, Pressable } from "react-native"

interface ClosedSquareProps {
  onPress: () => void
  onLongPress: () => void
}

export const ClosedSquare = ({ onPress, onLongPress }: ClosedSquareProps) => {
  const size =
    ((Math.min(
      Dimensions.get("window").width,
      Dimensions.get("window").height
    ) /
      10) *
      9) /
    8

  return (
    <Pressable
      style={{ ...styles.container, height: size, width: size }}
      onPress={onPress}
      onLongPress={onLongPress}
    ></Pressable>
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
