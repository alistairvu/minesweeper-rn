import React, { useEffect } from "react"
import { StyleSheet, View, Text, Dimensions, Alert } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { loseState } from "../recoil/boardState"
import { closedCount } from "../recoil"

interface OpenSquareProps {
  content: number
}

export const OpenSquare = ({ content }: OpenSquareProps) => {
  const size = ((Dimensions.get("window").width / 10) * 9) / 8
  const closeValue = useRecoilValue(closedCount)
  const setLose = useSetRecoilState(loseState)

  useEffect(() => {
    if (content === 9 && closeValue > 10) {
      setLose(true)
    }
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
        backgroundColor: content === 9 ? "red" : "#dcdcdc",
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
