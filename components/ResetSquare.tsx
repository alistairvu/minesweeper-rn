import React from "react"
import { StyleSheet, Dimensions, Pressable, Text } from "react-native"
import { useRecoilValue } from "recoil"
import { loseState } from "../recoil"
import { useReset } from "../utils/useReset"

export const ResetSquare = () => {
  const size = ((Dimensions.get("window").width / 10) * 9) / 8
  const handleReset = useReset()
  const lose = useRecoilValue(loseState)

  return (
    <Pressable
      style={{ ...styles.container, height: size, width: size }}
      onPress={handleReset}
    >
      <Text style={{ fontSize: 25 }}>{lose ? "😞" : "😃"}</Text>
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
