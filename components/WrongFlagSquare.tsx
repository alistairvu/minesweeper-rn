import React from "react"
import { StyleSheet, View, Text, Dimensions, Alert } from "react-native"
import { Entypo } from "@expo/vector-icons"

export const WrongFlagSquare = () => {
  const size = ((Dimensions.get("window").width / 10) * 9) / 8

  return (
    <View
      style={{
        ...styles.container,
        height: size,
        width: size,
        backgroundColor: "pink",
      }}
    >
      <Entypo name="cross" size={40} color="red" />
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
})
