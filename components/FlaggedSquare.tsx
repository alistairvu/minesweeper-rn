import React, { useEffect } from "react"
import { StyleSheet, Dimensions, Pressable, Vibration } from "react-native"
import { Ionicons } from "@expo/vector-icons"

interface ClosedSquareProps {
  onLongPress: () => void
}

export const FlaggedSquare = ({ onLongPress }: ClosedSquareProps) => {
  const size = ((Dimensions.get("window").width / 10) * 9) / 8

  useEffect(() => Vibration.vibrate(), [])

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
    borderColor: "darkgray",
    backgroundColor: "gray",
  },
})
