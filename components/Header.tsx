import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { useRecoilValue } from "recoil"
import { flagsLeftSelector, timerAtom, winAtom } from "../recoil"
import { ResetSquare } from "./ResetSquare"
import { Ionicons } from "@expo/vector-icons"

export const Header = () => {
  const time = useRecoilValue(timerAtom)
  const win = useRecoilValue(winAtom)
  const flagsLeft = useRecoilValue(flagsLeftSelector)

  return (
    <View style={styles.container}>
      <View style={{ ...styles.section, flex: 3 }}>
        <View style={styles.sectionItem}>
          <Ionicons name="flag-outline" size={25} color="red" />
        </View>
        <View style={styles.sectionItem}>
          <Text style={styles.text}>{win ? 0 : flagsLeft}</Text>
        </View>
      </View>
      <View style={{ ...styles.section, flex: 1 }}>
        <ResetSquare />
      </View>
      <View style={{ ...styles.section, flex: 3 }}>
        <View style={styles.sectionItem}>
          <Text style={styles.text}>{Math.floor(time)}</Text>
        </View>
        <View style={styles.sectionItem}>
          <Ionicons name="timer-outline" size={25} color="blue" />
        </View>
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
    flexDirection: "row",
  },
  sectionItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    fontWeight: "700",
    fontSize: 25,
  },
})
