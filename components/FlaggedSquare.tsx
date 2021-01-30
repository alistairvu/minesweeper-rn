import React, { useEffect } from "react"
import { StyleSheet, Dimensions, Pressable, Vibration } from "react-native"
import { Ionicons } from "@expo/vector-icons"

interface ClosedSquareProps {
  onLongPress: () => void
}

export const FlaggedSquare = ({ onLongPress }: ClosedSquareProps) => {
  const size =
    ((Math.min(
      Dimensions.get("window").width,
      Dimensions.get("window").height
    ) /
      10) *
      9) /
    8

  useEffect(() => Vibration.vibrate([100]), [])

  return (
    <Pressable
      style={{ ...styles.container, height: size, width: size }}
      onLongPress={onLongPress}
    >
      <Ionicons name="flag" size={25} color="red" />
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
