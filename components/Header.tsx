import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { useRecoilValue } from "recoil"
import { flagLeftCount } from "../recoil"
import { ResetSquare } from "./ResetSquare"

export const Header = () => {
  const flagsLeft = useRecoilValue(flagLeftCount)

  return (
    <View style={styles.container}>
      <View style={{ ...styles.section, flex: 3 }}>
        <Text style={styles.text}>{flagsLeft}</Text>
      </View>
      <View style={{ ...styles.section, flex: 1 }}>
        <ResetSquare />
      </View>
      <View style={{ ...styles.section, flex: 3 }}>
        <Text style={styles.text}>EASY</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  section: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "700",
    fontSize: 25,
  },
})
